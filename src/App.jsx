import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import WorldPage from './pages/WorldPage';

import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoryPage />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;