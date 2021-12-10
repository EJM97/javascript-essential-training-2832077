/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
function toggleBackpackLid(backpack) {
  let state = document.querySelector(`#pack0${backpack} .backpack__lid span`)
    .innerHTML;
  if (state === "open") {
    document.querySelector(`#pack0${backpack} .backpack__lid span`).innerHTML =
      "closed";
    document;
    document.querySelector(`#pack0${backpack} button.lid-toggle`).innerHTML =
      "Open Lid";
  } else {
    document.querySelector(`#pack0${backpack} .backpack__lid span`).innerHTML =
      "open";
    document.querySelector(`#pack0${backpack} button.lid-toggle`).innerHTML =
      "Close Lid";
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
