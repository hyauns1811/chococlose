'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/recycled.png" alt="Nature's Peak Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/category/tents">Tents</Link>
          <Link href="/category/grills">Grills</Link>
          <Link href="/category/mowers">Mowers</Link>
          <Link href="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
