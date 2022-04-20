import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const categoryList = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
      key={category}
      className={className}
      onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    )
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryList}
    </div>
  );
}

export default CategoryFilter;



/*
Pass the list of categories to this component from App
update this component to display <button> elements for each category (again, make sure to use a key prop).
*/