import React from 'react';

const AdminEntityDisplay = ({ entity, editMode, setDraftEntity, onNavigate }) => {
  if (!entity) return null;

  const handleChange = (field, value) => {
    setDraftEntity(prev => ({ ...prev, [field]: value }));
  };

  const handleSectionChange = (index, field, value) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      newSections[index] = { ...newSections[index], [field]: value };
      return { ...prev, sections: newSections };
    });
  };

  const handleVisibilityChange = (field, chapterNum) => {
    setDraftEntity(prev => ({
      ...prev,
      visibility: {
        ...(prev.visibility || {}),
        [field]: chapterNum ? parseInt(chapterNum, 10) : undefined
      }
    }));
  };


  const normalizeBlocks = (sec, isRight = false) => {
    if (isRight) {
      if (sec.blocksRight !== undefined) return sec.blocksRight;
      const b = [];
      if (sec.imgRight) b.push({ type: 'image', content: sec.imgRight });
      if (sec.contentRight) b.push({ type: 'paragraph', content: sec.contentRight });
      return b;
    } else {
      if (sec.blocks !== undefined) return sec.blocks;
      const b = [];
      if (sec.img) b.push({ type: 'image', content: sec.img });
      if (sec.content) b.push({ type: 'paragraph', content: sec.content });
      return b;
    }
  };

  const handleBlockChange = (sectionIndex, isRight, blockIndex, field, value) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      const sec = { ...newSections[sectionIndex] };
      const blocksKey = isRight ? 'blocksRight' : 'blocks';
      const blocks = [...normalizeBlocks(sec, isRight)];
      blocks[blockIndex] = { ...blocks[blockIndex], [field]: value };
      sec[blocksKey] = blocks;
      newSections[sectionIndex] = sec;
      return { ...prev, sections: newSections };
    });
  };

  const handleAddBlock = (sectionIndex, isRight) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      const sec = { ...newSections[sectionIndex] };
      const blocksKey = isRight ? 'blocksRight' : 'blocks';
      const blocks = [...normalizeBlocks(sec, isRight)];
      blocks.push({ type: 'paragraph', content: '' });
      sec[blocksKey] = blocks;
      newSections[sectionIndex] = sec;
      return { ...prev, sections: newSections };
    });
  };

  const handleRemoveBlock = (sectionIndex, isRight, blockIndex) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      const sec = { ...newSections[sectionIndex] };
      const blocksKey = isRight ? 'blocksRight' : 'blocks';
      const blocks = [...normalizeBlocks(sec, isRight)];
      
      const removedBlock = blocks[blockIndex];
      if (removedBlock && removedBlock.type === 'image' && removedBlock.content) {
        deleteImageFile(removedBlock.content);
      }
      
      blocks.splice(blockIndex, 1);
      sec[blocksKey] = blocks;
      newSections[sectionIndex] = sec;
      return { ...prev, sections: newSections };
    });
  };

  const moveBlock = (sectionIndex, isRight, blockIndex, dir) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      const sec = { ...newSections[sectionIndex] };
      const blocksKey = isRight ? 'blocksRight' : 'blocks';
      const blocks = [...normalizeBlocks(sec, isRight)];
      if (blockIndex + dir < 0 || blockIndex + dir >= blocks.length) return prev;
      const temp = blocks[blockIndex];
      blocks[blockIndex] = blocks[blockIndex + dir];
      blocks[blockIndex + dir] = temp;
      sec[blocksKey] = blocks;
      newSections[sectionIndex] = sec;
      return { ...prev, sections: newSections };
    });
  };

  const deleteImageFile = async (url) => {
    if (!url || !url.startsWith('/images/')) return;
    try {
      await fetch('/api/delete-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
    } catch (e) {
      console.error('Failed to delete old image', e);
    }
  };

  const doUpload = (file, cb) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const catPath = `${entity.category || 'misc'}/${entity.id || 'new'}`;
        const response = await fetch('/api/upload-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, image: event.target.result, category: catPath })
        });
        const result = await response.json();
        if (result.success) {
          cb(result.url);
        } else {
          alert('Upload failed: ' + result.error);
        }
      } catch (err) {
        alert('Upload failed: ' + err.message);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageUploadSimple = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (entity[field]) deleteImageFile(entity[field]);
      doUpload(file, (url) => handleChange(field, url));
    }
  };

  const handleDeleteProfileImage = () => {
    if (entity.img) {
      deleteImageFile(entity.img);
      handleChange('img', '');
    }
  };

  const handleBlockImageUpload = (e, sectionIndex, isRight, blockIndex) => {
    const file = e.target.files[0];
    if (file) {
      const block = normalizeBlocks(entity.sections[sectionIndex], isRight)[blockIndex];
      if (block && block.type === 'image' && block.content) {
        deleteImageFile(block.content);
      }
      doUpload(file, (url) => handleBlockChange(sectionIndex, isRight, blockIndex, 'content', url));
    }
  };

  const handleAddSection = () => {
    setDraftEntity(prev => ({
      ...prev,
      sections: [...(prev.sections || []), { heading: 'New Section', blocks: [] }]
    }));
  };

  const handleRemoveSection = (index) => {
    setDraftEntity(prev => {
      const newSections = [...(prev.sections || [])];
      const sec = newSections[index];
      
      // Delete any images inside the section
      const blocksL = normalizeBlocks(sec, false);
      const blocksR = normalizeBlocks(sec, true);
      [...blocksL, ...blocksR].forEach(b => {
        if (b.type === 'image' && b.content) {
          deleteImageFile(b.content);
        }
      });
      
      newSections.splice(index, 1);
      return { ...prev, sections: newSections };
    });
  };

  const renderBlocksEditor = (sec, sectionIndex, isRight) => {
    const blocks = normalizeBlocks(sec, isRight);
    return (
      <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
        {blocks.map((block, bi) => (
          <div key={bi} style={{background: 'var(--surface)', padding:'8px', borderRadius:'4px', border:'1px solid var(--border3)'}}>
            <div style={{display:'flex', gap:'8px', marginBottom:'4px', alignItems:'center'}}>
              <select value={block.type || 'paragraph'} onChange={e => handleBlockChange(sectionIndex, isRight, bi, 'type', e.target.value)} style={{...inputStyle, width:'auto', padding:'2px 4px', fontSize:'12px'}}>
                <option value="paragraph">Paragraph</option>
                <option value="bullet">Bullet Point</option>
                <option value="image">Image</option>
              </select>
              <input type="number" placeholder="Ch." title="Unlock Chapter" value={block.visibility || ''} onChange={e => handleBlockChange(sectionIndex, isRight, bi, 'visibility', e.target.value ? parseInt(e.target.value, 10) : undefined)} style={{...inputStyle, width:'50px', fontSize:'12px', padding:'2px 4px'}} />
              <div style={{flex:1}}></div>
              <button className="tb-btn" style={{padding:'2px 6px', fontSize:'10px'}} onClick={() => moveBlock(sectionIndex, isRight, bi, -1)}>↑</button>
              <button className="tb-btn" style={{padding:'2px 6px', fontSize:'10px'}} onClick={() => moveBlock(sectionIndex, isRight, bi, 1)}>↓</button>
              <button className="tb-btn" style={{padding:'2px 6px', fontSize:'10px', color:'var(--red)'}} onClick={() => handleRemoveBlock(sectionIndex, isRight, bi)}>X</button>
            </div>
            
            {block.type === 'image' ? (
              <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
                <input value={block.content || ''} onChange={e => handleBlockChange(sectionIndex, isRight, bi, 'content', e.target.value)} style={{...inputStyle, flex:1, padding:'4px'}} placeholder="Image URL..." />
                <label className="tb-btn primary" style={{padding:'4px 8px', cursor:'pointer', margin:0}}>
                  Upload <input type="file" accept="image/*" style={{display:'none'}} onChange={e => handleBlockImageUpload(e, sectionIndex, isRight, bi)} />
                </label>
              </div>
            ) : (
              <textarea value={block.content || ''} onChange={e => handleBlockChange(sectionIndex, isRight, bi, 'content', e.target.value)} style={{...inputStyle, padding:'8px', minHeight:'60px', resize:'vertical'}} placeholder="Enter text..." />
            )}
          </div>
        ))}
        <button className="tb-btn" style={{alignSelf:'flex-start', fontSize:'12px', padding:'4px 8px'}} onClick={() => handleAddBlock(sectionIndex, isRight)}>+ Add Block</button>
      </div>
    );
  };

  const renderBlocksDisplay = (sec, isRight) => {
    const blocks = normalizeBlocks(sec, isRight);
    return (
      <div className="prose">
        {blocks.map((block, bi) => {
          if (block.type === 'image' && block.content) {
            return <img key={bi} src={block.content} alt="Block content" style={{maxWidth:'100%', borderRadius:'4px', marginBottom:'1rem'}} />;
          } else if (block.type === 'bullet') {
            return <ul key={bi} style={{marginTop:0, marginBottom:'0.5rem'}}><li>{processLinks(block.content)}</li></ul>;
          } else {
            return <p key={bi}>{processLinks(block.content)}</p>;
          }
        })}
      </div>
    );
  };

  const renderSections = () => {
    return (
      <>
        {(entity.sections || []).map((sec, i) => (
          <div className="section-block" style={{marginTop:'2rem'}} key={i}>
            {editMode ? (
              <div style={{display:'flex', gap:'8px', marginBottom:'1rem'}}>
                <input value={sec.heading || ''} onChange={e => handleSectionChange(i, 'heading', e.target.value)} className="section-heading" style={{...inputStyle, flex:1, padding:'4px'}} placeholder="Section Heading" />
                <select value={sec.layout || '1-col'} onChange={e => handleSectionChange(i, 'layout', e.target.value)} style={{...inputStyle, width:'auto'}}>
                  <option value="1-col">1 Column</option>
                  <option value="2-col">2 Columns</option>
                </select>
                <input type="number" placeholder="Ch. Lock" title="Unlock Chapter" value={entity.visibility?.[`sections_${i}`] || ''} onChange={e => handleVisibilityChange(`sections_${i}`, e.target.value)} style={{...inputStyle, width:'70px'}} />
                <button className="tb-btn" style={{padding:'4px 12px', color:'var(--red)'}} onClick={() => handleRemoveSection(i)}>Delete</button>
              </div>
            ) : (
              <h2 className="section-heading">{sec.heading}</h2>
            )}

            {sec.layout === '2-col' ? (
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                <div>{editMode ? renderBlocksEditor(sec, i, false) : renderBlocksDisplay(sec, false)}</div>
                <div>{editMode ? renderBlocksEditor(sec, i, true)  : renderBlocksDisplay(sec, true)}</div>
              </div>
            ) : (
              <div>{editMode ? renderBlocksEditor(sec, i, false) : renderBlocksDisplay(sec, false)}</div>
            )}
          </div>
        ))}
        {editMode && (
          <button className="tb-btn" style={{marginTop:'1.5rem'}} onClick={handleAddSection}>+ Add Section</button>
        )}
      </>
    );
  };

  // Simple link renderer for display mode
  const processLinks = (text) => {
    if (!text) return null;
    const parts = text.split(/(<span class="wlink" data-id="[^"]+">[^<]+<\/span>)/g);
    return parts.map((part, i) => {
      const match = part.match(/<span class="wlink" data-id="([^"]+)">([^<]+)<\/span>/);
      if (match) {
        return <span key={i} className="wlink" style={{cursor:'pointer', color:'var(--link)'}} onClick={() => onNavigate(match[1])}>{match[2]}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const inputStyle = { background: 'var(--surface2)', border: '1px dashed var(--border3)', color: 'inherit', font: 'inherit', width: '100%', boxSizing: 'border-box', padding: '2px' };
  const textareaStyle = { ...inputStyle, padding: '8px', minHeight: '120px', resize: 'vertical' };

  const isCharacter = entity.id ? entity.id.startsWith('char-') : entity.category === 'characters';
  
  if (isCharacter) {
    return (
      <div className="page active">
        <div className="char-header">
          <div className="char-portrait" style={{position:'relative'}}>
              {entity.img ? <img src={entity.img} alt={entity.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/> : '👤'}
              {editMode && (
                <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', gap:'8px', alignItems:'center', justifyContent:'center'}}>
                  <label style={{cursor:'pointer', color:'#fff', background:'rgba(0,0,0,0.8)', padding:'4px 8px', borderRadius:'4px', fontSize:'12px'}}>
                    Upload
                    <input type="file" accept="image/*" style={{display:'none'}} onChange={e => handleImageUploadSimple(e, 'img')} />
                  </label>
                  {entity.img && (
                    <button className="tb-btn" style={{padding:'2px 8px', color:'var(--red)', background:'rgba(0,0,0,0.8)', fontSize:'12px', border:'none'}} onClick={handleDeleteProfileImage}>Delete</button>
                  )}
                </div>
              )}
            </div>
            <div className="char-info-block" style={{flex:1}}>
              {editMode ? (
                <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'0.5rem'}}>
                  <input 
                    value={entity.name} 
                    onChange={e => handleChange('name', e.target.value)}
                    className="char-name" 
                    style={{...inputStyle, background:'var(--surface)', color:'var(--gold)', fontSize:'2rem', flex:1}}
                    placeholder="Name"
                  />
                  <select 
                    value={entity.category || 'characters'} 
                    onChange={e => handleChange('category', e.target.value)}
                    style={{...inputStyle, width:'120px'}}
                  >
                    <option value="locations">Locations</option>
                    <option value="characters">Characters</option>
                    <option value="factions">Factions</option>
                    <option value="history">History</option>
                    <option value="monsters">Monsters</option>
                  </select>
                  <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.name || ''} onChange={e => handleVisibilityChange('name', e.target.value)} style={{...inputStyle, width:'60px'}} />
                </div>
              ) : (
                <h1 className="char-name">{entity.name}</h1>
              )}
              
              {editMode ? (
                <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'1rem'}}>
                  <input 
                    value={entity.epithet || ''} 
                    onChange={e => handleChange('epithet', e.target.value)}
                    className="char-epithet" 
                    style={{...inputStyle, background:'var(--surface)', color:'var(--text2)', flex:1}}
                    placeholder="Epithet"
                  />
                  <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.epithet || ''} onChange={e => handleVisibilityChange('epithet', e.target.value)} style={{...inputStyle, width:'60px'}} />
                </div>
              ) : (
                <div className="char-epithet">{entity.epithet || ''}</div>
              )}
              
              <div className="stat-pills" style={{marginTop:'auto'}}>
                {editMode ? (
                  <>
                    <div style={{display:'flex', alignItems:'center', gap:'2px'}}>
                      <input value={entity.race || ''} onChange={e => handleChange('race', e.target.value)} className="stat-pill" placeholder="Race" style={{...inputStyle, width:'90px'}} />
                      <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.race || ''} onChange={e => handleVisibilityChange('race', e.target.value)} style={{...inputStyle, width:'40px', fontSize:'10px'}} />
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:'2px'}}>
                      <input value={entity.status || ''} onChange={e => handleChange('status', e.target.value)} className="stat-pill" placeholder="Status" style={{...inputStyle, width:'90px'}} />
                      <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.status || ''} onChange={e => handleVisibilityChange('status', e.target.value)} style={{...inputStyle, width:'40px', fontSize:'10px'}} />
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:'2px'}}>
                      <input value={entity.era || ''} onChange={e => handleChange('era', e.target.value)} className="stat-pill" placeholder="Era" style={{...inputStyle, width:'90px'}} />
                      <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.era || ''} onChange={e => handleVisibilityChange('era', e.target.value)} style={{...inputStyle, width:'40px', fontSize:'10px'}} />
                    </div>
                  </>
                ) : (
                  <>
                    {entity.race && <div className="stat-pill">Race: <span>{entity.race}</span></div>}
                    {entity.status && <div className="stat-pill">Status: <span>{entity.status}</span></div>}
                    {entity.era && <div className="stat-pill">Era: <span>{entity.era}</span></div>}
                  </>
                )}
              </div>
              
              {editMode ? (
                <div className="tags-wrap" style={{marginTop: '0.75rem', display:'flex', gap:'4px'}}>
                  <input 
                    value={(entity.tags || []).join(', ')} 
                    onChange={e => {
                      const tags = e.target.value.split(',').map(t => t.trim()).filter(t => t.length > 0);
                      setDraftEntity(prev => ({ ...prev, tags }));
                    }} 
                    placeholder="Tags (comma separated)..."
                    style={{...inputStyle, padding:'4px', flex:1}} 
                  />
                  <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.tags || ''} onChange={e => handleVisibilityChange('tags', e.target.value)} style={{...inputStyle, width:'60px'}} />
                </div>
              ) : (
                entity.tags && (
                  <div className="tags-wrap" style={{marginTop: '0.75rem'}}>
                    {entity.tags.map(t => <span key={t} className="tag">#{t}</span>)}
                  </div>
                )
              )}
            </div>
          </div>
        
        <div className="prose">
          {editMode ? (
            <div style={{position:'relative'}}>
              <textarea value={entity.description || ''} onChange={e => handleChange('description', e.target.value)} style={textareaStyle} placeholder="Main description..." />
              <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.description || ''} onChange={e => handleVisibilityChange('description', e.target.value)} style={{...inputStyle, position:'absolute', top:4, right:4, width:'60px'}} />
            </div>
          ) : (
            <p>{processLinks(entity.description)}</p>
          )}
        </div>

        {renderSections()}
      </div>
    );
  }

  return (
      <div className="page active">
      {editMode ? (
        <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'1rem'}}>
          <input 
            value={entity.name} 
            onChange={e => handleChange('name', e.target.value)}
            className="page-title" 
            style={{...inputStyle, background:'var(--surface)', color:'var(--gold)', flex:1, marginBottom:0}}
            placeholder="Page Title"
          />
          <select 
            value={entity.category || 'locations'} 
            onChange={e => handleChange('category', e.target.value)}
            style={{...inputStyle, width:'120px', marginBottom:0}}
          >
            <option value="locations">Locations</option>
            <option value="characters">Characters</option>
            <option value="factions">Factions</option>
            <option value="history">History</option>
            <option value="monsters">Monsters</option>
          </select>
          <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.name || ''} onChange={e => handleVisibilityChange('name', e.target.value)} style={{...inputStyle, width:'60px', marginBottom:0}} />
        </div>
      ) : (
        <h1 className="page-title">{entity.name}</h1>
      )}
      
      <div style={{position:'relative', marginBottom:'2rem'}}>
        {editMode && (
          <div style={{position:'absolute', top:0, left:0, width:'100%', background:'rgba(0,0,0,0.8)', padding:'8px', zIndex:10, display:'flex', gap:'8px', alignItems:'center'}}>
            <input 
              value={entity.img || ''} 
              onChange={e => handleChange('img', e.target.value)}
              placeholder="Header Image URL..." 
              style={{flex:1, background:'transparent', color:'#fff', border:'none'}}
            />
            <label style={{cursor:'pointer', color:'#fff', background:'var(--primary)', padding:'2px 8px', borderRadius:'4px', fontSize:'12px', whiteSpace:'nowrap'}}>
              Upload
              <input type="file" accept="image/*" style={{display:'none'}} onChange={e => handleImageUploadSimple(e, 'img')} />
            </label>
          </div>
        )}
        {entity.img ? (
          <div className="content-image" style={{ height: 'auto', border: 'none', background: 'transparent' }}>
            <img src={entity.img} alt="header" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '4px', display: 'block' }} />
          </div>
        ) : (
          editMode && <div className="content-image" style={{background:'#222', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>No Image</div>
        )}
      </div>
      
      <div className="prose">
        {editMode ? (
          <div style={{position:'relative'}}>
            <textarea value={entity.description || ''} onChange={e => handleChange('description', e.target.value)} style={textareaStyle} placeholder="Main description..." />
            <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.description || ''} onChange={e => handleVisibilityChange('description', e.target.value)} style={{...inputStyle, position:'absolute', top:4, right:4, width:'60px'}} />
          </div>
        ) : (
          <p>{processLinks(entity.description)}</p>
        )}
      </div>

      {renderSections()}
    </div>
  );
};

export default AdminEntityDisplay;
