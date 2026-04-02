import { Link } from 'react-router-dom';

const Services = () => {
  const loans = [
    {
      id: 'personal-loan', title: 'Personal Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ), desc: 'Immediate funds for travel, wedding, or medical needs.'
    },
    {
      id: 'business-loan', title: 'Business Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ), desc: 'Fuel your business expansion with term loans.'
    },
    {
      id: 'home-loan', title: 'Home Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <path d="M3 12l9-9 9 9"></path>
          <path d="M9 21V9h6v12"></path>
        </svg>
      ), desc: 'Lowest interest rates for buying or renovating.'
    },
    {
      id: 'car-loan', title: 'Car Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <circle cx="6" cy="18" r="2"></circle>
          <circle cx="18" cy="18" r="2"></circle>
          <path d="M3 12h18v6H3z"></path>
          <path d="M5 12V6h14v6"></path>
        </svg>
      ), desc: 'Get up to 100% funding for your vehicle.'
    },
    {
      id: 'education-loan', title: 'Education Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M12 12v5"></path>
        </svg>
      ), desc: 'Finance higher education in India or abroad.'
    },
    {
      id: 'mortgage-loan', title: 'Mortgage Loan', icon: (
        <svg style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2">
          <path d="M3 21v-13l9-4 9 4v13"></path>
          <path d="M9 21v-10h6v10"></path>
          <path d="M9 7h6"></path>
        </svg>
      ), desc: 'Funding against residential or commercial property.'
    },
  ];

  return (
    <div className="animate show">
      {/* HERO SECTION */}
      <section className="hero" style={{
        padding: '200px 20px',
        color: '#ffff',
        background: 'url("images/bank_loan_approval.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%'
      }}>
        <div className="container">
          <h1>Our Loan Services</h1>
        </div>
      </section>

      <section className="container grid">
        <div className="grid">
          {loans.map((loan) => (
            <Link to={`/services/${loan.id}`} key={loan.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ cursor: 'pointer' }}>
                <div className="icon-circle">{loan.icon}</div>
                <h3>{loan.title}</h3>
                <p>{loan.desc}</p>
                <span style={{ color: '#F95738', fontWeight: 'bold', fontSize: '0.9rem' }}>View More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;