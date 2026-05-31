import React, { useState, useMemo } from 'react';

const colors = {
  bgDark: '#1e1e1e',
  bgSidebar: '#252526',
  bgCard: '#2d2d30',
  textMain: '#cccccc',
  textTitle: '#e0e0e0',
  accent: '#7dd3fc',
  accentHover: '#38bdf8',
  border: '#3e3e42'
};

const btnStyle = {
  padding: '6px 12px',
  background: 'transparent',
  color: colors.textMain,
  border: `1px solid ${colors.border}`,
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '13px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px'
};

const btnPrimaryStyle = {
  ...btnStyle,
  background: colors.accent,
  color: '#0f172a',
  border: 'none',
  fontWeight: 600
};

const categories = {
  'Characters (Main)': { path: ['characters', 'main'], type: 'character' },
  'Characters (NPCs)': { path: ['characters', 'story_npcs'], type: 'character' },
  'Characters (Legends)': { path: ['characters', 'legends'], type: 'character' },
  'Characters (Deities)': { path: ['characters', 'deities'], type: 'character' },
  'Story Locations': { path: ['story_locations'], type: 'location' },
  'Continents (Main)': { path: ['continents', 'main'], type: 'continent' },
  'Special Regions': { path: ['continents', 'special_regions'], type: 'region' },
  'World Secrets': { path: ['world_secrets'], type: 'secret' }
};

