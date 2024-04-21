const getProductsAPI = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      const parsedproducts = data.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          description: product.description,
          image: product.image,
        };
      });
      return parsedproducts;
    });
};

export default getProductsAPI;
