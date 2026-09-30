    function FilterControls({
    search,
    newSearch,
    category,
    newCategory,
    availableOnly,
     newAvailable,
    }) {
    return (
        <div>
        <h3>Filter Controls</h3>
        <input 
        type="text"
        placeholder="search products"
        value={search}
        onChange={(event) => newSearch(event.target.value)} />
        <select
  value={category}
  onChange={(event) => newCategory(event.target.value)}
    >
  <option value="all">All</option>
  <option value="electronics">Electronics</option>
  <option value="furniture">Furniture</option>
    </select>
    <label>
        <input type="checkbox"
        checked={availableOnly}
        onChange={(event) => newAvailable(event.target.checked)} />
        Available Only
    </label>
        </div>
    );
    }

    export default FilterControls;