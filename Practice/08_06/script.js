/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function main(para = "Empty") {
  let article = document.createElement("article");
  article.classList.add("article");
  article.innerHTML = `
      <h2>This is a function. With the parameter being ${para}.</h2>
    `;
  document.body.appendChild(article);
  subFunction("parameter");
}
function subFunction(para = "Empty") {
  let div = document.createElement("div");
  div.innerHTML = `
      <h2>This is a sub function. With the parameter being ${para}.</h2>
    `;
  document.querySelector(".article").appendChild(div);
}

const arrowFunction = (para = "Empty") => {
  let article = document.createElement("article");
  article.classList.add("article");
  article.innerHTML = `
      <h2>This is an arrow function. With the parameter being ${para}.</h2>
    `;
  document.body.appendChild(article);
  subFunctionArrow("parameter");
};
const subFunctionArrow = (para = "Empty") => {
  let div = document.createElement("div");
  div.innerHTML = `
      <h2>This is a sub arrow function. With the parameter being ${para}.</h2>
    `;
  document.querySelector(".article").appendChild(div);
};
main("parameter");
arrowFunction("parameter2");

// self invoking test function
(function () {
  console.log("This is a test function");
})();
