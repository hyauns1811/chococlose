import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>All Products</h1>
          <p>Browse our complete collection of outdoor gear.</p>
        </div>
      </div>
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
