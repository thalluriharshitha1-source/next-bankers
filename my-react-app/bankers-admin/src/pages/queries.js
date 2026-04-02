import React, { useState, useEffect } from 'react';
import {
    Search,
    MoreVertical,
    Download,
    Eye,
    RefreshCw,
    Loader2,
    AlertCircle,
    MessageSquare
} from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000/api/queries';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchQueries = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(BACKEND_URL);
            if (!response.ok) throw new Error('Failed to fetch data from backend');

            const data = await response.json();

            if (Array.isArray(data)) {
                setQueries(data);
            } else {
                throw new Error('Invalid data format received');
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQueries();
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
            setQueries(prev => prev.map(q =>
                q.id === id ? { ...q, status: newStatus } : q
            ));
        } catch (err) {
            console.error("Update error:", err);
            alert('Failed to update status. Please try again.');
        }
    };

    const filteredQueries = queries.filter(q =>
        (q.name && q.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (q.email && q.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (q.phone && q.phone.includes(searchTerm))
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MessageSquare size={24} color="#2563eb" />
                    Contact Queries
                </h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={fetchQueries}
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
                            onClick={fetchQueries}
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
                            placeholder="Filter queries..."
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
                        {loading ? 'Loading...' : `Showing ${filteredQueries.length} queries`}
                    </div>
                </div>

                {loading ? (
                    <div style={{ padding: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <Loader2 size={48} className="animate-spin" color="#2563eb" />
                        <p style={{ color: '#64748b' }}>Fetching queries...</p>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sender Info</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredQueries.length > 0 ? filteredQueries.map((q) => (
                                <tr key={q.id}>
                                    <td style={{ fontWeight: '600' }}>{q.id}</td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: '600' }}>{q.name}</span>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{q.email}</span>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{q.phone}</span>
                                        </div>
                                    </td>
                                    <td style={{ maxWidth: '300px' }}>
                                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.875rem' }} title={q.message}>
                                            {q.message || '-'}
                                        </div>
                                    </td>
                                    <td>{q.date}</td>
                                    <td>
                                        <span className={`status-badge status-${(q.status || 'Unread').toLowerCase().replace(/\s+/g, '_')}`}>
                                            {q.status || 'Unread'}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                            <button className="btn" style={{ padding: '6px', background: '#eff6ff', color: '#2563eb' }} title="View Full Message" onClick={() => alert(`Message from ${q.name}:\n\n${q.message}`)}>
                                                <Eye size={16} />
                                            </button>

                                            <select
                                                value={q.status || 'Unread'}
                                                onChange={(e) => handleStatusUpdate(q.id, e.target.value)}
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
                                                <option value="Unread">Unread</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Resolved">Resolved</option>
                                                <option value="Archived">Archived</option>
                                            </select>

                                            <button className="btn" style={{ padding: '6px', background: 'transparent', color: '#64748b' }}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                                        No queries found.
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

export default Queries;
