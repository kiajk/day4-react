function ProductList({ filteredProducts }) {
  return (
    <div>
      <h3>Product List</h3>

      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

export default ProductList;