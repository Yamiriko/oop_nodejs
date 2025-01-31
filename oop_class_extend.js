// Definisi kelas induk (SuperClass)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Definisi kelas turunan (SubClass)
class Student extends Person {
  constructor(name, age, studentId) {
    // Memanggil konstruktor kelas induk dengan menggunakan super
    super(name, age);
    this.studentId = studentId;
  }

  // Metode tambahan untuk kelas turunan
  study() {
    console.log(`${this.name} is studying. Student ID: ${this.studentId}`);
  }

  // Override metode greet dari kelas induk
  greet() {
    console.log(`Hi, I'm ${this.name}, a student with ID: ${this.studentId}.`);
  }
}

// Membuat instance dari kelas Person
let person = new Person("Tang San", 30);
person.greet(); // Output: Hello, my name is Tang San and I am 30 years old.

// Membuat instance dari kelas Student
let student = new Student("Xiaou Wu", 20, "S12345");
student.greet(); // Output: Hi, I'm Xiaou Wu, a student with ID: S12345.
student.study(); // Output: Xiaou Wu is studying. Student ID: S12345.
