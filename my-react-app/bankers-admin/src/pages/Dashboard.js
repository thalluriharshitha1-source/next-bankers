import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
  PieChart,
  BarChart3,
  Activity
} from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000/api/applications';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setApplications(data);
          }
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const totalApps = applications.length;
  const pendingApps = applications.filter(app => (app.status || 'Pending').toLowerCase() === 'pending').length;
  const approvedApps = applications.filter(app => (app.status || '').toLowerCase() === 'approved').length;
  const rejectedApps = applications.filter(app => (app.status || '').toLowerCase() === 'rejected').length;

  const stats = [
    { label: 'Total Applications', value: loading ? '...' : totalApps.toString(), icon: <FileText size={24} />, trend: '+5.2%', isUp: true },
    { label: 'Approved Loans', value: loading ? '...' : approvedApps.toString(), icon: <CheckCircle size={24} />, trend: '-2.1%', isUp: false },
    { label: 'Rejected Loans', value: loading ? '...' : rejectedApps.toString(), icon: <XCircle size={24} />, trend: '+1.4%', isUp: true },
    { label: 'Pending Reviews', value: loading ? '...' : pendingApps.toString(), icon: <Clock size={24} />, trend: '+8.4%', isUp: true },
  ];

  // Calculate Loan Type Distribution
  const loanTypes = {};
  applications.forEach(app => {
    const type = app.loanType || app.type || 'Other';
    loanTypes[type] = (loanTypes[type] || 0) + 1;
  });

  const loanTypeData = Object.entries(loanTypes).map(([name, count]) => ({
    name,
    count,
    percentage: totalApps > 0 ? (count / totalApps) * 100 : 0
  })).sort((a, b) => b.count - a.count);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Top Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', background: '#eff6ff', borderRadius: '10px', color: '#2563eb' }}>
                {stat.icon}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: stat.isUp ? '#10b981' : '#ef4444'
              }}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div className="label">{stat.label}</div>
            <div className="value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Analytics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

        {/* Loan Distribution Chart (Custom CSS) */}
        <div className="stat-card" style={{ height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '8px', background: '#f5f3ff', borderRadius: '8px', color: '#7c3aed' }}>
              <BarChart3 size={20} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Loan Distribution</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center' }}><Loader2 size={24} className="animate-spin" /></div>
            ) : loanTypeData.length > 0 ? loanTypeData.map((loan, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span style={{ fontWeight: '500' }}>{loan.name}</span>
                  <span style={{ color: '#64748b' }}>{loan.count} ({loan.percentage.toFixed(0)}%)</span>
                </div>
                <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${loan.percentage}%`,
                      background: idx === 0 ? '#2563eb' : idx === 1 ? '#7c3aed' : '#10b981',
                      borderRadius: '5px',
                      transition: 'width 1s ease-in-out'
                    }}
                  />
                </div>
              </div>
            )) : (
              <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>No data available</p>
            )}
          </div>
        </div>

        {/* Application Velocity / Success Metrics */}
        <div className="stat-card" style={{ height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '8px', background: '#fff7ed', borderRadius: '8px', color: '#ea580c' }}>
              <TrendingUp size={20} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Conversion Analytics</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>Approval Rate</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#10b981' }}>
                {totalApps > 0 ? ((approvedApps / totalApps) * 100).toFixed(1) : 0}%
              </div>
            </div>
            <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>Rejection Rate</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ef4444' }}>
                {totalApps > 0 ? ((rejectedApps / totalApps) * 100).toFixed(1) : 0}%
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Active Pipeline</span>
              <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: '600' }}>{pendingApps} Pending</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '60px' }}>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${30 + Math.sin(i * 0.5) * 15 + Math.random() * 10}%`,
                    background: i <= new Date().getMonth() ? '#2563eb' : '#e2e8f0',
                    borderRadius: '2px',
                    opacity: i <= new Date().getMonth() ? 1 : 0.4,
                    transition: 'all 0.5s ease'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px', fontSize: '9px', color: '#94a3b8', fontWeight: '600', textAlign: 'center' }}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                <span key={index} style={{ flex: 1 }}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* System Intelligence */}
        <div className="stat-card" style={{ height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '8px', background: '#f0fdf4', borderRadius: '8px', color: '#166534' }}>
              <Activity size={20} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>System Intelligence</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span>Server Resilience</span>
              <span style={{ fontWeight: '700' }}>99.9%</span>
            </div>
            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '99.9%', background: '#10b981' }}></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span>AI Credit Scoring</span>
              <span style={{ fontWeight: '700' }}>Active</span>
            </div>
            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '100%', background: '#2563eb' }}></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginTop: '10px' }}>
              <span style={{ color: '#64748b' }}>Avg. Processing Time</span>
              <span style={{ fontWeight: '700' }}>1.4 Days</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
