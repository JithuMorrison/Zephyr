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

  return (
    <aside className="right-panel">
      {!editMode && <div className="rp-title">{entity.name}</div>}
      {!editMode && <div className="rp-subtitle">{entity.epithet || entity.category}</div>}

      <div className="rp-tabs">
        <div className="rp-tab active">Info</div>
      </div>
      
      <div className="rp-tab-content active">
        {!editMode && entity.img && entity.category !== 'characters' && (
          <div className="rp-img" style={{backgroundImage: `url('${entity.img}')`}}></div>
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
