import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Download,
  Eye,
  Check,
  X,
  RefreshCw,
  Loader2,
  AlertCircle
} from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000/api/applications';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(BACKEND_URL);
      if (!response.ok) throw new Error('Failed to fetch data from backend');
      
      const data = await response.json();
      
      // Expected data format: array of objects from the sheet
      // [{ name: "John", phone: "123", loanType: "Personal", amount: "1000", ... }]
      
      if (Array.isArray(data)) {
        // Map and add some metadata/ids if missing
        const mappedData = data.map((item, index) => ({
          ...item,
          id: item.id || `APP-${String(index + 1).padStart(3, '0')}`,
          status: item.status || 'Pending',
          date: item.date || item.timestamp || new Date().toISOString().split('T')[0]
        }));
        setApplications(mappedData);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      console.error("Fetch error:", err);
      // For now, if fetch fails (e.g. CORS), we'll show a friendly error
      // But we'll also keep some mock data if it helps the user see the UI
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`${BACKEND_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update status');

      // Update local state to reflect the change immediately
      setApplications(prev => prev.map(app => 
        app.id === id ? { ...app, status: newStatus } : app
      ));
    } catch (err) {
      console.error("Update error:", err);
      alert('Failed to update status. Please try again.');
    }
  };

  const filteredApplications = applications.filter(app => 
    (app.name && app.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (app.loanType && app.loanType.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (app.phone && app.phone.includes(searchTerm))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Loan Applications</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={fetchApplications} 
            className="btn" 
            style={{ 
              background: '#e2e8f0', 
              color: '#1e293b', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.5 : 1
            }}
            disabled={loading}
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button className="btn" style={{ background: '#e2e8f0', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {error && (
        <div style={{ 
          background: '#fef2f2', 
          border: '1px solid #fee2e2', 
          color: '#b91c1c', 
          padding: '1.5rem', 
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={20} />
            <strong style={{ fontSize: '1rem' }}>Connection Error: Backend Unavailable</strong>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5' }}>
            The dedicated admin backend is not responding. Please ensure the server is running at 
            <code>http://localhost:5000</code>.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
             <button 
               onClick={fetchApplications}
               style={{ background: '#b91c1c', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' }}
             >
               Retry Connection
             </button>
          </div>
        </div>
      )}

      <div className="table-container">
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', color: '#64748b' }} />
            <input 
              type="text" 
              placeholder="Filter applications..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                padding: '8px 12px 8px 36px', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0', 
                width: '300px',
                outline: 'none'
              }} 
            />
          </div>
          <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
            {loading ? 'Loading...' : `Showing ${filteredApplications.length} applications`}
          </div>
        </div>
        
        {loading ? (
          <div style={{ padding: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Loader2 size={48} className="animate-spin" color="#2563eb" />
            <p style={{ color: '#64748b' }}>Fetching applications...</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Applicant</th>
                <th>Loan Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.length > 0 ? filteredApplications.map((app) => (
                <tr key={app.id}>
                  <td style={{ fontWeight: '600' }}>{app.id}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: '600' }}>{app.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{app.phone}</span>
                    </div>
                  </td>
                  <td>{app.loanType || app.type}</td>
                  <td style={{ fontWeight: '600' }}>{app.amount ? `₹${app.amount}` : '-'}</td>
                  <td>
                    <span className={`status-badge status-${(app.status || 'Pending').toLowerCase().replace(/\s+/g, '_')}`}>
                      {app.status || 'Pending'}
                    </span>
                  </td>
                  <td>{app.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <button className="btn" style={{ padding: '6px', background: '#eff6ff', color: '#2563eb' }} title="View">
                        <Eye size={16} />
                      </button>
                      
                      <select 
                        value={app.status || 'Pending'}
                        onChange={(e) => handleStatusUpdate(app.id, e.target.value)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          border: '1px solid var(--border-color)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: 'white',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Under Process">Under Process</option>
                        <option value="Sanctioned">Sanctioned</option>
                        <option value="Disbursed">Disbursed</option>
                      </select>

                      <button className="btn" style={{ padding: '6px', background: 'transparent', color: '#64748b' }}>
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Applications;
