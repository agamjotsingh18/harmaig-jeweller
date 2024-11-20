// src/pages/EarringsCategories.js
import React from "react";
import CategoryList from "./CategoryList";

const EarringsCategories = () => {
  const filteredCategories = ["Tops", "Jhumkas", "Drops&Hoops"];
  return <CategoryList filteredCategories={filteredCategories} />;
};

export default EarringsCategories;
