import { Link } from 'react-router-dom';

const BorrowerBenefits = () => {
    return (
        <div className="animate show">

            {/* HERO SECTION */}
            <section style={{
                background: 'linear-gradient(135deg, #0D3B66, #1a5580)',
                color: 'white',
                padding: '150px 20px',
                textAlign: 'center'
            }}>
                <h1>First Time Borrower Benefits</h1>
                <p>Exclusive advantages designed for new borrowers</p>
            </section>

            {/* BENEFITS */}
            <section className="container" style={{ padding: '80px 20px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="5" x2="5" y2="19"></line>
                                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                                <circle cx="17.5" cy="17.5" r="2.5"></circle>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Lower Interest Rates</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Get up to 1% lower interest compared to standard rates.</p>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <line x1="2" y1="10" x2="22" y2="10"></line>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Zero Processing Fee</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>No hidden charges for your first loan application.</p>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Flexible EMI Options</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Choose repayment plans that suit your income.</p>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Quick Approval</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Faster approval process for first-time applicants.</p>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Credit Score Guidance</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Get expert tips to build and improve your credit score.</p>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{ marginBottom: '20px', color: '#F95738' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Dedicated Support</h3>
                        <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Step-by-step assistance throughout your loan journey.</p>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/apply" className="btn-primary" style={{
                        padding: '15px 40px',
                        fontSize: '1.1rem',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>Apply Now</Link>
                </div>
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Link to="/" style={{ color: '#F95738', fontWeight: '600', textDecoration: 'none', fontSize: '1rem' }}>← Back to Home</Link>
                </div>
            </section>

        </div>
    );
};

export default BorrowerBenefits;