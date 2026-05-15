'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div className="quantity-control" style={{ width: 'fit-content', padding: '5px' }}>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span style={{ minWidth: '40px', textAlign: 'center' }}>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button className="btn" onClick={handleAddToCart} style={{ flexGrow: 1 }}>
        Add to Cart
      </button>
    </div>
  );
}
