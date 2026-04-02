import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import Queries from './pages/queries';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true'
  );

  useEffect(() => {
    // Listen for storage changes (e.g. login/logout)
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAdminAuthenticated') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="queries" element={<Queries />} />
          <Route path="users" element={<div>User Management (Coming Soon)</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
