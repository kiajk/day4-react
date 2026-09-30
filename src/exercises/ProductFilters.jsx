import { useState } from "react";
import FilterControls from "./FilterControls";

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
    />

      <select
        value={category}
        onChange={(event) => newCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={availableOnly}
          onChange={(event) => newAvailable(event.target.checked)}
        />
        Available Only
      </label>

      <div>
        {filteredProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductFilters;