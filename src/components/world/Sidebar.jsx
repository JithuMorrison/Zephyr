import React, { useState, useMemo } from 'react';
import defaultWorldData from '../../data/world_data.json';

const Sidebar = ({ currentEntityId, onSelect, onNewPage, maxRead, worldData: propWorldData, isAdmin, onUpdateSubfolders }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const [editingFolder, setEditingFolder] = useState(null);
  const [editingName, setEditingName] = useState('');
  const worldData = propWorldData || defaultWorldData;

  const toggle = (key) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredEntries = useMemo(() => {
    return worldData.entries.filter(entry => {
      if (maxRead !== undefined && entry.visibility?.name !== undefined && maxRead < entry.visibility.name) {
        return false;
      }
      if (searchTerm) {
        return entry.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
  }, [worldData.entries, searchTerm, maxRead]);

  // ── Location icon by type ──
  const getLocationIcon = (locationType) => {
    const icons = {
      world: '🌍', continent: '🏔', region: '🏘', city: '🏛',
      town: '🏠', village: '🏚', forest: '🌲', mountain: '⛰',
      ocean: '🌊', plains: '🌾', desert: '🏜', island: '🏝'
    };
    return icons[locationType] || '📍';
  };

  // ── Build location tree from parentId ──
  const locationTree = useMemo(() => {
    const locations = filteredEntries.filter(e => e.category === 'locations');
    const byId = {};
    locations.forEach(loc => { byId[loc.id] = { ...loc, children: [] }; });

    const roots = [];
    locations.forEach(loc => {
      if (loc.parentId && byId[loc.parentId]) {
        byId[loc.parentId].children.push(byId[loc.id]);
      } else {
        roots.push(byId[loc.id]);
      }
    });
    return roots;
  }, [filteredEntries]);

  // ── Render a location node recursively ──
  const renderLocationNode = (node, depth = 0) => {
    const colKey = `loc-${node.id}`;
    const isCol = collapsed[colKey];
    const hasKids = node.children && node.children.length > 0;
    const icon = getLocationIcon(node.locationType);

    return (
      <div key={node.id}>
        <div
          className={`tree-item ${currentEntityId === node.id ? 'active' : ''}`}
          style={{ paddingLeft: `${1.5 + depth * 1}rem` }}
          onClick={() => onSelect(node.id)}
        >
          {hasKids ? (
            <span
              className="item-icon"
              style={{ cursor: 'pointer', fontSize: '0.55rem', width: '12px', flexShrink: 0 }}
              onClick={(e) => { e.stopPropagation(); toggle(colKey); }}
            >
              {isCol ? '▶' : '▼'}
            </span>
          ) : (
            <span className="item-icon" style={{ width: '12px', flexShrink: 0 }}> </span>
          )}
          <span className="item-icon">{icon}</span>
          {node.name}
        </div>
        {hasKids && !isCol && node.children.map(child => renderLocationNode(child, depth + 1))}
      </div>
    );
  };

  // ── Subfolder management ──
  const handleAddFolder = (catId) => {
    const newFolder = { id: `folder-${Date.now()}`, name: 'New Folder', entries: [] };
    const updated = { ...(worldData.subfolders || {}) };
    updated[catId] = [...(updated[catId] || []), newFolder];
    onUpdateSubfolders?.(updated);
  };

  const handleRenameFolder = (catId, folderId, newName) => {
    if (!newName.trim()) return;
    const updated = { ...(worldData.subfolders || {}) };
    updated[catId] = (updated[catId] || []).map(f =>
      f.id === folderId ? { ...f, name: newName.trim() } : f
    );
    onUpdateSubfolders?.(updated);
  };

  const handleDeleteFolder = (catId, folderId) => {
    const updated = { ...(worldData.subfolders || {}) };
    updated[catId] = (updated[catId] || []).filter(f => f.id !== folderId);
    onUpdateSubfolders?.(updated);
  };

  // ── Render a category with subfolders ──
  const renderSubfolderCategory = (cat) => {
    const catEntries = filteredEntries.filter(e => e.category === cat.id);
    if (catEntries.length === 0 && searchTerm) return null;

    const subfolders = worldData.subfolders?.[cat.id] || [];
    const assignedIds = new Set(subfolders.flatMap(f => f.entries || []));
    const uncategorized = catEntries.filter(e => !assignedIds.has(e.id) && !e.subfolderId);

    const catKey = `cat-${cat.id}`;
    const isCatCol = collapsed[catKey];

    return (
      <div className="tree-section" key={cat.id}>
        <div
          className={`tree-section-header ${isCatCol ? 'collapsed' : ''}`}
          onClick={() => toggle(catKey)}
        >
          <svg viewBox="0 0 10 10" fill="currentColor"><path d="M2,1 L8,5 L2,9 Z" /></svg>
          {cat.label}
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text3)' }}>{catEntries.length}</span>
        </div>

        {!isCatCol && (
          <>
            {subfolders.map(folder => {
              const folderEntries = catEntries.filter(e => (folder.entries || []).includes(e.id) || e.subfolderId === folder.id);
              const fKey = `folder-${folder.id}`;
              const isFCol = collapsed[fKey];

              return (
                <div key={folder.id}>
                  <div
                    className="tree-item sub"
                    style={{ fontWeight: 600, fontSize: '0.78rem', color: 'var(--text2)' }}
                    onClick={() => toggle(fKey)}
                  >
                    <span className="item-icon" style={{ fontSize: '0.55rem', width: '12px', flexShrink: 0 }}>{isFCol ? '▶' : '▼'}</span>
                    <span className="item-icon">📁</span>
                    {editingFolder === folder.id ? (
                      <input
                        value={editingName}
                        onChange={e => setEditingName(e.target.value)}
                        onBlur={() => { handleRenameFolder(cat.id, folder.id, editingName); setEditingFolder(null); }}
                        onKeyDown={e => { if (e.key === 'Enter') { handleRenameFolder(cat.id, folder.id, editingName); setEditingFolder(null); } }}
                        onClick={e => e.stopPropagation()}
                        autoFocus
                        style={{ background: 'var(--surface2)', border: '1px solid var(--border3)', color: 'var(--text)', fontSize: '0.78rem', padding: '1px 4px', width: '100px' }}
                      />
                    ) : (
                      <span
                        onDoubleClick={isAdmin ? (e) => { e.stopPropagation(); setEditingFolder(folder.id); setEditingName(folder.name); } : undefined}
                        style={{ flex: 1 }}
                      >
                        {folder.name}
                      </span>
                    )}
                    <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>{folderEntries.length}</span>
                    {isAdmin && editingFolder !== folder.id && (
                      <span
                        style={{ color: 'var(--red)', fontSize: '0.65rem', cursor: 'pointer', marginLeft: '4px' }}
                        onClick={(e) => { e.stopPropagation(); handleDeleteFolder(cat.id, folder.id); }}
                        title="Delete folder"
                      >✕</span>
                    )}
                  </div>
                  {!isFCol && folderEntries.map(entry => (
                    <div
                      key={entry.id}
                      className={`tree-item sub ${currentEntityId === entry.id ? 'active' : ''}`}
                      style={{ paddingLeft: '3.5rem' }}
                      onClick={() => onSelect(entry.id)}
                    >
                      <span className="item-icon">{cat.icon}</span>
                      {entry.name}
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Uncategorized entries */}
            {uncategorized.length > 0 && (
              <>
                {subfolders.length > 0 && cat.id !== 'characters' && (
                  <div className="tree-item sub" style={{ fontWeight: 600, fontSize: '0.75rem', color: 'var(--text3)', cursor: 'default' }}>
                    <span className="item-icon" style={{ width: '12px' }}> </span>
                    <span className="item-icon">📄</span>
                    Uncategorized
                  </div>
                )}
                {uncategorized.map(entry => (
                  <div
                    key={entry.id}
                    className={`tree-item sub ${currentEntityId === entry.id ? 'active' : ''}`}
                    style={subfolders.length > 0 ? { paddingLeft: '3.5rem' } : undefined}
                    onClick={() => onSelect(entry.id)}
                  >
                    <span className="item-icon">{cat.icon}</span>
                    {entry.name}
                  </div>
                ))}
              </>
            )}

            {/* Admin: add folder button */}
            {isAdmin && (
              <div
                className="tree-item sub"
                style={{ color: 'var(--text3)', fontSize: '0.75rem', cursor: 'pointer' }}
                onClick={() => handleAddFolder(cat.id)}
              >
                <span className="item-icon" style={{ width: '12px' }}> </span>
                <span className="item-icon">+</span>
                New Folder
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  const locationCategory = worldData.categories.find(c => c.id === 'locations');
  const hasLocations = filteredEntries.some(e => e.category === 'locations');

  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <input type="text" placeholder="Search world..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>

      <div className="sidebar-tabs">
        <div className="sidebar-tab active">Files</div>
      </div>

      <div className="tree">
        <div className="tree-item" onClick={() => onSelect(null)}>
          <span className="item-icon">🏠</span>
          Dashboard
        </div>

        {/* Non-location categories with subfolders */}
        {worldData.categories.filter(c => c.id !== 'locations').map(cat => renderSubfolderCategory(cat))}

        {/* Location category with hierarchical tree */}
        {locationCategory && hasLocations && (
          <div className="tree-section">
            <div
              className={`tree-section-header ${collapsed['cat-locations'] ? 'collapsed' : ''}`}
              onClick={() => toggle('cat-locations')}
            >
              <svg viewBox="0 0 10 10" fill="currentColor"><path d="M2,1 L8,5 L2,9 Z" /></svg>
              Locations
              <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text3)' }}>
                {filteredEntries.filter(e => e.category === 'locations').length}
              </span>
            </div>
            {!collapsed['cat-locations'] && locationTree.map(root => renderLocationNode(root, 0))}
          </div>
        )}
      </div>

      {onNewPage && (
        <div className="sidebar-bottom">
          <div className="sidebar-btn" onClick={onNewPage}>+ Page</div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
