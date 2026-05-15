'use client';

import { CartProvider } from '@/context/CartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "test", // Replace with actual PayPal Client ID for production
  currency: "USD",
  intent: "capture",
};

export function Providers({ children }) {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <CartProvider>
        {children}
      </CartProvider>
    </PayPalScriptProvider>
  );
}
