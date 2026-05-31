import React, { useState } from 'react';
import worldData from '../../data/world_data.json';

// Utility for rendering text with inline links
const renderContent = (text, onNavigate) => {
  if (!text) return null;
  // This is a simplified renderer. In a full app we'd parse specific tokens.
  return <p>{text}</p>;
};

export const DashboardPage = ({ onSelect, maxRead, worldData: propWorldData }) => {
  const data = propWorldData || worldData;
  
  const getVisibleEntries = () => {
    return data.entries.filter(e => {
      if (maxRead !== undefined && e.visibility?.name !== undefined && maxRead < e.visibility.name) return false;
      return true;
    });
  };
  
  const visibleEntries = getVisibleEntries();
  const getCount = (catId) => visibleEntries.filter(e => e.category === catId).length;

  return (
    <div className="page active">
      <h2 className="page-title">World Dashboard</h2>
      <p className="page-description">
        Welcome to the Chronicler database for the world of Zephyr.
      </p>

      <div className="dashboard-grid">
        {data.categories.map(cat => (
          <div className="dash-card" key={cat.id}>
            <div className="dc-icon">{cat.icon}</div>
            <div className="dc-label">{cat.label}</div>
            <div className="dc-count">{getCount(cat.id)} entries</div>
          </div>
        ))}
      </div>

      <h3 className="section-heading">Recently Modified</h3>
      <div className="recent-list">
        {visibleEntries.slice(0, 5).map(entry => (
          <div className="recent-item" key={entry.id} onClick={() => onSelect(entry.id)}>
            <div className="ri-icon">📄</div>
            <div className="ri-title">{entry.name}</div>
            <div className="ri-cat">{data.categories.find(c => c.id === entry.category)?.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EntityDisplay = ({ entity, onNavigate, maxRead }) => {
  if (!entity) return null;

  const isVisible = (field) => {
    if (maxRead === undefined) return true; // Admin panel doesn't pass maxRead, so it sees everything
    if (!entity.visibility || entity.visibility[field] === undefined) return true;
    return maxRead >= entity.visibility[field];
  };

  const censor = (field, val) => isVisible(field) ? val : '???';

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

  const renderBlocks = (sec, isRight = false) => {
    const blocks = normalizeBlocks(sec, isRight);
    return (
      <div className="prose">
        {blocks.map((block, bi) => {
          const isHidden = block.visibility && maxRead < block.visibility;
          
          if (isHidden) {
            if (block.type === 'image') {
              return (
                <div key={bi} style={{
                  border: '2px dashed var(--border3)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                  marginBottom: '1rem',
                  color: 'var(--text3)',
                  fontSize: '3rem',
                  background: 'rgba(0,0,0,0.2)'
                }}>
                  ?
                </div>
              );
            }
            return null;
          }

          if (!block.content) return null;
          
          if (block.type === 'image') {
            return <img key={bi} src={block.content} alt="Content block" style={{maxWidth:'100%', borderRadius:'4px', marginBottom:'1rem'}} />;
          } else if (block.type === 'bullet') {
            return <ul key={bi} style={{marginTop:0, marginBottom:'0.5rem'}}><li>{processLinks(block.content)}</li></ul>;
          } else {
            return <p key={bi}>{processLinks(block.content)}</p>;
          }
        })}
      </div>
    );
  };

  return (
    <div className="page active">
      {entity.category === 'characters' && (
        <div className="char-header">
          <div className="char-portrait">
            {entity.img ? <img src={entity.img} alt={entity.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/> : '👤'}
          </div>
          <div className="char-info-block">
            <h2 className="char-name">{censor('name', entity.name)}</h2>
            {entity.epithet && isVisible('epithet') && <div className="char-epithet">{entity.epithet}</div>}
            <div className="stat-pills">
              {entity.race && <div className="stat-pill">Race: <span>{censor('race', entity.race)}</span></div>}
              {entity.status && <div className="stat-pill">Status: <span>{censor('status', entity.status)}</span></div>}
              {entity.era && <div className="stat-pill">Era: <span>{censor('era', entity.era)}</span></div>}
            </div>
            {entity.tags && isVisible('tags') && (
              <div className="tags-wrap" style={{marginTop: '0.75rem'}}>
                {entity.tags.map(t => <span key={t} className="tag">#{t}</span>)}
              </div>
            )}
          </div>
        </div>
      )}

      {entity.category !== 'characters' && (
        <h2 className="page-title">{censor('name', entity.name)}</h2>
      )}

      {entity.description && isVisible('description') && (
        <div className="prose" style={{marginBottom: '2rem'}}>
          <p><em>{entity.description}</em></p>
        </div>
      )}

      {entity.sections?.map((sec, i) => {
        if (!isVisible(`sections_${i}`)) return null;
        return (
          <div key={i} style={{marginTop: '2rem'}}>
            <h3 className="section-heading">{sec.heading}</h3>
            
            {sec.layout === '2-col' ? (
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                {renderBlocks(sec, false)}
                {renderBlocks(sec, true)}
              </div>
            ) : (
              renderBlocks(sec, false)
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TemplatesPage = ({ onUseTemplate }) => {
  const templates = [
    { type: 'location', name: 'Location', icon: '🗺️', desc: 'Cities, ruins, and regions.' },
    { type: 'character', name: 'Character', icon: '👤', desc: 'People and NPCs.' },
    { type: 'faction', name: 'Faction', icon: '⚑', desc: 'Groups and organizations.' },
    { type: 'history', name: 'Historical Event', icon: '📜', desc: 'Wars and key events.' },
    { type: 'monster', name: 'Creature / Monster', icon: '🐙', desc: 'Beasts and foes.' }
  ];

  return (
    <div className="page active">
      <h2 className="page-title">Templates</h2>
      <p className="page-description">Select a template to create a new page.</p>
      
      <div className="template-grid">
        {templates.map(t => (
          <div className="template-card" key={t.type} onClick={() => onUseTemplate(t.type)}>
            <div className="tc-icon">{t.icon}</div>
            <div className="tc-name">{t.name}</div>
            <div className="tc-desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NewPageForm = ({ templateType, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: templateType ? `${templateType}s` : 'characters',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    
    // In a real app we'd construct the full object and save to backend
    const newEntity = {
      id: `${formData.category.slice(0,-1)}-${formData.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: formData.name,
      category: formData.category,
      description: formData.description,
      type: 'New Entry'
    };
    
    onSave(newEntity);
  };

  return (
    <div className="page active">
      <h2 className="page-title">Create New Page</h2>
      
      <form onSubmit={handleSubmit} style={{maxWidth: '500px', marginTop: '2rem'}}>
        <div className="form-group">
          <label>Page Title</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoFocus 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="locations">Locations</option>
            <option value="characters">Characters</option>
            <option value="factions">Factions</option>
            <option value="history">History</option>
            <option value="monsters">Monsters</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Short Description</label>
          <textarea 
            name="description" 
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="tb-btn primary">Create Page</button>
          <button type="button" className="tb-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
