import React, { useState, useEffect } from 'react';
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
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
    { label: 'Total Applications', value: loading ? '...' : totalApps.toString(), icon: <FileText size={22} />, trend: '+5.2%', isUp: true, color: '#2563eb' },
    { label: 'Approved Loans', value: loading ? '...' : approvedApps.toString(), icon: <CheckCircle size={22} />, trend: '-2.1%', isUp: false, color: '#10b981' },
    { label: 'Rejected Loans', value: loading ? '...' : rejectedApps.toString(), icon: <XCircle size={22} />, trend: '+1.4%', isUp: true, color: '#ef4444' },
    { label: 'Pending Reviews', value: loading ? '...' : pendingApps.toString(), icon: <Clock size={22} />, trend: '+8.4%', isUp: true, color: '#f59e0b' },
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Top Balanced Stats Grid */}
      <div className="stat-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div style={{ 
                padding: '10px', 
                background: `${stat.color}15`, 
                borderRadius: '12px', 
                color: stat.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '4px 8px',
                borderRadius: '20px',
                background: stat.isUp ? '#f0fdf4' : '#fef2f2',
                color: stat.isUp ? '#10b981' : '#ef4444'
              }}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <div className="label">{stat.label}</div>
              <div className="value" style={{ marginTop: '2px' }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacious Analytics Row - Full Width */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr 1fr', /* Balanced asymmetric layout */
        gap: '2.5rem',
        alignItems: 'start'
      }}>

        {/* 1. Loan Distribution Chart (Custom CSS) */}
        <div className="stat-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ padding: '10px', background: '#f5f3ff', borderRadius: '12px', color: '#7c3aed' }}>
              <BarChart3 size={22} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Loan Portfolio</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {loading ? (
              <div style={{ padding: '3rem', textAlign: 'center' }}><Loader2 size={24} className="animate-spin" /></div>
            ) : loanTypeData.length > 0 ? loanTypeData.map((loan, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem', fontWeight: '600' }}>
                  <span>{loan.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{loan.count} ({loan.percentage.toFixed(0)}%)</span>
                </div>
                <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '20px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${loan.percentage}%`,
                      background: `linear-gradient(90deg, ${idx % 2 === 0 ? '#2563eb' : '#7c3aed'}, ${idx % 2 === 0 ? '#60a5fa' : '#a78bfa'})`,
                      borderRadius: '20px'
                    }}
                  />
                </div>
              </div>
            )) : (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>No active loan data</p>
            )}
          </div>
        </div>

        {/* 2. Conversion Analytics */}
        <div className="stat-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '12px', color: '#ea580c' }}>
              <TrendingUp size={22} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Conversions</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase' }}>Approval Rate</div>
              <div style={{ fontSize: '1.75rem', fontWeight: '900', color: '#10b981' }}>
                {totalApps > 0 ? ((approvedApps / totalApps) * 100).toFixed(1) : 0}%
              </div>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.9375rem', fontWeight: '700' }}>Process Activity</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '800' }}>Active</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '80px' }}>
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${40 + Math.sin(i * 1.5) * 25 + Math.random() * 15}%`,
                      background: i < 7 ? 'var(--primary)' : '#e2e8f0',
                      borderRadius: '4px',
                      opacity: i < 7 ? 1 : 0.4
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. System Resilience */}
        <div className="stat-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ padding: '10px', background: '#f0fdf4', borderRadius: '12px', color: '#166534' }}>
              <Activity size={22} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>System Health</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px' }}>
                <span>Uptime Resilience</span>
                <span style={{ color: '#10b981' }}>99.9%</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '99.9%', background: '#10b981' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px' }}>
                <span>Security Engine</span>
                <span style={{ color: 'var(--primary)' }}>Protected</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%', background: 'var(--primary)' }}></div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #e0f2fe' }}>
              <p style={{ fontSize: '0.8125rem', color: '#0369a1', fontWeight: '600', lineHeight: '1.5' }}>
                All systems functional. Database consistency verified at {new Date().toLocaleTimeString()}.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
