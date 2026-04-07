import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Applications', path: '/applications', icon: <FileText size={20} /> },
    { name: 'Queries', path: '/queries', icon: <MessageSquare size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Sidebar - Sleeker Fixed Width */}
      <aside className="sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '3rem', padding: '0 10px' }}>
          <div style={{ 
            width: '36px', 
            height: '36px', 
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
          }}>
            B
          </div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', margin: 0, letterSpacing: '-0.5px' }}>
            Next <span style={{ color: 'var(--primary)' }}>Bankers</span>
          </h1>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                {item.icon}
                <span>{item.name}</span>
              </div>
              <ChevronRight size={14} className="chevron" />
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <button 
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.25rem',
              color: '#ef4444',
              background: 'none',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '700',
              width: '100%',
              transition: 'all 0.2s ease',
              fontSize: '0.9375rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#fef2f2'}
            onMouseOut={(e) => e.currentTarget.style.background = 'none'}
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area - Full Width Optimization */}
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Top Header Bar for Context Branding */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          marginBottom: '2.5rem', 
          width: '100%' 
        }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.75px', marginBottom: '4px' }}>
              Dashboard Overview
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: '500' }}>
              Welcome back, Admin. Here is what is happening today across the system.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--text-main)' }}>Harshitha T.</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Super Admin Portal</span>
            </div>
            <div style={{ 
              width: '46px', 
              height: '46px', 
              borderRadius: '14px', 
              background: 'white', 
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              fontWeight: '800',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '1rem'
            }}>
              HT
            </div>
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: 1 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
