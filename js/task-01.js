"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.querySelectorAll("ul#categories > li.item");
  const results = [];
  console.log(`Number of categories: ${categoriesList.length}`);

  categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("ul > li");
    const itemCount = categoryItems.length;
    results.push({ category: categoryName, itemCount: itemCount });

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
  });
});
