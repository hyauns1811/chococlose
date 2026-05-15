import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="btn w-full" style={{ marginTop: '10px' }}>View Details</button>
      </div>
    </Link>
  );
}
