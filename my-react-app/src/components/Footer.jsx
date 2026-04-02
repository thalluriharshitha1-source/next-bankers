// ...existing imports/structure...

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-content">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Next Bankers is committed to providing financial solutions that empower our customers to achieve their goals.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/apply">Apply Now</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Phone: +91 63042 44117</p>
          <p>Email: <a href="mailto:info@nextbankers.co.in">info@nextbankers.co.in</a></p>
          <p>Address: 123 Finance Ave, Mumbai, India</p>
        </div>
        <div className="footer-column social">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Next Bankers. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;