import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import worldData from '../data/world_data.json';
import Sidebar from '../components/world/Sidebar';
import RightPanel from '../components/world/RightPanel';
import { DashboardPage, EntityDisplay, TemplatesPage, NewPageForm } from '../components/world/EntityPages';
import '../styles/world.css';

const WorldPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialEntityId = searchParams.get('entity');
  
  const [currentEntityId, setCurrentEntityId] = useState(initialEntityId || null);
  const [viewState, setViewState] = useState('display'); // display, templates, new
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Read maxRead from localStorage
  const maxRead = parseInt(localStorage.getItem('zephyr_max_chapter') || '0', 10);

  // Sync state when URL search param changes
  useEffect(() => {
    const eid = searchParams.get('entity');
    if (eid) {
      setCurrentEntityId(eid);
      setViewState('display');
    }
  }, [searchParams]);

  const handleSelectEntity = (id) => {
    if (id) {
      setSearchParams({ entity: id });
    } else {
      setSearchParams({});
      setCurrentEntityId(null);
      setViewState('display');
    }
  };

  const currentEntity = currentEntityId 
    ? worldData.entries.find(e => e.id === currentEntityId) 
    : null;

  const handleSaveNewPage = async (newEntity) => {
    try {
      // Create a copy of the current data and push new entry
      const updatedData = { ...worldData };
      updatedData.entries.push(newEntity);

      const response = await fetch('/api/world-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        // Optimistically update the UI by mutating the imported object 
        // (In a real app with proper state management, you'd use a context/store)
        worldData.entries.push(newEntity);
        handleSelectEntity(newEntity.id);
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="world-page">
      <div className="app">
        <header className="topbar">
          <div className="topbar-brand">Chronicler</div>
          <div className="topbar-breadcrumb">
            <span className="bc-link" onClick={() => handleSelectEntity(null)}>World</span>
            {currentEntity && (
              <>
                <span className="bc-sep">/</span>
                <span className="bc-current">{currentEntity.name}</span>
              </>
            )}
          </div>
          
          <div className="topbar-actions">
            <button className="tb-btn" onClick={() => navigate('/map')}>
              🗺 World Map
            </button>
            <button className="tb-btn" onClick={() => navigate('/')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              Story Reader
            </button>
          </div>
        </header>

        <Sidebar 
          currentEntityId={currentEntityId} 
          onSelect={handleSelectEntity}
          maxRead={maxRead}
        />

        <main className="main" id="main-content">
          {viewState === 'display' && !currentEntityId && (
            <DashboardPage onSelect={handleSelectEntity} maxRead={maxRead} />
          )}
          
          {viewState === 'display' && currentEntityId && (
            <EntityDisplay 
              entity={currentEntity} 
              onNavigate={handleSelectEntity} 
              maxRead={maxRead}
            />
          )}

          {viewState === 'templates' && (
            <TemplatesPage 
              onUseTemplate={(t) => {
                setSelectedTemplate(t);
                setViewState('new');
              }} 
            />
          )}

          {viewState === 'new' && (
            <NewPageForm 
              templateType={selectedTemplate}
              onCancel={() => setViewState('display')}
              onSave={handleSaveNewPage}
            />
          )}
        </main>

        <RightPanel 
          entity={currentEntity} 
          onNavigate={handleSelectEntity} 
          maxRead={maxRead}
          worldData={worldData}
        />
      </div>
    </div>
  );
};

export default WorldPage;
