import React from 'react';

const AdminRightPanel = ({ entity, editMode, setDraftEntity, onNavigate, worldData }) => {
  if (!entity) {
    return (
      <aside className="right-panel">
        <div className="empty-state" style={{padding:'2rem', textAlign:'center', color:'var(--text3)'}}>
          <p>Select an entry to view details</p>
        </div>
      </aside>
    );
  }

  const handleChange = (field, value) => {
    setDraftEntity(prev => ({ ...prev, [field]: value }));
  };

  const handleGeoChange = (field, value) => {
    setDraftEntity(prev => ({
      ...prev,
      geo: { ...(prev.geo || {}), [field]: value }
    }));
  };

  const handleTagsChange = (val) => {
    const tags = val.split(',').map(t => t.trim()).filter(t => t.length > 0);
    setDraftEntity(prev => ({ ...prev, tags }));
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

  const inputStyle = { background: 'var(--surface2)', border: '1px dashed var(--border3)', color: 'var(--text)', width: '100%', boxSizing: 'border-box', padding: '2px' };
  
  // Standard fields
  const standardFields = ['type', 'era', 'race', 'location', 'status', 'faction', 'population', 'leader', 'danger_level', 'inhabitants'];

  const [currentImageIdx, setCurrentImageIdx] = React.useState(0);

  // Derive images array
  const images = React.useMemo(() => {
    if (!entity) return [];
    let imgs = [];
    if (entity.img) imgs.push(entity.img);
    if (entity.images && Array.isArray(entity.images)) {
      imgs = [...imgs, ...entity.images];
    }
    return [...new Set(imgs)];
  }, [entity]);

  React.useEffect(() => {
    setCurrentImageIdx(0);
  }, [entity?.id]);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIdx(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleAddImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('image', file);
    formData.append('entityId', entity.id);
    formData.append('category', entity.category);
    
    try {
      const res = await fetch('/api/upload-image', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        const currentImages = entity.images || [];
        setDraftEntity(prev => ({ ...prev, images: [...currentImages, data.imageUrl] }));
      }
    } catch (err) {
      console.error('Failed to upload extra image', err);
    }
  };

  const handleRemoveImage = (urlToRemove) => {
    if (urlToRemove === entity.img) {
      setDraftEntity(prev => ({ ...prev, img: '' }));
    } else {
      setDraftEntity(prev => ({ 
        ...prev, 
        images: (prev.images || []).filter(u => u !== urlToRemove) 
      }));
    }
    // Also call delete-image endpoint
    fetch('/api/delete-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: urlToRemove })
    }).catch(console.error);
  };

  return (
    <aside className="right-panel">
      {!editMode && <div className="rp-title">{entity.name}</div>}
      {!editMode && <div className="rp-subtitle">{entity.epithet || entity.category}</div>}

      <div className="rp-tabs">
        <div className="rp-tab active">Info</div>
      </div>
      
      <div className="rp-tab-content active">
        {images.length > 0 && (
          <div className="rp-image-wrap" style={{position:'relative', border:'1px solid var(--border2)', borderRadius:'3px', overflow:'hidden', marginBottom:'1rem'}}>
            <img src={images[currentImageIdx]} alt={entity.name} style={{width:'100%', display:'block'}} />
            {images.length > 1 && (
              <>
                <button className="rp-img-arrow prev" onClick={(e) => { e.stopPropagation(); setCurrentImageIdx(prev => (prev - 1 + images.length) % images.length); }} style={{position:'absolute', top:'50%', transform:'translateY(-50%)', left:6, background:'rgba(0,0,0,0.5)', border:'none', color:'#fff', width:22, height:22, borderRadius:'50%', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}>‹</button>
                <button className="rp-img-arrow next" onClick={(e) => { e.stopPropagation(); setCurrentImageIdx(prev => (prev + 1) % images.length); }} style={{position:'absolute', top:'50%', transform:'translateY(-50%)', right:6, background:'rgba(0,0,0,0.5)', border:'none', color:'#fff', width:22, height:22, borderRadius:'50%', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}>›</button>
                <div style={{position:'absolute', bottom:'8px', left:0, right:0, display:'flex', justifyContent:'center', gap:'4px'}}>
                  {images.map((_, i) => (
                    <div key={i} style={{width:'6px', height:'6px', borderRadius:'50%', background: i === currentImageIdx ? 'var(--gold)' : 'rgba(255,255,255,0.4)'}} />
                  ))}
                </div>
              </>
            )}
            {editMode && (
              <button 
                onClick={(e) => { e.stopPropagation(); handleRemoveImage(images[currentImageIdx]); }}
                style={{position:'absolute', top:4, right:4, background:'rgba(200,0,0,0.8)', color:'white', border:'none', padding:'2px 6px', fontSize:'10px', borderRadius:'3px', cursor:'pointer'}}
              >
                Delete
              </button>
            )}
          </div>
        )}
        
        {editMode && (
          <div style={{marginBottom:'1rem', textAlign:'center'}}>
            <label style={{cursor:'pointer', color:'var(--text2)', background:'var(--surface2)', border:'1px dashed var(--border3)', padding:'4px 8px', borderRadius:'4px', fontSize:'12px', display:'inline-block'}}>
              + Add Image
              <input type="file" accept="image/*" style={{display:'none'}} onChange={handleAddImage} />
            </label>
          </div>
        )}

        {editMode ? (
          <>
            {standardFields.map(k => (
              <div className="rp-field" style={{flexDirection:'column', alignItems:'flex-start', gap:'4px', marginBottom:'8px'}} key={k}>
                <span className="rp-field-key" style={{textTransform:'capitalize'}}>{k.replace('_', ' ')}</span>
                <div style={{display:'flex', width:'100%', gap:'4px'}}>
                  <input 
                    value={entity[k] || ''} 
                    onChange={e => handleChange(k, e.target.value)} 
                    style={{...inputStyle, flex:1}} 
                  />
                  <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.[k] || ''} onChange={e => handleVisibilityChange(k, e.target.value)} style={{...inputStyle, width:'50px'}} />
                </div>
              </div>
            ))}

            {worldData.subfolders && worldData.subfolders[entity.category] && (
              <div className="rp-field" style={{flexDirection:'column', alignItems:'flex-start', gap:'4px', marginBottom:'8px'}}>
                <span className="rp-field-key">Subfolder</span>
                <select value={entity.subfolderId || ''} onChange={e => handleChange('subfolderId', e.target.value)} style={{...inputStyle, width:'100%'}}>
                  <option value="">(Uncategorized)</option>
                  {worldData.subfolders[entity.category].map(folder => (
                    <option key={folder.id} value={folder.id}>{folder.name}</option>
                  ))}
                </select>
              </div>
            )}
            
            {entity.category === 'locations' && (
              <>
                <div className="rp-section" style={{marginTop:'1.5rem', marginBottom:'1rem', borderTop:'1px solid var(--border)', paddingTop:'1rem'}}>
                  <div className="rp-section-label">Hierarchy & Map</div>
                  
                  <div className="rp-field" style={{flexDirection:'column', alignItems:'flex-start', gap:'4px', marginBottom:'8px'}}>
                    <span className="rp-field-key">Location Type</span>
                    <select value={entity.locationType || 'region'} onChange={e => handleChange('locationType', e.target.value)} style={{...inputStyle, width:'100%'}}>
                      <option value="world">World</option>
                      <option value="continent">Continent</option>
                      <option value="ocean">Ocean</option>
                      <option value="region">Region</option>
                      <option value="city">City / City-State</option>
                      <option value="town">Town</option>
                      <option value="village">Village</option>
                      <option value="forest">Forest</option>
                      <option value="mountain">Mountain</option>
                      <option value="plains">Plains</option>
                      <option value="island">Island</option>
                    </select>
                  </div>
                  
                  <div className="rp-field" style={{flexDirection:'column', alignItems:'flex-start', gap:'4px', marginBottom:'8px'}}>
                    <span className="rp-field-key">Parent Location</span>
                    <select value={entity.parentId || ''} onChange={e => handleChange('parentId', e.target.value)} style={{...inputStyle, width:'100%'}}>
                      <option value="">None (Root Level)</option>
                      {worldData.entries.filter(e => e.category === 'locations' && e.id !== entity.id).map(loc => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'0.5rem'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Latitude</span>
                      <input type="number" step="any" value={entity.geo?.lat || ''} onChange={e => handleGeoChange('lat', parseFloat(e.target.value))} style={inputStyle} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Longitude</span>
                      <input type="number" step="any" value={entity.geo?.lng || ''} onChange={e => handleGeoChange('lng', parseFloat(e.target.value))} style={inputStyle} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Width (km)</span>
                      <input type="number" step="any" value={entity.geo?.width || ''} onChange={e => handleGeoChange('width', parseFloat(e.target.value))} style={inputStyle} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Height (km)</span>
                      <input type="number" step="any" value={entity.geo?.height || ''} onChange={e => handleGeoChange('height', parseFloat(e.target.value))} style={inputStyle} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Elevation (m)</span>
                      <input type="number" step="any" value={entity.geo?.elevation || ''} onChange={e => handleGeoChange('elevation', parseFloat(e.target.value))} style={inputStyle} />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
                      <span className="rp-field-key" style={{fontSize:'0.7rem'}}>Direction</span>
                      <input type="text" value={entity.geo?.direction || ''} onChange={e => handleGeoChange('direction', e.target.value)} style={inputStyle} placeholder="N, NE, SW..." />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="rp-section" style={{marginTop:'1rem'}}>
              <div className="rp-section-label">Tags (comma separated)</div>
              <div style={{display:'flex', width:'100%', gap:'4px', marginTop:'4px'}}>
                <input 
                  value={(entity.tags || []).join(', ')} 
                  onChange={e => handleTagsChange(e.target.value)} 
                  style={{...inputStyle, padding:'4px', flex:1}} 
                />
                <input type="number" placeholder="Ch." title="Unlock Chapter" value={entity.visibility?.tags || ''} onChange={e => handleVisibilityChange('tags', e.target.value)} style={{...inputStyle, width:'50px'}} />
              </div>
            </div>
            
            <div className="rp-section" style={{marginTop:'1rem'}}>
              <div className="rp-section-label">Edit Linked Pages not yet supported inline.</div>
            </div>
          </>
        ) : (
          <>
            <div className="rp-section">
              {entity.type && (
                <div className="rp-field">
                  <span className="rp-field-key">Type</span>
                  <span className="rp-field-val">{entity.type}</span>
                </div>
              )}
              {entity.era && (
                <div className="rp-field">
                  <span className="rp-field-key">Era</span>
                  <span className="rp-field-val">{entity.era}</span>
                </div>
              )}
              {entity.race && (
                <div className="rp-field">
                  <span className="rp-field-key">Race</span>
                  <span className="rp-field-val">{entity.race}</span>
                </div>
              )}
              {entity.location && (
                <div className="rp-field">
                  <span className="rp-field-key">Location</span>
                  <span className="rp-field-val">{entity.location}</span>
                </div>
              )}
              {entity.status && (
                <div className="rp-field">
                  <span className="rp-field-key">Status</span>
                  <span className="rp-field-val">{entity.status}</span>
                </div>
              )}
              {entity.inhabitants && (
                <div className="rp-field">
                  <span className="rp-field-key">Inhabitants</span>
                  <span className="rp-field-val">{entity.inhabitants}</span>
                </div>
              )}
              {/* Catch-all for any other fields that might have been added */}
              {Object.entries(entity).map(([k, v]) => {
                const skipKeys = ['id', 'name', 'epithet', 'category', 'description', 'sections', 'links', 'tags', 'img', 'type', 'race', 'status', 'location', 'inhabitants', 'era', 'visibility'];
                if (skipKeys.includes(k) || !v) return null;
                if (typeof v === 'object' && !Array.isArray(v)) {
                  return (
                    <div className="rp-section" key={k} style={{marginTop: '1rem'}}>
                      <div className="rp-section-label" style={{textTransform: 'capitalize'}}>{k.replace('_', ' ')}</div>
                      {Object.entries(v).map(([subK, subV]) => (
                        <div className="rp-field" key={subK}>
                          <span className="rp-field-key" style={{textTransform: 'capitalize'}}>{subK.replace('_', ' ')}</span>
                          <span className="rp-field-val">{typeof subV === 'object' ? JSON.stringify(subV) : subV}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                
                return (
                  <div className="rp-field" key={k}>
                    <span className="rp-field-key" style={{textTransform: 'capitalize'}}>{k.replace('_', ' ')}</span>
                    <span className="rp-field-val">{v}</span>
                  </div>
                );
              })}
            </div>
            
            {entity.tags && entity.tags.length > 0 && (
              <div className="rp-section">
                <div className="rp-section-label">Tags</div>
                <div className="tags-wrap">
                  {entity.tags.map(tag => (
                    <span className="tag" key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            )}

            {entity.links && entity.links.length > 0 && worldData && (
              <div className="rp-section">
                <div className="rp-section-label">Linked Pages ({entity.links.length})</div>
                <div className="rp-links">
                  {entity.links.map((link, i) => (
                    <div className="rp-link-item" key={i} onClick={() => onNavigate(link.id)}>
                      <span className="link-icon">🔗</span>
                      {link.label}: {worldData.entries.find(e => e.id === link.id)?.name || link.id}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default AdminRightPanel;
