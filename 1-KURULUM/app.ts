// let age: number = 29;
// let firstname: string = 'Resat'
// let lastname: string = 'Camgoz'
// let isUpdated: boolean = true;

// lastname = 'asdasdsad'
//! lastname = 34  dogru değil çünkü string bir değeri number atayamazsın.

// function display(id: any, name: string) {

//     console.log("ıd = " + id + ", Name = " + name);

// }

//! DATA TYPE
// let first:number = 123 //number
// let second: number = 0x37CF // hexadecimal
// let third:number = 0o377 // octal
// let fourth: number = 0b111001 //binary

// let employeefirstName: string = 'reso'
// console.log(employeefirstName);

// let employeeName: string = "John"
// let employeeDept: string = 'Finance'

// let employeeDesc1: string = employeeName + "works in the " + employeeDept + "department"

// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department`
// console.log(employeeDesc1, employeeDesc2);

// let isPresent: boolean = false
// console.log(isPresent);
//! ARRAYS
// let firstNames: string[] = ['Reso', 'Mehmet', 'Ahmet', 'Sinem', 'Merve']
// let firstNames: Array<string> = ['Reso', 'Mehmet', 'Ahmet', 'Sinem', 'Merve']

// let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false]
// let fruits: Array<string>
// fruits = ['Apple', 'Orange', 'Banana']

// let ids: Array<number>
// ids = [23,45,64,76,87]
// let values: (string | number)[] =['Apple', 'Orange',3,5, 'Banana']



// let fruits: Array<string>
// fruits = ['Apple', 'Orange', 'Banana']

// console.log(fruits[1]);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//! Tuple
// let Id: number = 1
// let instructorName: string = 'reso'

// let instructor: [number, string] = [1, 'Reso']


// var user: [number, string, boolean, number, string];

// user = [1, 'Steve', true, 5, 'Reso']

// console.log(user);

// let employee: [number, string][];
// employee = [[1, 'steve'], [2, 'bill'], [3, 'jeff']]
//! Object Data-Type

// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// }
// let instrustor: Person;

// instrustor = {
//     firstName: 'Reso',
//     lastName: 'Cmgz',
//     age: 29,
//     jobTitle: 'Software Instructor'
// }
// console.log(instrustor.age);
// let Person = {
//     firstName: 'Reso',
//     lastName: 'Cmgz',
//     age: 29,
//     jobTitle: 'Software Instructor'
// }
// console.log(Person);

//! ENUM
// enum Media {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }
// console.log(Media.Magazine);
// console.log(Media[3]);



// enum PrintMedia {
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZİNE",
//     Book = "BOOK"
// }

// console.log(PrintMedia.Newspaper);
// console.log(PrintMedia['Newsletter']);

//! UNİON
// let code: string | number | boolean = "123"

// console.log(code);

//! ANY

// let someThing: any = "Hello"

// someThing = 45
// someThing = true
// someThing = {
//     firstName: 'Reso',
//     lastName: 'Cmgz'
// }
// console.log(someThing);

// let arr: any[] = ['Reso', 454, true]
// console.log(arr);

//! Void

// function sayHello(): void {
//     console.log('Hi');
//     // return arguments; its false!!!
// }
// sayHello()

//! Never
// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg)
// }
// throwError('hata')


// let something : void = undefined
// let nothing : never = null
// let nothing : never = undefined
//!Inference
// let sayac = 0;
// // let sayac:number =0
// console.log(typeof (sayac));


// function increment(counter: number) {
//     return counter++
// }

// function increment(counter: number): number {
//     return counter++
// }

// let a = "some text"
// let b = 123

// a=b
// function sum(a: number, b: number) {
//     return a + b
// }

// let total: number = sum(20, 30)

// let total: string = sum(20, 30) //it's false!

//! Assertion

// let code: any = 123

// let empCode = <number>code
// console.log(typeof (empCode));

// interface Employee {
//     name: string,
//     code: number,
// }

// let employee = <Employee>{}

// console.log(typeof (employee));

// employee.name = 'Reso'
// console.log(employee);
//! IF/ELSE
let x: number = 15
let y: number = 25

// if (x > y) {
//     console.log("x y'den büyüktür");
// } else if (x < y) {
//     console.log("x y'den küçüktür");
// } else {
//     console.log("x y'ye eşittir");
// }

x > y ? console.log("x y'den büyüktür") : console.log("x y'den küçüktür veya eşittir");
