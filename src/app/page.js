import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Conquer the Outdoors</h1>
          <p>Discover our premium selection of family tents, outdoor grills, and eco-friendly mowers designed for your perfect backyard and beyond.</p>
          <Link href="/shop" className="btn btn-secondary">Shop Now</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="grid">
          {categories.map(category => (
            <Link href={`/category/${category.slug}`} key={category.id} className="product-card">
              <img src={category.image} alt={category.name} className="product-img" />
              <div className="product-info" style={{ textAlign: 'center' }}>
                <h3 className="product-title">{category.name}</h3>
                <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>Explore Collection &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/shop" className="btn">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="section container text-center">
        <h2 className="section-title">Why Choose Nature's Peak?</h2>
        <div className="grid">
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Premium Quality</h3>
            <p style={{ color: '#555' }}>We source only the highest-grade materials to ensure durability and reliability in any weather condition.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Fast Shipping</h3>
            <p style={{ color: '#555' }}>Standard $9.99 shipping with 1-2 days handling and 3-7 days delivery directly to your door.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Secure Payments</h3>
            <p style={{ color: '#555' }}>Shop with confidence using our 100% secure PayPal checkout system.</p>
          </div>
        </div>
      </section>
    </>
  );
}
