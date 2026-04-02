import { Link } from 'react-router-dom';

const LoyaltyBenefits = () => (
  <div className="animate show">
    {/* HERO SECTION */}
    <section style={{
      backgroundImage: `
      linear-gradient(rgba(139, 147, 154, 0.85), rgba(3, 44, 82, 0.85)),
      url('https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?q=80&w=1600')
    `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '120px 20px',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Elite Loyalty Program</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: 'auto' }}>
          At Next Bankers, we value long-term relationships. Our Premium Loyalty Program is designed to reward our most trusted customers with exclusive financial privileges.
        </p>
      </div>
    </section>

    {/* BENEFITS GRID */}
    <section className="container" style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center', color: '#0D3B66', marginBottom: '20px', fontSize: '2.5rem' }}>Exclusive Rewards</h2>
      <div className="grid">
        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <h3>Reduced Interest Rates</h3>
          <p>Get a flat 0.25% to 0.50% reduction on prevailing interest rates for all subsequent loans.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3>Priority Disbursal</h3>
          <p>Skip the queue. Your applications are moved to the "Elite Lane" with disbursal in under 12 hours.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
          </div>
          <h3>Personal Relationship Manager</h3>
          <p>Direct access to a senior financial expert for all your banking and investment queries.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3>Zero Processing Fees</h3>
          <p>As a loyalty member, pay ₹0 processing fees on any new Personal or Car loan applications.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </div>
          <h3>Gift Vouchers</h3>
          <p>Receive premium lifestyle and travel vouchers upon successful completion of every 12 EMIs.</p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>Free Credit Monitoring</h3>
          <p>Quarterly comprehensive credit health reports and tips to maintain a 800+ score at no cost.</p>
        </div>
      </div>
    </section>

    {/* ELIGIBILITY SECTION */}
    <section style={{ background: '#f4f7f9', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
            alt="Customer Success"
            style={{ flex: 1, minWidth: '300px', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: '#0D3B66', fontSize: '2.2rem', marginBottom: '20px' }}>Who is Eligible?</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              You are automatically enrolled into the Elite Circle if you meet any of the following:
            </p>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li>✅ Successfully completed 1 loan tenure with us.</li>
              <li>✅ Zero bounced EMIs in the last 12 months.</li>
              <li>✅ Maintaining an active Home Loan or Business Loan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* BOTTOM CALL TO ACTION */}
    <section className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
      <h2 style={{ color: '#0D3B66' }}>Not a Member Yet?</h2>
      <p style={{ marginTop: '10px', marginBottom: '30px' }}>Start your journey with Next Bankers today and unlock world-class rewards.</p>
      <Link to="/apply" className="btn-primary">Apply for Your First Loan</Link>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ color: '#F95738', fontWeight: '600', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
    </section>
  </div>
);

export default LoyaltyBenefits;