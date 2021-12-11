/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let stuff = [1, 2, 3, "TV", "Fan", "Phone", "Cupboard", "Door"];
console.log(stuff);
stuff.push("The End");
console.log("Pushed the end", stuff);
stuff.shift();
console.log("Shift(Remove item from beginning)", stuff);
stuff.unshift("A new beginning", "The one after beginning");
console.log("Unshift(Add 2 items to the start)", stuff);

// Remove the last item
stuff.pop();
console.log("Removed the last item ", stuff);

// Add the last item as the first item on the array
function lastToFirst(array) {
  let lastItem = array[array.length - 1];
  array.pop();
  array.unshift(lastItem);
  return array;
}
stuff = lastToFirst(stuff);

console.log("Add the last item as the first item on the array ", stuff);

// Sort the items by alphabetical order

stuff.sort();
console.log("Sorted ", stuff);

//  * - Use the find() method to find a specific item in the array
console.log(
  "Find the phone ",
  stuff.find((element) => element === "Phone")
);

// Remove the item you found using the find method from the array.
function removeElementFromArray(array, anElement) {
  let isFound = array.find((element) => element === anElement);
  if (isFound) {
    let index = array.indexOf(anElement);
    for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.pop();
  }
  return array;
}
stuff = removeElementFromArray(stuff, "Phone");
console.log(
  "Removed the item you found (Phone) using the find method from the array.",
  stuff
);
