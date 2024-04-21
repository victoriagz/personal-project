import "../styles/Styles.scss";
function MensClothing({ products }) {
  return (
    <div className="products-container">
      <h2 className="products-title">Men's Clothing</h2>
      <div className="products-list">
        {products.map((product) => {
          if (product.category === "men's clothing") {
            return (
              <div key={product.id} className="product-item">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product-details">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default MensClothing;
