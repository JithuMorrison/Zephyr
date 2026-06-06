import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import worldDataInit from '../data/world_data.json';
import Sidebar from '../components/world/Sidebar';
import { DashboardPage, TemplatesPage, NewPageForm } from '../components/world/EntityPages';
import AdminEntityDisplay from '../components/admin/AdminEntityDisplay';
import AdminRightPanel from '../components/admin/AdminRightPanel';
import '../styles/world.css';

const AdminPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialEntityId = searchParams.get('entity');
  
  // Use local state for worldData so it updates on save
  const [worldData, setWorldData] = useState(worldDataInit);
  const [currentEntityId, setCurrentEntityId] = useState(initialEntityId || null);
  const [viewState, setViewState] = useState('display'); // display, templates, new
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [draftEntity, setDraftEntity] = useState(null);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('zephyr_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const envUser = import.meta.env.VITE_ADMIN_USER || 'admin';
    const envPass = import.meta.env.VITE_ADMIN_PASS || 'password';
    
    if (username === envUser && password === envPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('zephyr_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };


  // Sync state when URL search param changes
  useEffect(() => {
    const eid = searchParams.get('entity');
    if (eid) {
      setCurrentEntityId(eid);
      setViewState('display');
      setEditMode(false);
    }
  }, [searchParams]);

  // Load draft when entity changes or editMode is toggled
  useEffect(() => {
    if (currentEntityId && editMode) {
      const entity = worldData.entries.find(e => e.id === currentEntityId);
      if (entity) {
        // deep clone to avoid mutating state directly
        setDraftEntity(JSON.parse(JSON.stringify(entity)));
      }
    } else {
      setDraftEntity(null);
    }
  }, [currentEntityId, editMode, worldData]);

  const handleSelectEntity = (id) => {
    if (id) {
      setSearchParams({ entity: id });
    } else {
      setSearchParams({});
      setCurrentEntityId(null);
      setViewState('display');
      setEditMode(false);
    }
  };

  const currentEntity = currentEntityId 
    ? worldData.entries.find(e => e.id === currentEntityId) 
    : null;

  const handleSaveData = async (updatedData) => {
    try {
      const response = await fetch('/api/world-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      if (response.ok) {
        setWorldData(updatedData);
        return true;
      } else {
        console.error('Failed to save data');
        return false;
      }
    } catch (error) {
      console.error('Error saving data:', error);
      return false;
    }
  };

  const handleSaveNewPage = async (newEntity) => {
    const updatedData = { ...worldData };
    updatedData.entries.push(newEntity);
    const success = await handleSaveData(updatedData);
    if (success) {
      handleSelectEntity(newEntity.id);
      setEditMode(true); // Jump straight to edit mode for new pages
    }
  };

  const handleInlineSave = async () => {
    if (!draftEntity) return;
    const updatedData = { ...worldData };
    const idx = updatedData.entries.findIndex(e => e.id === draftEntity.id);
    if (idx !== -1) {
      updatedData.entries[idx] = draftEntity;
      const success = await handleSaveData(updatedData);
      if (success) {
        setEditMode(false);
      }
    }
  };

  const handleUpdateSubfolders = async (newSubfolders) => {
    const updatedData = { ...worldData, subfolders: newSubfolders };
    await handleSaveData(updatedData);
  };

  if (!isAuthenticated) {
    return (
      <div className="world-page">
        <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center', background:'var(--bg)'}}>
          <form onSubmit={handleLogin} style={{background:'var(--surface)', padding:'2rem', borderRadius:'4px', border:'1px solid var(--border)', width:'300px'}}>
            <h2 style={{fontFamily:'"Cinzel Decorative", serif', color:'var(--gold)', textAlign:'center', marginBottom:'1.5rem'}}>Admin Access</h2>
            {loginError && <div style={{color:'var(--red)', fontSize:'0.85rem', marginBottom:'1rem', textAlign:'center'}}>{loginError}</div>}
            <div style={{marginBottom:'1rem'}}>
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{width:'100%', padding:'0.5rem', background:'var(--bg)', border:'1px solid var(--border3)', color:'var(--text)'}} />
            </div>
            <div style={{marginBottom:'1.5rem'}}>
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{width:'100%', padding:'0.5rem', background:'var(--bg)', border:'1px solid var(--border3)', color:'var(--text)'}} />
            </div>
            <button type="submit" className="tb-btn primary" style={{width:'100%', padding:'0.5rem'}}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="world-page">
      <div className="app">
        <header className="topbar" style={{borderBottom: '1px solid var(--gold-dim)'}}>
          <div className="topbar-brand" style={{color: 'var(--red)'}}>Admin Panel</div>
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
            {viewState === 'display' && currentEntityId && (
              <>
                {editMode ? (
                  <>
                    <button className="tb-btn" style={{background: 'var(--gold-dim)', color: 'var(--bg)'}} onClick={handleInlineSave}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                      Save Page
                    </button>
                    <button className="tb-btn" onClick={() => setEditMode(false)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="tb-btn" onClick={() => setEditMode(true)}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    Edit Page
                  </button>
                )}
              </>
            )}
            
            <Link to="/world" className="tb-btn" style={{textDecoration:'none'}}>
              View Public Wiki
            </Link>
            <Link to="/map" className="tb-btn" style={{textDecoration:'none'}}>
              🗺 World Map
            </Link>
          </div>
        </header>

        <Sidebar 
          currentEntityId={currentEntityId} 
          onSelect={handleSelectEntity}
          onNewPage={() => setViewState('templates')}
          worldData={worldData}
          isAdmin={true}
          onUpdateSubfolders={handleUpdateSubfolders}
        />

        <main className="main" id="main-content">
          {viewState === 'display' && !currentEntityId && (
            <DashboardPage onSelect={handleSelectEntity} worldData={worldData} />
          )}
          
          {viewState === 'display' && currentEntityId && (
            <AdminEntityDisplay 
              entity={editMode ? draftEntity : currentEntity} 
              editMode={editMode}
              setDraftEntity={setDraftEntity}
              onNavigate={handleSelectEntity} 
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
              worldData={worldData}
            />
          )}
        </main>

        <AdminRightPanel 
          entity={editMode ? draftEntity : currentEntity} 
          editMode={editMode}
          setDraftEntity={setDraftEntity}
          onNavigate={handleSelectEntity}
          worldData={worldData}
        />
      </div>
    </div>
  );
};

export default AdminPage;
