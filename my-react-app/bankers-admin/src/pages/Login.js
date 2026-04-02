import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote, Lock, Mail, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, any login works
      localStorage.setItem('isAdminAuthenticated', 'true');
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '2.5rem',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            padding: '12px',
            background: '#2563eb',
            borderRadius: '12px',
            marginBottom: '1rem'
          }}>
            <Banknote size={32} color="white" />
          </div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Welcome Back</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem' }}>Please enter your credentials to access the portal</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.3)' }} />
              <input
                type="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 42px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: 'white',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.3)' }} />
              <input
                type="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 42px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: 'white',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: '#2563eb',
              color: 'white',
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8125rem', textDecoration: 'none' }}>Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
