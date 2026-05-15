'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="page-header" style={{ padding: '40px 0', marginBottom: '40px' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Your Cart</h1>
        </div>
      </div>
      
      <div className="container" style={{ paddingBottom: '80px' }}>
        {cartItems.length === 0 ? (
          <div className="text-center" style={{ padding: '60px 0' }}>
            <h2 style={{ marginBottom: '20px' }}>Your cart is empty</h2>
            <Link href="/shop" className="btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-page">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <Link href={`/product/${item.id}`} className="cart-item-title">{item.name}</Link>
                    <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="btn w-full text-center" style={{ display: 'block' }}>
                Proceed to Checkout
              </Link>
              <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.85rem', color: '#666' }}>
                Standard shipping takes 3-7 delivery days after 1-2 days handling.
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
