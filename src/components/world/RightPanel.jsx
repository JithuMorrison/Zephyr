import React, { useState } from 'react';
import worldData from '../../data/world_data.json';

const RightPanel = ({ entity, onNavigate, maxRead }) => {
  const [activeTab, setActiveTab] = useState('info');

  const isVisible = (field) => {
    if (maxRead === undefined) return true;
    if (!entity?.visibility || entity.visibility[field] === undefined) return true;
    return maxRead >= entity.visibility[field];
  };

  const censor = (field, val) => isVisible(field) ? val : '???';

  if (!entity) {
    return (
      <aside className="right-panel">
        <div className="empty-state">
          <p>Select an entry to view details</p>
        </div>
      </aside>
    );
  }

  const handleLinkClick = (id) => {
    onNavigate(id);
  };

  return (
    <aside className="right-panel">
      <div className="rp-gear">⚙</div>
      <h3 className="rp-title">{censor('name', entity.name)}</h3>
      <div className="rp-subtitle">{censor('epithet', entity.epithet) || censor('type', entity.type)}</div>

      <div className="rp-tabs">
        <div 
          className={`rp-tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </div>
      </div>

      {activeTab === 'info' && (
        <>
          {entity.img && (
            <div className="rp-image-wrap">
              <img src={entity.img} alt={entity.name} />
              <button className="rp-img-arrow prev">‹</button>
              <button className="rp-img-arrow next">›</button>
            </div>
          )}

          <div className="rp-section">
            <div className="rp-field">
              <span className="rp-field-key">Type</span>
              <span className="rp-field-val">{censor('type', entity.type)}</span>
            </div>
            {entity.era && (
              <div className="rp-field">
                <span className="rp-field-key">Era</span>
                <span className="rp-field-val">{censor('era', entity.era)}</span>
              </div>
            )}
            {entity.race && (
              <div className="rp-field">
                <span className="rp-field-key">Race</span>
                <span className="rp-field-val">{censor('race', entity.race)}</span>
              </div>
            )}
            {entity.location && (
              <div className="rp-field">
                <span className="rp-field-key">Location</span>
                <span className="rp-field-val">
                  {censor('location', entity.location)}
                </span>
              </div>
            )}
            {entity.status && (
              <div className="rp-field">
                <span className="rp-field-key">Status</span>
                <span className="rp-field-val">{censor('status', entity.status)}</span>
              </div>
            )}
            {entity.inhabitants && (
              <div className="rp-field">
                <span className="rp-field-key">Inhabitants</span>
                <span className="rp-field-val">{censor('inhabitants', entity.inhabitants)}</span>
              </div>
            )}
            
            {/* Catch-all for any other fields like port_details */}
            {Object.entries(entity).map(([k, v]) => {
              const skipKeys = ['id', 'name', 'epithet', 'category', 'description', 'sections', 'links', 'tags', 'img', 'type', 'race', 'status', 'location', 'inhabitants', 'era', 'visibility'];
              if (skipKeys.includes(k) || !v) return null;
              
              if (typeof v === 'object' && !Array.isArray(v)) {
                return (
                  <div className="rp-section" key={k} style={{marginTop: '1rem', borderTop: '1px dashed var(--border)', paddingTop: '0.5rem'}}>
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

          {entity.tags && entity.tags.length > 0 && isVisible('tags') && (
            <div className="rp-section">
              <div className="rp-section-label">Tags</div>
              <div className="tags-wrap">
                {entity.tags.map(tag => (
                  <span className="tag" key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          )}

          {entity.links && entity.links.length > 0 && (
            <div className="rp-section">
              <div className="rp-section-label">Linked Pages ({entity.links.length})</div>
              <div className="rp-links">
                {entity.links.map((link, i) => (
                  <div className="rp-link-item" key={i} onClick={() => handleLinkClick(link.id)}>
                    <span className="link-icon">🔗</span>
                    {link.label}: {worldData.entries.find(e => e.id === link.id)?.name || link.id}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}


    </aside>
  );
};

export default RightPanel;
