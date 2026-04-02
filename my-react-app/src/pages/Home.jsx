import React from 'react';
import { Link } from 'react-router-dom'; // ADDED THIS IMPORT

const Home = () => {
  // Testimonial Data
  const testimonials = [
    { text: "Got my car loan approved in just 2 days! The team handled everything smoothly.", name: "Ravi Kumar", location: "Hyderabad" },
    { text: "Very transparent process and competitive interest rates. Highly professional support.", name: "Sneha Reddy", location: "Vijayawada" },
    { text: "I was struggling to get a business loan approved. Next Bankers made it simple and stress-free.", name: "Arjun Mehta", location: "Bangalore" },
    { text: "Excellent service! They guided me through every step of my home loan process.", name: "Priya Sharma", location: "Chennai" },
    { text: "Quick response, minimal paperwork, and fast disbursement. Truly reliable.", name: "Mohammed Faisal", location: "Mumbai" },
    { text: "I recommend Next Bankers to anyone looking for financial assistance. Honest and efficient team.", name: "Kavya Nair", location: "Kochi" }
  ];

  return (






    <div className="animate show">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>Your Trusted Path to <br /> Financial Growth</h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Expert guidance for all types of loans with the fastest approval rates in the industry.</p>
          <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 20px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-primary">Apply for Loan</Link>
            <Link to="/contact" className="btn-primary" style={{ background: 'rgba(255,255,255,0.2)' }}>Talk to Expert</Link>
          </div>
        </div>
      </section>

      {/* 2. BANKING PARTNERS SECTION */}
      <section style={{ padding: 'clamp(40px, 15vw, 80px) 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', marginBottom: 'clamp(20px, 5vw, 40px)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Our Trusted Banking Partners</h2>
          <div className="bank-container">
            <img src="/images/sbi.png" alt="SBI" className="partner-logo" />
            <img src="/images/hdfc.png" alt="HDFC" className="partner-logo" />
            <img src="/images/icic.png" alt="ICICI" className="partner-logo" />
            <img src="/images/axis.png" alt="AXIS" className="partner-logo" />
            <img src="/images/kotak.png" alt="KOTAK" className="partner-logo" />
            <img src="/images/baroda.png" alt="Bank of Baroda" className="partner-logo" />
            <img src="/images/bandhan bank.png" alt="Bandhan Bank" className="partner-logo" />
            <img src="/images/dena bank.png" alt="Dena Bank" className="partner-logo" />
            <img src="/images/south indian bank.png" alt="South Indian Bank" className="partner-logo" />
            <img src="/images/corporation bank.png" alt="Corporate Bank" className="partner-logo" />
            <img src="/images/yes bank.png" alt="Yes Bank" className="partner-logo" />
            <img src="/images/punjab national bank.png" alt="Punjab National Bank" className="partner-logo" />
            <img src="/images/canara.png" alt="Canara Bank" className="partner-logo" />
            <img src="/images/Union.png" alt="Union Bank" className="partner-logo" />
            <img src="/images/bank of india.png" alt="Bank of India" className="partner-logo" />
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Why Choose Next Bankers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Fast Processing</h3>
              <p>Quick approval and disbursement within 24-48 hours</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Transparent Process</h3>
              <p>No hidden charges, all fees clearly mentioned upfront</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Expert Support</h3>
              <p>Dedicated team to guide you through the entire process</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Easy Application</h3>
              <p>Simple online process with minimum documentation</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <circle cx="12" cy="12" r="8"></circle>
                <path d="M12 6v12M9 9h6"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Competitive Rates</h3>
              <p>Best interest rates and lowest processing fees in the market</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '50px', height: '50px', marginBottom: '15px', margin: '0 auto' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Trusted Partner</h3>
              <p>Associated with top 15+ banks for secure transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section style={{ padding: 'clamp(40px, 15vw, 80px) 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: 'clamp(30px, 8vw, 60px)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(15px, 4vw, 30px)' }}>
            <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
              <div style={{ width: '60px', height: '60px', background: '#F95738', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto', marginBottom: '20px', fontWeight: 'bold' }}>1</div>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Fill Application</h3>
              <p>Complete our simple online form with basic personal and financial information.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
              <div style={{ width: '60px', height: '60px', background: '#F95738', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto', marginBottom: '20px', fontWeight: 'bold' }}>2</div>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Submit Documents</h3>
              <p>Upload required documents online for verification and processing.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
              <div style={{ width: '60px', height: '60px', background: '#F95738', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto', marginBottom: '20px', fontWeight: 'bold' }}>3</div>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Quick Approval</h3>
              <p>Get approval decision within 24 hours from our expert team.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
              <div style={{ width: '60px', height: '60px', background: '#F95738', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto', marginBottom: '20px', fontWeight: 'bold' }}>4</div>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Get Funds</h3>
              <p>Receive funds directly into your account within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIAL OFFERS SECTION */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Special Offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, #0D3B66 30%, #ff7555 100%)', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
              <div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Women Entrepreneur Special</h3>
                <p style={{ marginBottom: '15px' }}>Special discounted rates for women business owners</p>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>0% Processing Fee</div>
              </div>
              <Link to="/apply" style={{ background: '#fff', color: 'black', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}>Apply Now</Link>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #0D3B66 30%, #ff7555 100%)', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
              <div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>First Time Borrower</h3>
                <p style={{ marginBottom: '15px' }}>Exclusive benefits for customers new to borrowing</p>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Upto 1% Off</div>
              </div>
              <Link to="/borrower-benefits" style={{ background: '#fff', color: 'black', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}>Explore</Link>
            </div>

            {/* UPDATED CARD: PREMIUM CUSTOMER LOYALTY */}
            <div style={{ background: 'linear-gradient(135deg, #0D3B66 30%, #ff7555 100%)', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
              <div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Premium Customer Loyalty</h3>
                <p style={{ marginBottom: '15px' }}>Rewards and benefits for our loyal customers</p>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Extra Benefits</div>
              </div>
              <Link to="/loyalty-benefits" style={{ background: '#fff', color: 'black', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}>Know More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERT ASSISTANCE SECTION */}
      <section className="container" style={{ padding: '60px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000"
            alt="Finance" style={{ flex: 1, minWidth: '300px', borderRadius: '25px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }} />
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: '#0D3B66', fontSize: '2.5rem', marginBottom: '20px' }}>Expert Assistance</h2>
            <p>We provide 360° financial assistance with quick approvals and personalized solutions. Our experts guide you through every step of the process.</p>
            <ul style={{ listStyle: 'none', marginTop: '20px' }}>
              <li>✅ Partnered with Top 15+ Banks</li>
              <li>✅ Lowest Processing Fees</li>
              <li>✅ Maximum Loan Amount Eligibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. STATISTICS/ACHIEVEMENTS SECTION */}
      <section style={{ padding: 'clamp(40px, 15vw, 80px) 0', background: '#0D3B66', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'clamp(30px, 8vw, 60px)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Our Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(20px, 5vw, 40px)' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>50,000+</div>
              <p style={{ fontSize: '1.1rem' }}>Happy Customers</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>₹5000 Cr+</div>
              <p style={{ fontSize: '1.1rem' }}>Loans Disbursed</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>15+</div>
              <p style={{ fontSize: '1.1rem' }}>Bank Partners</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>24 Hours</div>
              <p style={{ fontSize: '1.1rem' }}>Avg Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="testimonials-section animate" style={{ padding: '100px 0', background: '#fdfdfd' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>What Our Clients Say</h2>
          <div className="grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <p>"{item.text}"</p>
                <h4 style={{ marginTop: '15px', color: '#0D3B66' }}>- {item.name}, {item.location}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REQUIRED DOCUMENTS SECTION */}
      <section style={{ padding: '80px 0', background: '#a9b9c8' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Required Documents</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div style={{ background: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                  <h3 style={{ color: '#0D3B66', marginBottom: '0' }}>Identity Documents</h3>
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                  <li>✓ PAN Card (Mandatory)</li>
                  <li>✓ Aadhar Card</li>
                  <li>✓ Passport / Voter ID</li>
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <h3 style={{ color: '#0D3B66', marginBottom: '0' }}>Address Proof</h3>
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                  <li>✓ Recent Utility Bill</li>
                  <li>✓ Rental Agreement</li>
                  <li>✓ Property Deed / Lease</li>
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                  </svg>
                  <h3 style={{ color: '#0D3B66', marginBottom: '0' }}>Income Documents</h3>
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                  <li>✓ Last 6 Months Payslips</li>
                  <li>✓ Last 2 Years IT Returns</li>
                  <li>✓ Bank Statements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BLOG/RESOURCES SECTION */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ color: '#0D3B66', textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Financial Resources & Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <polyline points="23 6 13.46 15.46 8 9.5 1 17"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Build Your Credit Score</h3>
              <p>Tips and strategies to improve your credit score for better loan approval chances</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Smart Borrowing Guide</h3>
              <p>Learn how to borrow wisely and manage your loans effectively</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Financial Goals Planning</h3>
              <p>Create and achieve your financial goals with our expert planning resources</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Interest Rate Trends</h3>
              <p>Stay updated with latest interest rates and market trends</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Loan Security Tips</h3>
              <p>Protect yourself from fraud and ensure safe online loan transactions</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <svg style={{ width: '40px', height: '40px', marginBottom: '15px' }} viewBox="0 0 24 24" fill="none" stroke="#F95738" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4M12 8h.01"></path>
              </svg>
              <h3 style={{ color: '#0D3B66', marginBottom: '10px' }}>Common Lending FAQs</h3>
              <p>Answers to frequently asked questions about loans and lending</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CALL-TO-ACTION SECTION */}
      <section style={{ padding: 'clamp(40px, 15vw, 80px) 0', background: 'linear-gradient(135deg, #0D3B66 0%, #1a5580 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'clamp(15px, 4vw, 20px)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Ready to Get Your Loan?</h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: 'clamp(20px, 5vw, 40px)', opacity: '0.95' }}>Don't wait! Apply now and get approved within 24 hours with competitive interest rates.</p>
          <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 20px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-primary" style={{ background: '#F95738', color: 'white', padding: 'clamp(10px 20px, 2vw 4vw, 15px 40px)', borderRadius: '5px', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontWeight: 'bold' }}>Apply Now</Link>
            <Link to="/contact" className="btn-primary" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: 'clamp(10px 20px, 2vw 4vw, 15px 40px)', borderRadius: '5px', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontWeight: 'bold', border: '2px solid white' }}>Talk to Expert</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;