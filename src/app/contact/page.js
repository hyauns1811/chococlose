/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: 'Contact Us | ChocoClose',
  description: 'Get in touch with ChocoClose for any questions about our outdoor and patio products.',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(27, 61, 47, 0.8), rgba(27, 61, 47, 0.8)), url('/hero.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help with your outdoor adventures</p>
        </div>
      </div>

      <div className="container policy-page" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '20px' }}>
          
          <div>
            <h2 style={{ marginTop: 0 }}>Get In Touch</h2>
            <p>
              Have a question about a product, your order, or just need some advice on the best camping gear? 
              Our friendly customer support team is always ready to assist you.
            </p>
            
            <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginTop: '30px' }}>
              <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Company Information</h3>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Company Name:</strong> 
                <span>ChocoClose</span>
              </p>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Business Reg No.:</strong> 
                <span>75368320</span>
              </p>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Address:</strong> 
                <span>SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</span>
              </p>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Email:</strong> 
                <span><a href="mailto:support@chococlose.com" style={{ color: 'var(--secondary-color)' }}>support@chococlose.com</a></span>
              </p>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Phone Support:</strong> 
                <span>0387417092</span>
              </p>
              <p style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start' }}>
                <strong style={{ minWidth: '150px' }}>Working Hours:</strong> 
                <span>Mon – Sat: 9AM-5PM EST</span>
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ marginTop: 0 }}>Send Us a Message</h2>
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Your Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontFamily: 'inherit' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontFamily: 'inherit' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Subject</label>
                <input type="text" placeholder="How can we help?" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontFamily: 'inherit' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Message</label>
                <textarea rows="6" placeholder="Write your message here..." style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }} required></textarea>
              </div>
              <button type="button" className="btn" style={{ marginTop: '10px' }} onClick={(e) => { e.preventDefault(); alert("Thank you for your message! We will get back to you shortly."); }}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
