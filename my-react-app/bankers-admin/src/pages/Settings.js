import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, User, Globe } from 'lucide-react';

const Settings = () => {
  const sections = [
    { title: 'Profile Settings', icon: <User size={20} />, description: 'Update your admin profile information' },
    { title: 'Notification Preferences', icon: <Bell size={20} />, description: 'Manage how you receive alerts' },
    { title: 'Security & Password', icon: <Shield size={20} />, description: 'Update your password and security settings' },
    { title: 'System Configuration', icon: <Globe size={20} />, description: 'Configure system-wide parameters' },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: '#f8fafc',
          padding: '10px',
          borderRadius: '10px',
          color: '#64748b'
        }}>
          <SettingsIcon size={24} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>Settings</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="stat-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                background: '#f1f5f9',
                padding: '10px',
                borderRadius: '8px',
                color: '#475569'
              }}>
                {section.icon}
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#1e293b' }}>{section.title}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
