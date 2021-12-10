/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */
"use strict";
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  paintBag: function (color) {
    this.color = color;
  },
  changeName: function (name) {
    this.name = name;
  },
  changeVolume: function (volume) {
    this.volume = volume;
  },
  changePocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  },
};

let add_element = () => {
  const template = document.createElement("div");
  template.innerHTML = `
  <div>
    <h3>${backpack.name}</h3>
    <p>Volume: ${backpack.volume}</p>
    <p>Color: ${backpack.color}</p>
    <p>Number of pockets: ${backpack.pocketNum}</p>
    <p>Strap length: ${backpack.strapLength.left}cm left, ${backpack.strapLength.right}cm right</p>
    <p>Lid status: ${backpack.lidOpen}</p>
    </div>`;

  document.body.appendChild(template);
};
add_element();
backpack.paintBag("red");
backpack.newStrapLength(20, 20);
backpack.toggleLid(true);
backpack.changeName("Addidas Backpack");
backpack.changeVolume(40);
backpack.changePocketNum(200);

add_element();