export default function Dashboard({ worldData, onSave }) {
  const [activeCategory, setActiveCategory] = useState('Characters (Main)');
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [localData, setLocalData] = useState(() => JSON.parse(JSON.stringify(worldData)));

  const currentCategoryDef = categories[activeCategory];
  
  const getItemsList = () => {
    let curr = localData;
    for (const key of currentCategoryDef.path) {
      curr = curr[key] || [];
    }
    return curr;
  };

  const items = getItemsList();
  const activeItem = activeItemIndex >= 0 ? items[activeItemIndex] : null;

  // Build a global map of all items to allow cross-linking
  const entityMap = useMemo(() => {
    const map = {};
    Object.entries(categories).forEach(([catName, def]) => {
      let curr = localData;
      for (const key of def.path) curr = curr[key] || [];
      curr.forEach((item, idx) => {
        if (item.name) {
          map[item.name.toLowerCase()] = { catName, idx };
        }
      });
    });
    return map;
  }, [localData]);

  const handleLinkClick = (entityName) => {
    const target = entityMap[entityName.toLowerCase()];
    if (target) {
      setActiveCategory(target.catName);
      setActiveItemIndex(target.idx);
      setIsEditing(false);
    } else {
      alert(`Entity "${entityName}" not found.`);
    }
  };

  const parseRichText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const entityName = part.slice(1, -1);
        const exists = entityMap[entityName.toLowerCase()];
        return (
          <span
            key={i}
            onClick={() => exists ? handleLinkClick(entityName) : null}
            style={{
              color: exists ? colors.accent : '#ef4444',
              cursor: exists ? 'pointer' : 'default',
              textDecoration: exists ? 'underline' : 'none',
              textDecorationStyle: 'dashed',
              fontWeight: 600
            }}
            title={exists ? `Go to ${entityName}` : `Unknown entity: ${entityName}`}
          >
            {entityName}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const handleSaveItem = (updatedItem) => {
    const newData = JSON.parse(JSON.stringify(localData));
    let target = newData;
    for (let i = 0; i < currentCategoryDef.path.length - 1; i++) {
      target = target[currentCategoryDef.path[i]];
    }
    const lastKey = currentCategoryDef.path[currentCategoryDef.path.length - 1];
    if (!target[lastKey]) target[lastKey] = [];

    if (activeItemIndex >= 0) {
      target[lastKey][activeItemIndex] = updatedItem;
    } else {
      target[lastKey].push(updatedItem);
      setActiveItemIndex(target[lastKey].length - 1);
    }

    setLocalData(newData);
    setIsEditing(false);
    onSave(newData);
  };

  const handleDeleteItem = () => {
    if (!window.confirm("Delete this entry?")) return;
    const newData = JSON.parse(JSON.stringify(localData));
    let target = newData;
    for (let i = 0; i < currentCategoryDef.path.length - 1; i++) {
      target = target[currentCategoryDef.path[i]];
    }
    const lastKey = currentCategoryDef.path[currentCategoryDef.path.length - 1];
    target[lastKey].splice(activeItemIndex, 1);

    setLocalData(newData);
    setActiveItemIndex(-1);
    setIsEditing(false);
    onSave(newData);
  };

  const startNewItem = () => {
    setActiveItemIndex(-1);
    setIsEditing(true);
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 70px)', background: colors.bgDark, color: colors.textMain, fontFamily: 'Inter, sans-serif' }}>
      
      {/* LEFT PANE: Sidebar Navigation */}
      <div style={{ width: '260px', background: colors.bgSidebar, borderRight: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px', borderBottom: `1px solid ${colors.border}` }}>
          <h2 style={{ fontSize: '14px', color: '#888', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Files</h2>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
          {Object.keys(categories).map(cat => (
            <div key={cat}>
              <div 
                onClick={() => { setActiveCategory(cat); setActiveItemIndex(-1); setIsEditing(false); }}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  color: activeCategory === cat ? colors.textTitle : colors.textMain,
                  background: activeCategory === cat ? 'rgba(255,255,255,0.05)' : 'transparent',
                  fontWeight: activeCategory === cat ? 600 : 400,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span style={{ marginRight: '8px', fontSize: '10px' }}>{activeCategory === cat ? '▼' : '▶'}</span>
                {cat}
              </div>
              {activeCategory === cat && (
                <div style={{ paddingBottom: '8px' }}>
                  {getItemsList().map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => { setActiveItemIndex(idx); setIsEditing(false); }}
                      style={{
                        padding: '6px 16px 6px 40px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: activeItemIndex === idx ? colors.accent : colors.textMain,
                        background: activeItemIndex === idx ? 'rgba(125,211,252,0.1)' : 'transparent',
                        borderLeft: activeItemIndex === idx ? `3px solid ${colors.accent}` : '3px solid transparent'
                      }}
                    >
                      📄 {item.name || item.id || 'Untitled'}
                    </div>
                  ))}
                  <div 
                    onClick={startNewItem}
                    style={{ padding: '6px 16px 6px 40px', cursor: 'pointer', fontSize: '13px', color: '#888', fontStyle: 'italic' }}
                  >
                    + New Page
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CENTER PANE: Main Content or Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: colors.bgDark }}>
        {(!activeItem && !isEditing) ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666' }}>
            Select an item from the sidebar or create a new page.
          </div>
        ) : isEditing ? (
          <Editor 
            item={activeItem || {}} 
            category={activeCategory} 
            onSave={handleSaveItem} 
            onCancel={() => setIsEditing(false)} 
            colors={colors}
            btnStyle={btnStyle}
            btnPrimaryStyle={btnPrimaryStyle}
          />
        ) : (
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Main Reading Area */}
            <div style={{ flex: 1, padding: '32px 48px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: `1px solid ${colors.border}`, paddingBottom: '16px' }}>
                <div style={{ fontSize: '14px', color: '#888', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ← → <span style={{ textTransform: 'uppercase', letterSpacing: '1px', color: colors.textTitle }}>{activeItem.name}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={btnStyle} onClick={() => setIsEditing(true)}>📝 Edit</button>
                  <button style={{...btnStyle, color: '#ef4444'}} onClick={handleDeleteItem}>🗑️ Delete</button>
                </div>
              </div>

              {/* Title and main text */}
              <h1 style={{ fontSize: '32px', color: colors.textTitle, margin: '0 0 16px 0', fontFamily: 'serif' }}>
                {activeItem.name}
              </h1>
              
              {/* Render specific fields based on category type */}
              {activeItem.role && (
                <div style={{ fontSize: '16px', color: colors.textTitle, marginBottom: '24px', fontStyle: 'italic' }}>
                  {activeItem.role}
                </div>
              )}

              {/* Descriptions */}
              {activeItem.description && (
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '16px', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Overview</h3>
                  {Array.isArray(activeItem.description) ? activeItem.description.map((desc, i) => (
                    <p key={i} style={{ lineHeight: '1.8', marginBottom: '16px', color: colors.textTitle }}>
                      {parseRichText(typeof desc === 'string' ? desc : desc.text)}
                    </p>
                  )) : (
                    <p style={{ lineHeight: '1.8', color: colors.textTitle }}>{parseRichText(activeItem.description)}</p>
                  )}
                </div>
              )}

              {/* Traits / Details */}
              {activeItem.traits && (
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '16px', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Traits & Details</h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    {activeItem.traits.map((t, i) => (
                      <li key={i} style={{ color: colors.textTitle }}>{parseRichText(typeof t === 'string' ? t : t.text)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* History */}
              {activeItem.history && (
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '16px', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>History</h3>
                  {Array.isArray(activeItem.history) ? activeItem.history.map((h, i) => (
                    <div key={i} style={{ marginBottom: '16px' }}>
                      <strong style={{ color: colors.textTitle }}>{h.era}: </strong>
                      <span style={{ color: colors.textTitle }}>{parseRichText(h.description)}</span>
                    </div>
                  )) : (
                    <p style={{ lineHeight: '1.8', color: colors.textTitle }}>{parseRichText(activeItem.history)}</p>
                  )}
                </div>
              )}
              
            </div>

            {/* RIGHT PANE: Infobox */}
            <div style={{ width: '320px', background: colors.bgCard, borderLeft: `1px solid ${colors.border}`, padding: '24px', overflowY: 'auto' }}>
              <h3 style={{ fontSize: '18px', color: colors.textTitle, margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {activeItem.name}
              </h3>
              <div style={{ fontSize: '12px', color: '#888', fontStyle: 'italic', marginBottom: '16px' }}>
                {currentCategoryDef.type.toUpperCase()}
              </div>

              {activeItem.image_url && (
                <div style={{ marginBottom: '24px', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${colors.border}` }}>
                  <img src={activeItem.image_url} alt={activeItem.name} style={{ width: '100%', display: 'block' }} />
                </div>
              )}

              <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '16px' }}>
                <h4 style={{ fontSize: '12px', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>Properties</h4>
                
                <table style={{ width: '100%', fontSize: '13px', borderSpacing: '0 8px' }}>
                  <tbody>
                    {activeItem.type && (
                      <tr>
                        <td style={{ color: '#888', width: '40%', verticalAlign: 'top' }}>Type</td>
                        <td style={{ color: colors.textTitle }}>{activeItem.type}</td>
                      </tr>
                    )}
                    {activeItem.location && (
                      <tr>
                        <td style={{ color: '#888', verticalAlign: 'top' }}>Location</td>
                        <td style={{ color: colors.accent }}>{parseRichText(activeItem.location)}</td>
                      </tr>
                    )}
                    {activeItem.inhabitants && (
                      <tr>
                        <td style={{ color: '#888', verticalAlign: 'top' }}>Inhabitants</td>
                        <td style={{ color: colors.accent }}>
                          {Array.isArray(activeItem.inhabitants) ? activeItem.inhabitants.map((inh, i) => <div key={i}>{parseRichText(inh)}</div>) : parseRichText(activeItem.inhabitants)}
                        </td>
                      </tr>
                    )}
                    {activeItem.reveal_after_chapter !== undefined && (
                      <tr>
                        <td style={{ color: '#888', verticalAlign: 'top' }}>Revealed Ch.</td>
                        <td style={{ color: colors.textTitle }}>{activeItem.reveal_after_chapter || '0 (Start)'}</td>
                      </tr>
                    )}
                    {activeItem.tags && activeItem.tags.length > 0 && (
                      <tr>
                        <td style={{ color: '#888', verticalAlign: 'top' }}>Tags</td>
                        <td>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {activeItem.tags.map((tag, i) => (
                              <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', color: '#ccc' }}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Editor({ item, category, onSave, onCancel, colors, btnStyle, btnPrimaryStyle }) {
  const [formData, setFormData] = useState(item);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, idx, value, isObjectText = false) => {
    const arr = [...(formData[field] || [])];
    if (isObjectText) {
      arr[idx] = { ...arr[idx], text: value };
    } else {
      arr[idx] = value;
    }
    setFormData(prev => ({ ...prev, [field]: arr }));
  };

  const addArrayItem = (field, isObjectText = false) => {
    const arr = [...(formData[field] || [])];
    if (isObjectText) {
      arr.push({ text: '', reveal_after_chapter: 0 });
    } else {
      arr.push('');
    }
    setFormData(prev => ({ ...prev, [field]: arr }));
  };

  const removeArrayItem = (field, idx) => {
    const arr = [...(formData[field] || [])];
    arr.splice(idx, 1);
    setFormData(prev => ({ ...prev, [field]: arr }));
  };

  const handleTagsChange = (e) => {
    const val = e.target.value;
    const tags = val.split(',').map(t => t.trim().replace(/^#/, '')).filter(t => t);
    handleChange('tags', tags);
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    background: colors.bgSidebar,
    border: `1px solid ${colors.border}`,
    borderRadius: '4px',
    color: colors.textTitle,
    fontSize: '14px',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif'
  };

  const labelStyle = { display: 'block', marginBottom: '6px', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' };

  return (
    <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', margin: 0, color: colors.textTitle }}>
            {item.name ? `Editing: ${item.name}` : `New in ${category}`}
          </h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={onCancel} style={btnStyle}>Cancel</button>
            <button onClick={() => onSave(formData)} style={btnPrimaryStyle}>Save Page</button>
          </div>
        </div>

        <div style={{ background: colors.bgCard, padding: '24px', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>ID (unique identifier)</label>
              <input style={inputStyle} value={formData.id || ''} onChange={e => handleChange('id', e.target.value)} placeholder="e.g. garret" />
            </div>
            <div>
              <label style={labelStyle}>Name</label>
              <input style={inputStyle} value={formData.name || ''} onChange={e => handleChange('name', e.target.value)} placeholder="e.g. Garret" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Type / Role</label>
              <input style={inputStyle} value={formData.type || formData.role || ''} onChange={e => {
                if(category.includes('Characters')) handleChange('role', e.target.value);
                else handleChange('type', e.target.value);
              }} />
            </div>
            <div>
              <label style={labelStyle}>Reveal Chapter</label>
              <input type="number" style={inputStyle} value={formData.reveal_after_chapter || 0} onChange={e => handleChange('reveal_after_chapter', parseInt(e.target.value))} />
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${colors.border}`, margin: '24px 0' }} />

          <h3 style={{ fontSize: '14px', color: colors.textTitle, marginBottom: '16px', textTransform: 'uppercase' }}>Infobox Properties</h3>
          
          <label style={labelStyle}>Image URL</label>
          <input style={inputStyle} value={formData.image_url || ''} onChange={e => handleChange('image_url', e.target.value)} placeholder="https://..." />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Location (Use [Entity] for links)</label>
              <input style={inputStyle} value={formData.location || ''} onChange={e => handleChange('location', e.target.value)} placeholder="e.g. [Halwen Village]" />
            </div>
            <div>
              <label style={labelStyle}>Tags (comma separated)</label>
              <input style={inputStyle} value={(formData.tags || []).join(', ')} onChange={handleTagsChange} placeholder="e.g. ports, islands, tabaxi" />
            </div>
          </div>

          <label style={labelStyle}>Inhabitants (Use [Entity] for links)</label>
          {Array.isArray(formData.inhabitants) ? (
            <textarea style={{...inputStyle, minHeight: '60px'}} value={(formData.inhabitants || []).join('\n')} onChange={e => handleChange('inhabitants', e.target.value.split('\n'))} placeholder="Enter one per line..." />
          ) : (
            <input style={inputStyle} value={formData.inhabitants || ''} onChange={e => handleChange('inhabitants', e.target.value)} />
          )}

          <div style={{ borderTop: `1px solid ${colors.border}`, margin: '24px 0' }} />

          <h3 style={{ fontSize: '14px', color: colors.textTitle, marginBottom: '16px', textTransform: 'uppercase' }}>Content (Use [Entity] for links)</h3>

          <label style={labelStyle}>Description Overview</label>
          {typeof formData.description === 'string' ? (
            <textarea style={{...inputStyle, minHeight: '120px'}} value={formData.description || ''} onChange={e => handleChange('description', e.target.value)} />
          ) : (
            <>
              {(formData.description || []).map((desc, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <textarea style={{...inputStyle, marginBottom: 0, minHeight: '60px'}} value={desc.text || desc || ''} onChange={e => handleArrayChange('description', idx, e.target.value, typeof desc === 'object')} />
                  <button onClick={() => removeArrayItem('description', idx)} style={{...btnStyle, color: '#ef4444'}}>X</button>
                </div>
              ))}
              <button onClick={() => addArrayItem('description', category.includes('Characters'))} style={{ ...btnStyle, marginBottom: '16px' }}>+ Add Paragraph</button>
            </>
          )}

          <label style={labelStyle}>Traits / History</label>
          {(formData.traits || []).map((trait, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input style={{...inputStyle, marginBottom: 0}} value={trait.text || trait || ''} onChange={e => handleArrayChange('traits', idx, e.target.value, typeof trait === 'object')} />
              <button onClick={() => removeArrayItem('traits', idx)} style={{...btnStyle, color: '#ef4444'}}>X</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('traits', category.includes('Characters'))} style={{ ...btnStyle, marginBottom: '16px' }}>+ Add Item</button>

        </div>
      </div>
    </div>
  );
}
