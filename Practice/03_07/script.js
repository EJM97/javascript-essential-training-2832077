/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
let electronics = {
  hpLAptop: {
    brand: "HP",
    model: "Laptop",
    color: "black",
    price: "1000",
    weight: "2.5kg",
    size: "15.6inch",
    display: "13.3inch",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    battery: "3.7W",
    warranty: "1 year",
    gpu: "Intel HD Graphics",
  },
  motoPhone: {
    brand: "Moto",
    model: "Phone",
    color: "black",
    price: "1000",
    weight: "0.5kg",
    size: "6.5inch",
    display: "5.5inch",

    processor: "Snapdragon 855",
    ram: "4GB",
    storage: "32GB",
    battery: "3.7W",
    warranty: "1 year",
    gpu: "Adreno 616",
  },
};

console.log("RAM =", electronics.hpLAptop.ram);
console.log("Storage =", electronics.hpLAptop.storage);
console.log("Battery =", electronics.hpLAptop.battery);
console.log("Warranty =", electronics.hpLAptop.warranty);

console.log("RAM =", electronics.motoPhone.ram);
console.log("Storage =", electronics.motoPhone.storage);
console.log("Battery =", electronics.motoPhone.battery);
console.log("Warranty =", electronics.motoPhone.warranty);

let fan = {
  brand: "LG",
  model: "Fan",
  color: "white",
  price: "1000",
  weight: "0.5kg",
  size: "6.5inch",
};

let add_element = () => {
  const template = document.createElement("div");
  template.innerHTML = `
  <div>
    <h1>${electronics.hpLAptop.brand} ${electronics.hpLAptop.model}</h1>
    <h1>${fan.brand} ${fan.model}</h1>
  </div>`;

  document.body.appendChild(template);
};
add_element();
