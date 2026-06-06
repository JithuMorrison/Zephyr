import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import WorldPage from './pages/WorldPage';

import AdminPage from './pages/AdminPage';

import MapPage from './pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoryPage />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;