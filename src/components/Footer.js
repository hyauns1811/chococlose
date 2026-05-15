import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img src="/recycled.png" alt="Nature's Peak Logo" style={{ height: '40px', width: 'auto' }} />
            </h4>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              Premium outdoor and patio equipment for your ultimate adventure. Quality tents, grills, and mowers.
            </p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/category/tents">Family Tents</Link></li>
              <li><Link href="/category/grills">BBQ Grills</Link></li>
              <li><Link href="/category/mowers">Push Mowers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company & Policies</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/policies/shipping">Shipping Policy</Link></li>
              <li><Link href="/policies/return-refund">Return & Refund</Link></li>
              <li><Link href="/policies/payment">Payment Policy</Link></li>
              <li><Link href="/policies/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/policies/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul style={{ color: '#ccc' }}>
              <li>Email: support@chococlose.com</li>
              <li>Phone Support: 0387417092</li>
              <li>Mon – Sat: 9AM-5PM EST</li>
              <li>Business Registration No.: 75368320</li>
              <li style={{ lineHeight: '1.5', marginTop: '8px' }}>Address: SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nature's Peak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
