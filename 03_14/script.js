/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

let HarryPotter1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  "Bloomsbury Publishing"
);

for (let i = 0; i < 250; i++) {
  HarryPotter1.NextPage();
}
let HarryPotter2 = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K. Rowling",
  "Bloomsbury Publishing"
);

let HarryPotter3 = new Book(
  "Harry Potter and the Prisoner of Azkaban",
  "J.K. Rowling",
  "Bloomsbury Publishing"
);

let HarryPotter4 = new Book(
  "Harry Potter and the Goblet of Fire",
  "J.K. Rowling",
  "Bloomsbury Publishing"
);
let HarryPotter5 = new Book(
  "Harry Potter and the Order of the Phoenix",
  "J.K. Rowling",
  "Bloomsbury Publishing"
);

let addHtml = () => {
  const divSection = document.createElement("div");
  divSection.setAttribute("class", "book-container");
  divSection.innerHTML = `
  <div>
  <h2>${HarryPotter1.title} - By :${HarryPotter1.author}</h2>
  <p>Current Page: ${HarryPotter1.currentPage}</p>
  </div>
  <div>
  <h2>${HarryPotter2.title} - By :${HarryPotter2.author}</h2>
  <p>Current Page: ${HarryPotter2.currentPage}</p>
  </div>
  <div>
  <h2>${HarryPotter3.title} - By :${HarryPotter3.author}</h2>
  <p>Current Page: ${HarryPotter3.currentPage}</p>
  </div>
  <div>
  <h2>${HarryPotter4.title} - By :${HarryPotter4.author}</h2>
  <p>Current Page: ${HarryPotter4.currentPage}</p>
  </div>
  <div>
  <h2>${HarryPotter5.title} - By :${HarryPotter5.author}</h2>
  <p>Current Page: ${HarryPotter5.currentPage}</p>
  </div>
  `;
  document.body.appendChild(divSection);
};

addHtml();
