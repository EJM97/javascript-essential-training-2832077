/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document
  .querySelectorAll(".lid-toggle")
  .forEach((i) => (i.style.backgroundColor = "skyBlue"));
document
  .querySelectorAll(".lid-toggle")
  .forEach((i) => (i.style.borderColor = "RebeccaPurple"));
document
  .querySelectorAll(".lid-toggle")
  .forEach((i) => (i.style.color = "MidnightBlue"));

document
  .querySelectorAll("form button")
  .forEach((i) => i.classList.add("button"));

document
  .querySelectorAll("form input")
  .forEach((i) => i.classList.add("inputNumber"));

function toggleBackpackLid(backpack) {
  let state = document.querySelector(`#pack0${backpack} .backpack__lid span`)
    .innerHTML;
  if (state === "open") {
    document.querySelector(`#pack0${backpack} .backpack__lid span`).innerHTML =
      "closed";
    document;
    document.querySelector(`#pack0${backpack} button.lid-toggle`).innerHTML =
      "Open Lid";
    if (backpack == "1") {
      document
        .querySelector(`#pack01 img`)
        .setAttribute("src", "../../assets/images/everyday.svg");
    }
  } else {
    document.querySelector(`#pack0${backpack} .backpack__lid span`).innerHTML =
      "open";
    document.querySelector(`#pack0${backpack} button.lid-toggle`).innerHTML =
      "Close Lid";
    if (backpack == "1") {
      document
        .querySelector(`#pack01 img`)
        .setAttribute("src", "../../assets/images/everyday-open.svg");
    }
  }
}
function updateStrap(backpack, side) {
  let strapLength = document.querySelector(
    `#pack0${backpack} input[name=${side}Length]`
  ).value;
  document.querySelector(
    `#pack0${backpack} li[data-side=${side}] span`
  ).innerHTML = `${strapLength} inches`;
}
document
  .querySelector("#pack01 button.lid-toggle")
  .setAttribute("onClick", "toggleBackpackLid(1)");
document
  .querySelector("#pack02 button.lid-toggle")
  .setAttribute("onClick", "toggleBackpackLid(2)");

document
  .querySelector("#pack01 .leftlength button")
  .setAttribute("onClick", "updateStrap(1, 'left')");
document
  .querySelector("#pack01 .rightlength button")
  .setAttribute("onClick", "updateStrap(1, 'right')");
document
  .querySelector("#pack02 .leftlength button")
  .setAttribute("onClick", "updateStrap(2, 'left')");
document
  .querySelector("#pack02 .rightlength button")
  .setAttribute("onClick", "updateStrap(2, 'right')");

document
  .querySelector("#pack01 .leftlength button")
  .setAttribute("type", "button");
document
  .querySelector("#pack01 .rightlength button")
  .setAttribute("type", "button");
document
  .querySelector("#pack02 .leftlength button")
  .setAttribute("type", "button");
document
  .querySelector("#pack02 .rightlength button")
  .setAttribute("type", "button");
