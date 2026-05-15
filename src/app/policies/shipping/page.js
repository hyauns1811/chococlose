export default function ShippingPolicy() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Shipping Policy</h1>
        </div>
      </div>
      <div className="container policy-page">
        <h2>Order Processing</h2>
        <p>
          All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
        </p>

        <h2>Domestic Shipping Rates and Estimates</h2>
        <p>
          <strong>Flat Rate Shipping:</strong> We offer a flat rate of <strong>$9.99</strong> for all standard shipping orders within the contiguous United States.
        </p>
        <ul>
          <li><strong>Handling Time:</strong> 1 - 2 business days</li>
          <li><strong>Transit Time:</strong> 3 - 7 business days</li>
          <li><strong>Total Delivery Time:</strong> 4 - 9 business days</li>
        </ul>

        <h2>International Shipping</h2>
        <p>At this time, we do not ship outside of the United States.</p>

        <h2>How do I check the status of my order?</h2>
        <p>
          When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
        </p>

        <h2>PO Boxes and APO/FPO Addresses</h2>
        <p>
          We do not ship to PO Boxes or APO/FPO addresses due to the size and weight of our outdoor equipment. Please provide a physical address for delivery.
        </p>
      </div>
    </>
  );
}
