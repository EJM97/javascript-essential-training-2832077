/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./backpack.js";
import Phone from "./phone.js";

let myBackpack = new Backpack("my backpack", 20, "black", 5, 20, 21, false);

let anotherBackpack = new Backpack(
  "another backpack",
  10,
  "red",
  5,
  10,
  11,
  false
);

let myPhone = new Phone("Apple", "XS", "silver", 16);
let addHtml = () => {
  const template = document.createElement("div");
  template.innerHTML = `
  <h2>${myBackpack.name}</h2>
        <p>
            <strong>Color:</strong> ${myBackpack.color}<br>
            <strong>Capacity:</strong> ${myBackpack.volume}L<br>
            <strong>Left Strap:</strong> ${myBackpack.strapLength.left}<br>
            <strong>Right strap:</strong> ${myBackpack.strapLength.right}<br>
            <strong>Is lid open?</strong> ${myBackpack.lidOpen}<br>
        </p>
    <h2>${anotherBackpack.name}</h2>
        <p>
        <strong>Color:</strong> ${anotherBackpack.color}<br>
        <strong>Capacity:</strong> ${anotherBackpack.volume}L<br>
        <strong>Left Strap:</strong> ${anotherBackpack.strapLength.left}<br>
        <strong>Right strap:</strong> ${anotherBackpack.strapLength.right}<br>
        <strong>Is lid open?</strong> ${anotherBackpack.lidOpen}<br>
        </p>
    <h2>${myPhone.brand}-${myPhone.moodel}</h2>
        <p>
        <strong>Color:</strong> ${myPhone.color}<br>
        <strong>Camera:</strong> ${myPhone.camera}MP<br>
        <img width="200rem" src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
    `;
  document.body.appendChild(template);
};

addHtml();
