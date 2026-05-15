import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container">
      <div className="product-detail">
        <div>
          <img src={product.image} alt={product.name} className="product-detail-img" />
        </div>
        <div className="product-detail-info">
          <Link href={`/category/${product.category}`} className="product-category" style={{ display: 'inline-block', marginBottom: '15px' }}>
            &larr; Back to {product.category}
          </Link>
          <h1>{product.name}</h1>
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          <p className="product-detail-desc">{product.description}</p>
          
          <h3 style={{ marginBottom: '15px', fontFamily: 'Outfit' }}>Key Features</h3>
          <ul className="features-list">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--light-gray)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#555', fontSize: '0.9rem' }}>
              <span><strong style={{ color: 'var(--primary-color)' }}>Shipping:</strong> $9.99 Standard</span>
              <span><strong style={{ color: 'var(--primary-color)' }}>Delivery:</strong> 3-7 Days</span>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
