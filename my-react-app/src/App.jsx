import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';
import LoanDetail from './pages/loanDetail';
import LoyaltyBenefits from './pages/LoyaltyBenefits';
import BorrowerBenefits from './pages/borrowerbenefits';

// shared components
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); });
      });
      document.querySelectorAll(".animate").forEach(el => observer.observe(el));
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<LoanDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/loyalty-benefits" element={<LoyaltyBenefits />} />
        <Route path="/borrower-benefits" element={<BorrowerBenefits />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;