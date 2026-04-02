import { useState } from 'react';

// Replace with your Google Apps Script URL after deployment
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYmvqIPGlfuT-OTpd2t57dRFvuPSFo4fkEF2Qa4TJiTyF3OKUGqIvQUFGtf--BuKMQ/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error, validation_error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, placeholder } = e.target;
    const key = name || (placeholder === 'Full Name' ? 'name' :
      placeholder === 'Email Address' ? 'email' :
        placeholder === 'Phone Number' ? 'phone' :
          placeholder === 'How can we help you?' ? 'message' : '');
    if (key) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Frontend Validation
    if (!formData.name || formData.name.trim().length < 2 || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      setErrorMessage('Invalid name. Only letters and spaces are allowed, minimum 2 characters.');
      setStatus('validation_error');
      return;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Invalid email address.');
      setStatus('validation_error');
      return;
    }
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setErrorMessage('Invalid phone number. Must be a valid 10-digit number starting with 6-9.');
      setStatus('validation_error');
      return;
    }

    setStatus('submitting');

    try {
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key]);
      }
      params.append('type', 'Contact Message');

      // 1. Submit to Google Sheets (legacy/backup)
      const googleSheetsLink = fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      });

      // 2. Submit to new local backend (primary for Admin Portal)
      const localBackendLink = fetch(`${process.env.REACT_APP_BACKEND_URL}/api/queries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      await Promise.allSettled([googleSheetsLink, localBackendLink]);

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="animate show" style={{ background: '#fdfdfd', minHeight: '90vh' }}>
      {/* Minimalist Header */}
      <section
        style={{
          padding: '150px 70px',
          textAlign: 'center',
          color: '#ffffffff',
          backgroundImage: `url("https://images.unsplash.com/photo-1521791136064-7986c2920216")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Get In Touch</h1>
          <p style={{ opacity: 0.9, maxWidth: '600px', margin: 'auto' }}>
            Have questions? Our financial experts are ready to provide you with the guidance you need.
          </p>
        </div>
      </section>

      <section className="container" style={{ marginTop: '-40px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>

          {/* LEFT CARD: CONTACT INFORMATION */}
          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <h2 style={{ color: '#0D3B66', marginBottom: '30px' }}>Contact Information</h2>

            <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="icon-circle" style={{ margin: '0', width: '60px', height: '60px' }}>
                <svg style={{ width: '30px', height: '30px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.34 1.6.65 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.31 1.53.53 2.34.65a2 2 0 0 1 1.72 2z"></path>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#F95738', fontWeight: '700', textTransform: 'uppercase' }}>Phone</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0D3B66' }}>+91 63042 44117</p>
              </div>
            </div>

            <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="icon-circle" style={{ margin: '0', width: '60px', height: '60px' }}>
                <svg style={{ width: '30px', height: '30px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
                  <path d="M4 4h16v16H4z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#F95738', fontWeight: '700', textTransform: 'uppercase' }}>Email</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0D3B66' }}>info@nextbankers.co.in</p>
              </div>
            </div>

            <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="icon-circle" style={{ margin: '0', width: '60px', height: '60px' }}>
                <svg style={{ width: '30px', height: '30px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#F95738', fontWeight: '700', textTransform: 'uppercase' }}>Location</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0D3B66' }}>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '30px', background: '#fff1ee', borderRadius: '20px' }}>
              <p style={{ color: '#F95738', fontWeight: '600' }}>Operating Hours</p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>Monday – Saturday: 9:00 AM – 7:00 PM</p>
            </div>
          </div>

          {/* RIGHT CARD: MESSAGE FORM */}
          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <h2 style={{ color: '#0D3B66', marginBottom: '30px' }}>Send a Message</h2>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '20px' }}>✓</div>
                <h3 style={{ color: '#0D3B66', marginBottom: '15px' }}>Message Sent!</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Thank you for reaching out. Your message has been delivered successfully!</p>
                <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '30px', padding: '10px 30px' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div style={{ background: '#ffebee', color: '#c62828', padding: '15px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
                    There was an error sending your message. Please try again.
                  </div>
                )}
                {status === 'validation_error' && (
                  <div style={{ background: '#ffebee', color: '#c62828', padding: '15px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
                    {errorMessage}
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required pattern="[a-zA-Z\s]{2,}" title="Only letters and spaces are allowed, minimum 2 characters" style={{ background: '#f8f9fc', border: '1px solid #eee' }} />
                  <input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ background: '#f8f9fc', border: '1px solid #eee' }} />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required pattern="^[6-9]\d{9}$" title="Valid 10-digit phone number starting with 6-9" style={{ background: '#f8f9fc', border: '1px solid #eee' }} />
                <textarea placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows="6" style={{ background: '#f8f9fc', border: '1px solid #eee' }}></textarea>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'submitting'}
                  style={{ width: '100%', padding: '18px', fontSize: '1.1rem', marginTop: '10px', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'submitting' ? 'Sending...' : 'Deliver Message'}
                </button>
              </form>
            )}
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: '#999' }}>
              We promise to keep your financial data 100% private and secure.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;