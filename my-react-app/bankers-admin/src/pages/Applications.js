import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, XCircle, Search, User, Phone, Info, Loader2, Activity, Hash } from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000/api/applications';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchApplications = async () => {
    try {
      const response = await fetch(BACKEND_URL);
      if (response.ok) {
        const data = await response.json();
        setApplications(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${BACKEND_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        fetchApplications();
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const filteredApps = applications.filter(app => {
    const matchesFilter = filter === 'All' || app.status === filter;
    const matchesSearch = app.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.phone?.includes(searchTerm) ||
                          app.id?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      case 'under process': return '#3b82f6';
      case 'disbursed': return '#7c3aed';
      default: return '#f59e0b';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
          Loan Applications
        </h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by name, phone, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                padding: '10px 14px 10px 42px',
                borderRadius: '10px',
                outline: 'none',
                width: '350px',
                fontSize: '0.9375rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              background: 'white',
              border: '1px solid var(--border)',
              padding: '10px 16px',
              borderRadius: '10px',
              outline: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending Review</option>
            <option value="Under Process">Under Process</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Disbursed">Disbursed</option>
          </select>
        </div>
      </div>

      {/* Single Table Header Row - 7 Balanced Columns */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '120px 180px 140px 180px 110px 140px 1fr', 
        gap: '1.25rem', 
        padding: '1rem 1.5rem', 
        background: 'white', 
        borderRadius: '12px 12px 0 0', 
        border: '1px solid var(--border)',
        borderBottom: 'none',
        color: 'var(--text-muted)',
        fontSize: '0.7rem',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>ID</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={14}/> Applicant Name</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14}/> Contact</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FileText size={14}/> Loan Selection</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Info size={14}/> Amount</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}><Activity size={14}/> Status</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}><CheckCircle size={14}/> Action</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '0 0 12px 12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem', background: 'white' }}>
            <Loader2 size={32} className="animate-spin" style={{ color: 'var(--primary)' }} />
          </div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <div key={app.id} style={{ 
              display: 'grid', 
              gridTemplateColumns: '120px 180px 140px 180px 110px 140px 1fr', 
              gap: '1.25rem', 
              padding: '1.25rem 1.5rem', 
              background: 'white', 
              borderBottom: index === filteredApps.length - 1 ? 'none' : '1px solid var(--border)',
              alignItems: 'center',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'}
            onMouseOut={(e) => e.currentTarget.style.background = 'white'}
            >
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '800', fontFamily: 'inherit' }}>
                {index + 1}
              </div>
              <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '0.9rem' }}>{app.name}</div>
              <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.875rem' }}>{app.phone}</div>
              <div style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>{app.loanType || 'Personal Loan'}</div>
              <div style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.9375rem' }}>
                {app.amount ? `₹${Number(app.amount).toLocaleString('en-IN')}` : 'N/A'}
              </div>

              {/* Status Badge Column - Centered */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ 
                  padding: '6px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.725rem', 
                  fontWeight: '800', 
                  background: `${getStatusColor(app.status)}15`, 
                  color: getStatusColor(app.status),
                  border: `1px solid ${getStatusColor(app.status)}30`,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  minWidth: '110px'
                }}>
                  {app.status || 'Pending'}
                </div>
              </div>

              {/* Action Dropdown Column - Centered */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <select 
                  value="" 
                  onChange={(e) => updateStatus(app.id, e.target.value)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'white',
                    color: 'var(--text-main)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    outline: 'none',
                    width: '135px',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center'
                  }}
                >
                  <option value="" disabled>Change Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Under Process">Under Process</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Disbursed">Disbursed</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
            <FileText size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>No loan applications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
