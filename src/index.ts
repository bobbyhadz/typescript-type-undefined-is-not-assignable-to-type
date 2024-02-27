export {};

// Type 'undefined' is not assignable to type in TypeScript

// EXAMPLE 1 - Using the non-null assertion operator to solve the error

interface Employee {
  id: number;
  name: string;
  salary?: number;
}

const emp: Employee = {
  id: 1,
  name: 'Bobby Hadz',
  salary: 100,
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const salary: number = emp.salary!; // 👈️ non-null assertion

console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary as number;

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 3 - Using a union type to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// // 👇️ types now match
// const salary: number | undefined = emp.salary;

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type guard to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary !== undefined ? emp.salary : 0;

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 5 - Using the nullish coalescing operator (??) to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary ?? 0;

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 6 - Using the logical OR (||) operator to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary || 0;

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 7 - Using an `if` statement to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// let salary = 0;

// // 👇️ emp.salary is number or undefined here

// if (emp.salary !== undefined) {
//   // 👇️ emp.salary is number here
//   salary = emp.salary;
// }

// console.log(salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 8 - Using a compatible type to solve the error

// interface Employee {
//   id: number;
//   name: string;
//   salary: number; // 👈️ all required
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary;
// console.log(salary);

// ---------------------------------------------------

// // EXAMPLE 8 - With Required utility type

// interface Employee {
//   id: number;
//   name: string;
//   salary?: number; // 👈️ optional property
// }

// const emp: Required<Employee> = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const salary: number = emp.salary;
// console.log(salary);
