import { useEffect, useState } from "react";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {products.map(product => (
            <li>
              <a href="/products/1"></a>
              <article className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                />
                <h3>{product.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
