'use client';

import { useCart } from '@/context/CartContext';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States' // Fixed to USA
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const { email, firstName, lastName, address, city, state, zipCode } = shippingInfo;
    if (email && firstName && lastName && address && city && state && zipCode) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [shippingInfo]);

  if (!mounted) return null;

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  if (orderComplete) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--success-color)', marginBottom: '20px' }}>Order Placed Successfully!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Thank you for shopping with Nature's Peak. Your outdoor adventure awaits.</p>
        <button className="btn" onClick={() => router.push('/')}>Return to Home</button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <button className="btn mt-4" onClick={() => router.push('/shop')}>Back to Shop</button>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    marginBottom: '15px',
    fontFamily: 'inherit',
    fontSize: '1rem'
  };

  return (
    <>
      <div className="page-header" style={{ padding: '40px 0', marginBottom: '40px' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Checkout</h1>
        </div>
      </div>

      <div className="container checkout-page">
        <div className="cart-page">
          <div className="checkout-details" style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            
            <h2 style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>Shipping Information</h2>
            <form style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email Address</label>
                <input type="email" name="email" value={shippingInfo.email} onChange={handleInputChange} style={inputStyle} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>First Name</label>
                  <input type="text" name="firstName" value={shippingInfo.firstName} onChange={handleInputChange} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Last Name</label>
                  <input type="text" name="lastName" value={shippingInfo.lastName} onChange={handleInputChange} style={inputStyle} required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Street Address</label>
                <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} style={inputStyle} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>City</label>
                  <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>State</label>
                  <input type="text" name="state" value={shippingInfo.state} onChange={handleInputChange} style={inputStyle} required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Zip Code</label>
                  <input type="text" name="zipCode" value={shippingInfo.zipCode} onChange={handleInputChange} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Country</label>
                  <input type="text" name="country" value={shippingInfo.country} disabled style={{ ...inputStyle, backgroundColor: '#f5f5f5', color: '#666', cursor: 'not-allowed' }} />
                  <small style={{ color: 'var(--danger-color)', display: 'block', marginTop: '-10px', marginBottom: '15px' }}>* We currently only ship within the United States.</small>
                </div>
              </div>
            </form>

            <h2 style={{ marginBottom: '30px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>Payment Information</h2>
            
            {!formValid ? (
              <div style={{ padding: '20px', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '4px', border: '1px solid #ffeeba' }}>
                Please fill out all shipping information above to proceed with payment.
              </div>
            ) : (
              <>
                <p style={{ marginBottom: '20px', color: '#555' }}>
                  We exclusively use PayPal to ensure your transaction is 100% secure. You can pay with your PayPal balance, credit card, or debit card.
                </p>
                <div style={{ zIndex: 1, position: 'relative' }}>
                  <PayPalButtons 
                    style={{ layout: "vertical", color: "gold", shape: "rect", label: "checkout" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: total.toFixed(2),
                            },
                            shipping: {
                              name: {
                                full_name: `${shippingInfo.firstName} ${shippingInfo.lastName}`
                              },
                              address: {
                                address_line_1: shippingInfo.address,
                                admin_area_2: shippingInfo.city,
                                admin_area_1: shippingInfo.state,
                                postal_code: shippingInfo.zipCode,
                                country_code: "US"
                              }
                            }
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        // Handle successful transaction
                        clearCart();
                        setOrderComplete(true);
                      });
                    }}
                    onError={(err) => {
                      console.error("PayPal Error:", err);
                      alert("There was an error processing your payment. Please try again.");
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div style={{ marginBottom: '20px' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem' }}>
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total" style={{ marginTop: '15px' }}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
