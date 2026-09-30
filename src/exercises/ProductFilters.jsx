import { useState } from "react";
import FilterControls from "./FilterControls";
import ProductList from "./ProductList";

const products = [
  { id: 1, name: "Laptop", category: "electronics", available: true },
  { id: 2, name: "Keyboard", category: "electronics", available: false },
  { id: 3, name: "Desk", category: "furniture", available: true },
  { id: 4, name: "Chair", category: "furniture", available: false },
];

function ProductFilters() {
  const [search, newSearch] = useState("");
  const [category, newCategory] = useState("all");
  const [availableOnly, newAvailable] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    const matchesAvailable =
      !availableOnly || product.available;

    return matchesSearch && matchesCategory && matchesAvailable;
  });

  return (
    <div>
      <h2>Product Filters</h2>

      <FilterControls
        search={search}
        newSearch={newSearch}
        category={category}
        newCategory={newCategory}
        availableOnly={availableOnly}
        newAvailable={newAvailable}
      />

      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductFilters;