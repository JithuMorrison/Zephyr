import React, { useState } from 'react';
import defaultWorldData from '../../data/world_data.json';

const Sidebar = ({ currentEntityId, onSelect, onNewPage, maxRead, worldData: propWorldData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const worldData = propWorldData || defaultWorldData;

  const toggleCategory = (catId) => {
    setCollapsedCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter entries based on search AND maxRead spoiler protection
  const filteredEntries = worldData.entries.filter(entry => {
    if (maxRead !== undefined && entry.visibility?.name !== undefined && maxRead < entry.visibility.name) {
      return false; // Hide this page entirely if the name is censored
    }
    return entry.name.toLowerCase().includes(searchTerm);
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <input 
          type="text" 
          placeholder="Search world..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="sidebar-tabs">
        <div className="sidebar-tab active">Files</div>
      </div>
      
      <div className="tree">
        <div className="tree-item" onClick={() => onSelect(null)}>
          <span className="item-icon">🏠</span>
          Dashboard
        </div>
        
        {worldData.categories.map(cat => {
          const catEntries = filteredEntries.filter(e => e.category === cat.id);
          if (catEntries.length === 0) return null;
          
          const isCollapsed = collapsedCategories[cat.id];
          
          return (
            <div className="tree-section" key={cat.id}>
              <div 
                className={`tree-section-header ${isCollapsed ? 'collapsed' : ''}`}
                onClick={() => toggleCategory(cat.id)}
              >
                <svg viewBox="0 0 10 10" fill="currentColor">
                  <path d="M2,1 L8,5 L2,9 Z" />
                </svg>
                {cat.label}
              </div>
              
              {!isCollapsed && catEntries.map(entry => (
                <div 
                  key={entry.id}
                  className={`tree-item sub ${currentEntityId === entry.id ? 'active' : ''}`}
                  onClick={() => onSelect(entry.id)}
                >
                  <span className="item-icon">{cat.icon}</span>
                  {entry.name}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      
      {onNewPage && (
        <div className="sidebar-bottom">
          <div className="sidebar-btn" onClick={onNewPage}>+ Page</div>
          <div className="sidebar-btn">+ Folder</div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
