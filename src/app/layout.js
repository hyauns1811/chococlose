import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: "Nature's Peak | Premium Outdoor & Patio Equipment",
  description: "Shop high-quality family camping tents, outdoor BBQ grills, and manual push lawnmowers. Premium gear for your next adventure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
