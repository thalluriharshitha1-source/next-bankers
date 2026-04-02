import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZd5t4pa-NPmmxhwy_qp8xeW904YrVSqOJ30N_nPQeii5Ho5Md2TurGpV_PX_pufaj/exec';
const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/applications`; // env: https://next-bankers.onrender.com

const ApplyNow = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    amount: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error, validation_error
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill loan type if passed via navigation state from loan details page
  useEffect(() => {


    if (location.state && location.state.selectedLoan) {
      setFormData(prev => ({ ...prev, loanType: location.state.selectedLoan }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setErrorMessage('Invalid phone number. Must be a valid 10-digit number starting with 6-9.');
      setStatus('validation_error');
      return;
    }

    setStatus('submitting');

    try {
      // Using URLSearchParams (application/x-www-form-urlencoded) is often more compatible 
      // with standard Google Apps Script doPost handlers (e.parameter).
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key]);
      }

      // 1. Submit to Google Sheets (legacy/backup)
      const googleSheetsLink = fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      });

      // 2. Submit to new local backend (primary for Admin Portal)
      const localBackendLink = fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Wait for both (or at least the local one to be sure)
      await Promise.allSettled([googleSheetsLink, localBackendLink]);

      setStatus('success');
      setFormData({ name: '', phone: '', loanType: '', amount: '' });
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="animate" style={{ background: '#f4f7f9', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#0D3B66', marginBottom: '40px' }}>Loan Application Form</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0',
          background: 'white',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ flex: '1', minWidth: '300px', alignSelf: 'stretch' }}>
            <img
              src="/apply_now_banner.png"
              alt="Loan Application"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px', padding: '40px' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '20px' }}>✓</div>
                <h3 style={{ color: '#0D3B66', marginBottom: '15px' }}>Application Submitted!</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Thank you for reaching out. Our advisor will contact you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '30px', padding: '10px 30px' }}>Submit Another</button>
              </div>
            ) : (
              <>
                <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>Fill out the form below and our advisor will contact you within 24 hours.</p>

                {status === 'error' && (
                  <div style={{ background: '#ffebee', color: '#c62828', padding: '15px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
                    There was an error submitting your form. Please try again.
                  </div>
                )}
                {status === 'validation_error' && (
                  <div style={{ background: '#ffebee', color: '#c62828', padding: '15px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required pattern="[a-zA-Z\s]{2,}" title="Only letters and spaces are allowed, minimum 2 characters" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required pattern="^[6-9]\d{9}$" title="Valid 10-digit phone number starting with 6-9" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
                  <select name="loanType" value={formData.loanType} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}>
                    <option value="">Select Loan Type</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Education Loan">Education Loan</option>
                    <option value="Mortgage Loan">Mortgage Loan</option>
                  </select>
                  <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Required Loan Amount (₹)" required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'submitting'}
                    style={{ width: '100%', padding: '15px', marginTop: '10px', fontSize: '1.1rem', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
