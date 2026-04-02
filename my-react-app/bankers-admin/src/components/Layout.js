import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  Banknote,
  MessageSquare
} from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/applications': return 'Applications';
      case '/queries': return 'Queries';
      case '/settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Banknote size={32} color="#2563eb" />
          <span>Bankers Admin</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/applications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FileText size={20} />
            <span>Applications</span>
          </NavLink>

          <NavLink to="/queries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <MessageSquare size={20} />
            <span>Queries</span>
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer" style={{ padding: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            className="nav-link"
            onClick={handleLogout}
            style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', color: '#ef4444' }}
          >
            <LogOut size={20} />
            <span style={{ fontWeight: '600' }}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="page-title" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>
            {getPageTitle()}
          </div>

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Bell size={20} color="#64748b" />
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ef4444',
                color: 'white',
                fontSize: '10px',
                padding: '2px 5px',
                borderRadius: '10px'
              }}>3</span>
            </button>
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: '600' }}>
                AD
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Admin</span>
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
