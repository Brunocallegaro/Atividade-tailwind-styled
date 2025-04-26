import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GitHubProfileStyled from './components/GitHubProfileStyled';
import GitHubProfileTailwind from './components/GitHubProfileTailwind';

export default function App() {
  return (
    <Router>
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">GitHub Profile Search</h1>
        <nav className="flex gap-4">
          <Link to="/styled">Styled-Components</Link>
          <Link to="/tailwind">Tailwind CSS</Link>
        </nav>
        <Routes>
          <Route path="/styled" element={<GitHubProfileStyled />} />
          <Route path="/tailwind" element={<GitHubProfileTailwind />} />
        </Routes>
      </div>
    </Router>
  );
}

