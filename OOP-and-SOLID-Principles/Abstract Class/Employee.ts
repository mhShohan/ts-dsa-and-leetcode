abstract class Employee {
  constructor(
    protected id: number,
    protected name: string,
    protected baseSalary: number = 50000,
  ) {}

  // Abstract method - each employee type calculates differently
  abstract calculateBonus(): number;

  // Abstract property
  abstract role: string;

  // Concrete method
  getDetails(): string {
    return `${this.name} (ID: ${this.id}) - ${this.role}`;
  }

  // Concrete method with default implementation
  getAnnualSalary(): number {
    return this.baseSalary + this.calculateBonus();
  }
}

class Developer extends Employee {
  role: string = 'Software Developer';
  private performanceRating: number;

  constructor(id: number, name: string, performanceRating: number) {
    super(id, name, 60000); // Developers have higher base
    this.performanceRating = performanceRating;
  }

  calculateBonus(): number {
    return this.baseSalary * (this.performanceRating / 10);
  }

  // Additional method specific to Developer
  writeCode(): void {
    console.log(`${this.name} is writing code...`);
  }
}

class Manager extends Employee {
  role: string = 'Project Manager';
  private teamSize: number;

  constructor(id: number, name: string, teamSize: number) {
    super(id, name, 75000); // Managers have higher base
    this.teamSize = teamSize;
  }

  calculateBonus(): number {
    return this.baseSalary * 0.25 + this.teamSize * 1000;
  }

  // Override with additional functionality
  getDetails(): string {
    return `${super.getDetails()} - Team size: ${this.teamSize}`;
  }
}

class Intern extends Employee {
  role: string = 'Intern';

  constructor(id: number, name: string) {
    super(id, name, 30000); // Interns have lower base
  }

  calculateBonus(): number {
    return 0; // Interns don't get bonus
  }
}

// Usage
const employees: Employee[] = [
  new Developer(1, 'Alice', 8.5),
  new Manager(2, 'Bob', 5),
  new Intern(3, 'Charlie'),
];

employees.forEach((emp) => {
  console.log(emp.getDetails());
  console.log(`Annual Salary: $${emp.getAnnualSalary().toLocaleString()}`);
  console.log(`Bonus: $${emp.calculateBonus().toLocaleString()}`);
  console.log('---');
});

// Output:
// Alice (ID: 1) - Software Developer
// Annual Salary: $111,000
// Bonus: $51,000
// ---
// Bob (ID: 2) - Project Manager - Team size: 5
// Annual Salary: $98,750
// Bonus: $23,750
// ---
// Charlie (ID: 3) - Intern
// Annual Salary: $30,000
// Bonus: $0
// ---
