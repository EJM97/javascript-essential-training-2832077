class Phone {
  constructor(brand, moodel, color, camera) {
    this.brand = brand;
    this.moodel = moodel;
    this.color = color;
    this.camera = camera;
    this.updated = false;
  }
  updateOS() {
    if (this.updated) {
      console.log("The phone is already updated");
    } else {
      this.updated = true;
    }
  }
  printInfo() {
    console.log(
      `The phone brand is ${this.brand}, color is ${this.color}, camera is ${this.camera} and the price is ${this.price}`
    );
  }
}
export default Phone;
