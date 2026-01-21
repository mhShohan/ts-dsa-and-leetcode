// Abstract class : A class that cannot be instantiated directly and is meant to be subclassed.
// It can contain both abstract methods (without implementation) and concrete methods (with implementation).

// Abstract class
abstract class Shape {
  constructor(public color: string) {}

  // Abstract method - must be implemented by derived classes
  abstract calculateArea(): number;

  // Concrete method - has implementation
  displayInfo(): void {
    console.log(`This is a ${this.color} shape`);
  }
}

// Concrete classes
class Circle extends Shape {
  constructor(
    color: string,
    public radius: number,
  ) {
    super(color);
  }

  // MUST implement abstract method
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  // Can override concrete methods
  displayInfo(): void {
    super.displayInfo();
    console.log(`Radius: ${this.radius}, Area: ${this.calculateArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage
const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 4, 6);

circle.displayInfo(); // This is a red shape, Radius: 5, Area: 78.539...
console.log(circle.calculateArea()); // 78.53981633974483

rectangle.displayInfo(); // This is a blue shape
console.log(rectangle.calculateArea()); // 24

// ❌ Cannot instantiate abstract class
// const shape = new Shape("green"); // Error: Cannot create an instance of an abstract class
