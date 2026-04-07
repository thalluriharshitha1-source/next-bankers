import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle, Search, User, Phone, Mail, Loader2 } from 'lucide-react';

const BACKEND_URL = 'https://next-bankers.onrender.com/api/queries';

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchQueries = async () => {
    try {
      const response = await fetch(BACKEND_URL);
      if (response.ok) {
        const data = await response.json();
        setQueries(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${BACKEND_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        fetchQueries();
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const filteredQueries = queries.filter(query => {
    const matchesFilter = filter === 'All' || query.status === filter;
    const matchesSearch = query.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          query.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          query.phone?.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
          Customer Queries
        </h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                padding: '12px 14px 12px 42px',
                borderRadius: '12px',
                outline: 'none',
                width: '320px',
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
              borderRadius: '12px',
              outline: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <option value="All">All Messages</option>
            <option value="Unread">New Queries</option>
            <option value="Read">Processed</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '1.5rem' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', gridColumn: '1 / -1' }}>
            <Loader2 size={32} className="animate-spin" style={{ color: 'var(--primary)' }} />
          </div>
        ) : filteredQueries.length > 0 ? (
          filteredQueries.map((query) => (
            <div key={query.id} className="stat-card" style={{ padding: '1.75rem', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <User size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.0625rem' }}>{query.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '2px' }}>
                        ID: {query.id.substring(0, 8)}...
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    fontWeight: '800', 
                    textTransform: 'uppercase',
                    background: query.status === 'Read' ? '#f0fdf4' : '#fff7ed', 
                    color: query.status === 'Read' ? '#10b981' : '#f59e0b',
                    border: `1px solid ${query.status === 'Read' ? '#dcfce7' : '#ffedd5'}`
                  }}>
                    {query.status || 'Unread'}
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '4px' }}>
                      <Mail size={12} /> EMAIL
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{query.email}</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '4px' }}>
                      <Phone size={12} /> PHONE
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)' }}>{query.phone}</div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '8px' }}>
                    <MessageSquare size={12} /> CUSTOMER MESSAGE
                  </div>
                  <div style={{ 
                    padding: '1.25rem', 
                    background: 'white', 
                    borderRadius: '12px', 
                    color: '#475569',
                    fontSize: '0.9375rem',
                    lineHeight: '1.6',
                    border: '1px solid var(--border)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                    minHeight: '100px'
                  }}>
                    {query.message}
                  </div>
                </div>
              </div>
              
              {query.status !== 'Read' && (
                <button 
                  onClick={() => updateStatus(query.id, 'Read')}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px', 
                    borderRadius: '12px', 
                    background: 'var(--primary)', 
                    color: 'white', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontWeight: '800',
                    fontSize: '0.9375rem',
                    width: '100%',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <CheckCircle size={18} />
                  Mark as Processed
                </button>
              )}
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem', background: 'white', borderRadius: '24px', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
            <MessageSquare size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>No customer queries found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Queries;
