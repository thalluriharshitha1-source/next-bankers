const About = () => (
  <div className="animate show">
    {/* HERO SECTION */}
    <section className="hero" style={{
      padding: '140px 20px',
      color: '#ffff',
      background: 'url("https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center 50%'
    }}>
      <div className="container">
        <h1>About Next Bankers</h1>
        <p>Your path to financial growth starts with a trusted partner.</p>
      </div>
    </section>

    {/* MISSION & VISION CARDS */}
    <section className="container grid">
      <div className="card">
        <div className="icon-circle">
          <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"></circle>
            <path d="M12 8v.01"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
        <h3>Our Mission</h3>
        <p>To provide 360° financial assistance with quick approvals and personalized solutions for every citizen.</p>
      </div>
      <div className="card">
        <div className="icon-circle">
          <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <h3>Our Vision</h3>
        <p>To become the most reliable digital lending platform, powered by transparency and technology.</p>
      </div>
    </section>

    {/* EXTRA INFO: CORE VALUES */}
    <section style={{ background: '#dee4eaff', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ color: '#0D3B66', marginBottom: '50px', fontSize: '2.5rem', textAlign: 'center' }}>Our Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h4 style={{ color: '#0D3B66', marginBottom: '10px' }}>Transparency</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>No hidden costs. No complicated jargon. Just honest financial advice.</p>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h4 style={{ color: '#0D3B66', marginBottom: '10px' }}>Efficiency</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>We value your time. Our tech-driven process ensures the fastest disbursals.</p>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></path>
                <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"></path>
              </svg>
            </div>
            <h4 style={{ color: '#0D3B66', marginBottom: '10px' }}>Integrity</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>We act in your best interest, maintaining the highest ethical standards.</p>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 1v22M4.22 4.22l15.56 15.56M1 12h22M4.22 19.78L19.78 4.22"></path>
              </svg>
            </div>
            <h4 style={{ color: '#0D3B66', marginBottom: '10px' }}>Innovation</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Constantly evolving our digital platform to make lending simpler for everyone.</p>
          </div>
        </div>
      </div>
    </section>

    {/* NEW ABOUT IMAGE SECTION */}
    <section className="container" style={{ paddingBottom: '100px', textAlign: 'center', paddingTop: '80px' }}>
      <h2 style={{ color: '#0D3B66', marginBottom: '40px', fontSize: '2.5rem' }}>Our Commitment to You</h2>

      {/* Professional Image with fallback to local public/images/about.png */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
          alt="Next Bankers Office"
          style={{
            width: '100%',
            height: '550px',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => { e.target.src = "/images/about.png"; }}
        />
        {/* Stylish Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(transparent, rgba(13, 59, 102, 0.8))',
          padding: '40px',
          color: 'white',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.8rem' }}>Built on Trust & Transparency</h3>
          <p style={{ opacity: '0.9', maxWidth: '700px' }}>We leverage cutting-edge technology to bridge the gap between financial institutions and borrowers.</p>
        </div>
      </div>

      <div style={{ marginTop: '50px', maxWidth: '900px', margin: '50px auto 0' }}>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Next Bankers is more than just a loan consultancy. We are a team of dedicated financial
          experts who believe that everyone deserves fair and fast access to capital.
          Whether it's for your education, a new home, or growing your business,
          we ensure your financial journey is smooth, paperless, and stress-free.
        </p>
      </div>
    </section>

    {/* EXTRA INFO: OUR JOURNEY & IMPACT */}
    <section style={{ padding: '80px 0', background: '#0D3B66', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Journey</h2>
            <p style={{ lineHeight: '1.8', opacity: '0.9' }}>
              Founded with a goal to democratize credit, Next Bankers began as a small advisory team in Hyderabad.
              Today, we have helped thousands of families and businesses secure their futures.
              Our growth is a testament to the trust our customers place in us every day.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: '#F95738' }}>10+</h3>
              <p style={{ fontSize: '0.9rem' }}>Years of Experience</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: '#F95738' }}>50k+</h3>
              <p style={{ fontSize: '0.9rem' }}>Happy Clients</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: '#F95738' }}>15+</h3>
              <p style={{ fontSize: '0.9rem' }}>Banking Partners</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: '#F95738' }}>98%</h3>
              <p style={{ fontSize: '0.9rem' }}>Approval Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
      <h2 style={{ color: '#0D3B66', marginBottom: '20px' }}>National Presence</h2>
      <p style={{ color: '#666', marginBottom: '40px' }}>Headquartered in Hyderabad, serving customers across 20+ major cities in India.</p>
      <button className="btn-primary" onClick={() => window.location.href = '/contact'}>Partner with Us</button>
    </section>
  </div>
);

export default About;