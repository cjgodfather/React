import React from "react";
import Category from "../category/category";

const CategoryList = ({ category, categoryClicked }) => {
  return category.map(el => (
    <Category
      key={el.title}
      image={el.image}
      name={el.title}
      onCatClicked={() => categoryClicked(el.title)}
    />
  ));
};

export default CategoryList;
