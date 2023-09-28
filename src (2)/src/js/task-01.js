"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Liczy wszystkie elementy <li> wewnątrz ul#categories
  const categoriesList = document.querySelectorAll("ul#categories > li.item");

  // Pusta tablica do przechowywania wyników
  const results = [];

  // Wyświetla liczbę kategorii w konsoli
  console.log(`Number of categories: ${categoriesList.length}`);

  // Przejdź przez każdy element li.item.
  categoriesList.forEach((category) => {
    // Znajdź nagłówek <h2> wewnątrz bieżącej kategorii.
    const categoryName = category.querySelector("h2").textContent;

    // Znajdź wszystkie elementy <li> wewnątrz bieżącej kategorii.
    const categoryItems = category.querySelectorAll("ul > li");

    // Zapisz liczbę elementów w danej kategorii.
    const itemCount = categoryItems.length;

    // Dodaj wynik do tablicy.
    results.push({ category: categoryName, itemCount: itemCount });

    // Wyświetl dane w konsoli.
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
  });
});
