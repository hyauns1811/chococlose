/* eslint-disable react/no-unescaped-entities */
export default function PaymentPolicy() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Payment Policy</h1>
        </div>
      </div>
      <div className="container policy-page">
        <h2>Accepted Payment Methods</h2>
        <p>
          At Nature's Peak, we are committed to providing a secure and seamless checkout experience. We exclusively accept payments through <strong>PayPal</strong>.
        </p>
        <p>
          By using PayPal, you can pay using:
        </p>
        <ul>
          <li>Your PayPal Balance</li>
          <li>Credit Cards (Visa, MasterCard, Discover, American Express) linked to your PayPal account</li>
          <li>Debit Cards linked to your PayPal account</li>
          <li>Bank Accounts linked to your PayPal account</li>
        </ul>

        <h2>Payment Processing</h2>
        <p>
          When you place an order, your payment will be processed immediately upon confirmation. All transactions are securely handled by PayPal, and we do not store any of your sensitive credit card information on our servers.
        </p>

        <h2>Currency</h2>
        <p>
          All prices listed on our website are in US Dollars (USD). Payments will be charged in USD.
        </p>

        <h2>Security</h2>
        <p>
          Your security is our priority. PayPal uses advanced encryption and fraud prevention tools to keep your financial information safe. You are fully protected against unauthorized payments sent from your account.
        </p>
      </div>
    </>
  );
}
