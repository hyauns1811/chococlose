import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === slug);

  return (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(27, 61, 47, 0.8), rgba(27, 61, 47, 0.8)), url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1>{category.name}</h1>
          <p>Explore our premium {category.name.toLowerCase()}.</p>
        </div>
      </div>
      <section className="section container" style={{ paddingTop: 0 }}>
        {categoryProducts.length > 0 ? (
          <div className="grid">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </section>
    </>
  );
}
