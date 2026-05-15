export const metadata = {
  title: 'About Us | ChocoClose',
  description: 'Learn more about ChocoClose and our passion for providing premium outdoor, camping, and patio equipment.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(27, 61, 47, 0.8), rgba(27, 61, 47, 0.8)), url('/hero.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1>About ChocoClose</h1>
          <p>Your Trusted Partner for Outdoor & Patio Adventures</p>
        </div>
      </div>

      <div className="container policy-page" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <h2 style={{ marginTop: 0 }}>Our Story</h2>
        <p>
          Welcome to <strong>ChocoClose</strong>! We are passionate outdoor enthusiasts dedicated to providing high-quality outdoor and patio equipment. Whether you are planning a weekend camping trip with your family or upgrading your backyard with a new BBQ grill, we are here to equip you with the best gear on the market.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and enable everyone to experience the great outdoors comfortably and safely. We believe that spending time in nature or simply enjoying your backyard shouldn't be a luxury, which is why we meticulously source durable, reliable, and affordable products for our customers.
        </p>

        <h2>Why Choose Us?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Premium Quality:</strong> Every tent, grill, and mower in our store has been tested for durability and performance.</li>
          <li><strong>Secure Shopping:</strong> We prioritize your security by offering exclusively 100% secure PayPal checkout.</li>
          <li><strong>Fast & Reliable Shipping:</strong> We understand you want your gear quickly. That's why we process orders in 1-2 days with a standard $9.99 shipping rate.</li>
          <li><strong>Dedicated Support:</strong> Our customer service team is always ready to assist you with any questions or concerns.</li>
        </ul>

        <h2>Company Information</h2>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <p style={{ margin: '5px 0' }}><strong>Company Name:</strong> ChocoClose</p>
          <p style={{ margin: '5px 0' }}><strong>Business Registration No.:</strong> 75368320</p>
          <p style={{ margin: '5px 0' }}><strong>Address:</strong> SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</p>
          <p style={{ margin: '5px 0' }}><strong>Email:</strong> support@chococlose.com</p>
          <p style={{ margin: '5px 0' }}><strong>Phone Support:</strong> 0387417092</p>
          <p style={{ margin: '5px 0' }}><strong>Working Hours:</strong> Monday – Saturday: 9AM - 5PM EST</p>
        </div>
      </div>
    </>
  );
}
