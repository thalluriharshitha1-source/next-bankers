import React from 'react';

const Settings = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ margin: 0 }}>Admin Settings</h2>
      
      <div className="stat-card" style={{ maxWidth: '600px' }}>
        <h3 style={{ margin: '0 0 1.5rem 0' }}>Profile Information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Admin Name</label>
            <input 
              type="text" 
              defaultValue="Admin User" 
              style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Email Address</label>
            <input 
              type="email" 
              defaultValue="admin@bankers.com" 
              style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }} 
            />
          </div>
          <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Save Changes</button>
        </div>
      </div>

      <div className="stat-card" style={{ maxWidth: '600px' }}>
        <h3 style={{ margin: '0 0 1.5rem 0' }}>Notification Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" defaultChecked id="email-notify" />
            <label htmlFor="email-notify" style={{ fontSize: '0.875rem' }}>Email notifications for new applications</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" defaultChecked id="system-notify" />
            <label htmlFor="system-notify" style={{ fontSize: '0.875rem' }}>System alerts for performance issues</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
