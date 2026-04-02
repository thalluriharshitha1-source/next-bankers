import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const loanData = {
  'personal-loan': {
    title: 'Personal Loan Details',
    info: 'Personal loans at Next Bankers are designed to provide quick financial relief for your personal milestones, medical emergencies, or travel plans.',
    features: ['No collateral or security required', 'Interest rates starting from 10.50%*', 'Quick disbursal within 24 hours', 'Flexible repayment tenure up to 60 months'],
    eligibility: 'Salaried individuals with a minimum monthly net income of ₹25,000 and age between 21 to 60 years.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80'
  },
  'business-loan': {
    title: 'Business Loan Details',
    info: 'Empower your business growth with our flexible capital solutions tailored for SMEs and large enterprises.',
    features: ['Collateral-free loans up to ₹50 Lakhs', 'Special interest rates for women entrepreneurs', 'Quick documentation and fast approval', 'Funds for expansion, machinery, or working capital'],
    eligibility: 'Self-employed professionals or business owners with at least 3 years of business vintage.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  'home-loan': {
    title: 'Home Loan Details',
    info: 'Bring home your dreams with the lowest interest rates and a smooth, transparent application process.',
    features: ['Interest rates starting as low as 8.40%*', 'Tenure options up to 30 years', 'Balance transfer facility available', 'Home improvement and construction loans included'],
    eligibility: 'Available for both salaried and self-employed individuals with a stable credit score of 700+.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  'car-loan': {
    title: 'Car Loan Details',
    info: 'Get on the road faster with our quick car financing options for new and pre-owned vehicles.',
    features: ['Up to 100% on-road funding*', 'Fixed and floating interest rate options', 'No hidden charges or processing fees', 'Quick documentation and doorstep service'],
    eligibility: 'Stable income profile with a minimum of 1 year in current employment/business.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
  },
  'education-loan': {
    title: 'Education Loan Details',
    info: 'Invest in your future without financial stress. We cover tuition fees, travel, and living expenses.',
    features: ['Covers 100% of study-related expenses', 'Repayment holiday (moratorium) during study period', 'Tax benefits under Section 80E', 'Funding for both India and overseas education'],
    eligibility: 'Students with confirmed admission in recognized universities in India or abroad.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  'mortgage-loan': {
    title: 'Mortgage Loan Details',
    info: 'Unlock the hidden value of your property to meet your major financial requirements or business needs.',
    features: ['High-value loans against residential or commercial property', 'Competitive interest rates with lower EMIs', 'Longer tenure for easy repayment', 'Funds can be used for any personal or business purpose'],
    eligibility: 'Property owners with clear legal titles and a stable income source.',
    image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=800&q=80'
  }
};

const LoanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loanData[id];

  // This ensures the page scrolls to top when a new loan is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!loan) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Loan Detail Not Found</h2>
        <Link to="/services" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="animate show">
      {/* Header Banner */}
      <section style={{ background: '#0D3B66', padding: '80px 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{loan.title}</h1>
          <Link to="/services" style={{ color: '#F95738', textDecoration: 'none', fontWeight: '600' }}>← Back to All Services</Link>
        </div>
      </section>

      {/* Detail Section */}
      <section className="container" style={{ padding: '80px 0', display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: '1.5', maxWidth: '800px', minWidth: '300px' }}>
          <h2 style={{ color: '#0D3B66', marginBottom: '25px', fontSize: '2rem' }}>Overview</h2>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '35px', color: '#444' }}>
            {loan.info}
          </p>

          <h3 style={{ color: '#F95738', marginBottom: '20px', fontSize: '1.5rem' }}>Key Features</h3>
          <ul style={{ marginBottom: '40px', paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2' }}>
            {loan.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{feature}</li>
            ))}
          </ul>

          <div style={{
            padding: '30px',
            background: '#f8f9fc',
            borderRadius: '15px',
            borderLeft: '6px solid #F95738',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            marginBottom: '40px'
          }}>
            <h4 style={{ color: '#0D3B66', marginBottom: '10px', fontSize: '1.2rem' }}>Eligibility Criteria</h4>
            <p style={{ lineHeight: '1.6' }}>{loan.eligibility}</p>
          </div>

          <button
            onClick={() => navigate('/apply', { state: { selectedLoan: loan.title.replace(' Details', '') } })}
            className="btn-primary"
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '18px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              width: '100%',
              cursor: 'pointer',
              border: 'none',
              marginTop: '20px'
            }}
          >
            Apply for this Loan
          </button>
        </div>

        {loan.image && (
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'flex-end', position: 'sticky', top: '100px' }}>
            <img
              src={loan.image}
              alt={loan.title}
              style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '15px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', objectFit: 'cover' }}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default LoanDetail;