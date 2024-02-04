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
// let x: number = 15
// let y: number = 25

// if (x > y) {
//     console.log("x y'den büyüktür");
// } else if (x < y) {
//     console.log("x y'den küçüktür");
// } else {
//     console.log("x y'ye eşittir");
// }

// x > y ? console.log("x y'den büyüktür") : console.log("x y'den küçüktür veya eşittir");

//! SWITCH CASE
// let day: number = 2;
// switch (day) {
//     case 0:
//         console.log('Pazar');
//         break
//     case 1:
//         console.log('Pazartesi');
//         break
//     case 2:
//         console.log('Salı');
//         break
//     case 3:
//         console.log('Çarşamba');
//         break
//     case 4:
//         console.log('Perşembe');
//         break
//     case 5:
//         console.log('Cuma');
//         break
//     case 6:
//         console.log('Cumartesi');
//         break
//     default:
//         console.log('Böyle bir gün yok');
//         break
// }
//! FOR
// for (let i = 0; i < 3; i++) {
//     console.log("i değerim:", i);
// }

// let arr = [10, 20, 30, 40]

// for (let i of arr) {
//     console.log(i);
// }
// let str = "Rst Cmgz"
// for (let i of str) {
//     console.log(i);
// }

// for (let i in arr) {
//     console.log(i);
// }
//! While

// let counter = 0

// while (counter < 5) {
//     console.log(counter);
//     counter++
//     if (counter == 3) {
//         break
//     }
// }

// do {
//     console.log(counter);
//     counter++
// } while (counter < 5)
//! Function

// function add(a: number, b: number): number {
//     return a + b
// }

// let toplam = add(5, 20)

// console.log(typeof (toplam));

// function bastir() {
//     console.log("rst cmgz");
//     return 35
// }

// let degisken = bastir()
// console.log(degisken);
// function birlestir(ad: string, soyad: string): string {
//     return ad + ' ' + soyad
// }

// let degisken = birlestir('rst', 'cmgz')

// console.log(degisken);

//? Default function
// function birlestir(ad: string, soyad: string = "CMGZ"): string {
//     return ad + ' ' + soyad
// }

// let degisken = birlestir('rst')

// console.log(degisken);
//! Optional Parameters

// function carpim(a: number, b: number, c?: number) {
//     if (typeof c !== 'undefined') {
//         return a * b * c
//     }
//     return a * b
// }
// let degisken = carpim(5, 10, 3)

// console.log(degisken);
//? Arrow function

// function carpim(a: number, b: number): number {

//     return a * b
// }

// let carpim = (a: number, b: number): number => {
//     return a * b
// }

// let degisken = carpim(4, 6)
// console.log(degisken);

// let bastir = () => {
//     console.log('rst cmgz');
// }
// bastir()
//! Function overloading

// function add(a: number, b: number): number {
//     return a + b
// }
// let degisken = add(4, 5)
// console.log(degisken);

// function add(a: string, b: string): string
// function add(a: number, b: number): number


// function add(a: any, b: any): any {
//     return a + b
// }
// // let degisken = add('rst', ' cmgz')
// let degisken = add(5, 8)
// console.log(degisken);
//! Rest Parameters

// function toplam(a: string, ...numbers: number[]): number {
//     let total = 0
//     numbers.forEach((num) => total += num)
//     return total
// }

// console.log(toplam("rst", 20, 30));

// function birlestir(message: string, ...names: string[]) {
//     console.log(message + " " + names.join(","));
// }
// birlestir("Merhaba", "Resat", "Mehmet", "Tugba")

//! CLASS

// class Person {
//     id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisiBilgim = new Person(43, 'Resat', 'CMGZ')

// console.log(kisiBilgim);
// console.log(kisiBilgim.getFullName);
//! Access Modifiers
// class Person {
//     protected id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisiBilgim = new Person(43, 'Resat', 'CMGZ')
// console.log(kisiBilgim);
//! Readonly
// class Person {
//     readonly id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisiBilgim = new Person(43, 'Resat', 'CMGZ')
// kisiBilgim.id = 5
// console.log(kisiBilgim.id);
//! inheritance
// class Person {
//     id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Employee extends Person {
//     constructor(
//         id: number,
//         firstName: string,
//         lastName: string) {
//         super(id, firstName, lastName)
//     }
// }

// let employee = new Employee(29, 'Rst', 'Cmgz')

// console.log(employee.getFullName());


// let kisiBilgim = new Person(43, 'Resat', 'CMGZ')
// kisiBilgim.id = 5
// console.log(kisiBilgim.id);
//! Static Methods

// class Circle {
//     static pi: number = 3.14
//     pi = 3;

//     constructor() {
//         this.pi++
//         Circle.pi++
//     }

//     static hesapla(yaricap: number) {
//         return this.pi * yaricap * yaricap
//     }
// }

// let objem = new Circle()
// let objem2 = new Circle()

// console.log(objem.pi);

// console.log(Circle.pi);
// console.log(Circle.hesapla(5));
//! Abstract Class

// abstract class Department {
//     constructor(public name: string) { }

//     printName(): void {
//         console.log("Department name: " + this.name);

//     }


//     abstract printMeeting(): void;
//     abstract generateReports(): void;
// }

// class AccountingDepartment extends Department {

//     constructor() {
//         super("Accounting and Auditing")
//     }

//     printMeeting(): void {
//         console.log("The Accounting Department meets each Monday at 10am.");
//     }

//     generateReports(): void {
//         console.log("Generating accounting repots...");
//     }
// }

// let department: Department
// department = new AccountingDepartment()
// department.printName()
// department.printMeeting()
// department.generateReports()


//! Interface

// interface Person {
//     firstName: string,
//     lastName: string
// }

// function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`
// }

// let person = {
//     firstName: 'Rst',
//     lastName: 'Cmgz',
//     age: 29
// }
// console.log(getFullName(person));

//! Optional
// interface Person {
//     firstName: string,
//     lastName: string,
//     middleName?: string
// }

// function getFullName(person: Person) {
//     if (person.middleName) {
//         return `${person.firstName} ${person.middleName} ${person.lastName}`
//     }
//     return `${person.firstName} ${person.lastName}`
// }

// let person = {
//     firstName: 'Rst',
//     lastName: 'Cmgz',
//     middleName: 'resat',
//     age: 29
// }
// console.log(getFullName(person));

//! Readonly

// interface Person {
//     firstName: string,
//     lastName: string,
//     middleName?: string
// }

// function getFullName(person: Person) {
//     if (person.middleName) {
//         return `${person.firstName} ${person.middleName} ${person.lastName}`
//     }
//     return `${person.firstName} ${person.lastName}`
// }

// let person: Person = {
//     firstName: 'Rst',
//     lastName: 'Cmgz'
// }

// // person.firstName = "Resat"

// console.log(getFullName(person));

//! Interface Function type
// interface StringFormat {
//     (str: string, isUpper: boolean): string
// }

// let format: StringFormat

// format = function (str: string, isUpper: boolean) {
//     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
// }

// console.log(format('Resat Cmgz', true));

//! Extend

// interface IPerson {
//     name: string,
//     gender: string
// }

// interface IEmployee extends IPerson {
//     empNumber: number;
// }

// interface IWorker extends IPerson {
//     empDepartment: string;
// }

// let employeeDepartment: IWorker = {
//     empDepartment: "Software Department",
//     gender: 'Male',
//     name: 'Rst'
// }
// let employee: IEmployee = {
//     empNumber: 1,
//     gender: 'Male',
//     name: 'Rst'
// }
// console.log(employeeDepartment);
// console.log(employee);
//!  implement

// interface IPerson {
//     name: string;
//     gender: string
// }
// class Employee implements IPerson {
//     empNumber: number;
//     name: string;
//     gender: string;
//     constructor(empNumber: number, name: string, gender: string) {
//         this.empNumber = empNumber;
//         this.name = name;
//         this.gender = gender;
//     }
// }

// let employee = new Employee(5, 'Rst', 'Male')

// console.log(employee);
//! Type intersection
// interface BusinessPartner {
//     name: string;
//     credit: number;
// }
// interface Identity {
//     name: string;
//     id: number
// }
// interface Contact {
//     email: string
//     phone: string
// }
// type Employee = Identity & Contact

// let kisim: Employee = {
//     id: 54,
//     name: 'Rst',
//     email: 'sadasd@hotmail.com',
//     phone: '121212'
// }

// console.log(kisim);
// type Customer = BusinessPartner & Contact
// let müsterim: Customer = {
//     credit: 54,
//     email: 'sadasd@hotmail.com',
//     name: 'Rst',
//     phone: '4545454'
// }
// console.log(müsterim);
//! Type Guard
// type tip = string | number;

// function add(a: tip, b: tip) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     }
//     if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b)
//     }
//     throw new Error('Lütfen doğru formatta data gönderin');
// }

// console.log(add(5, 6))
// class Customer {
//     isCreditAllowed(): boolean {
//         return true
//     }
// }
// class Supplier {
//     isInShortList(): boolean {
//         return true
//     }
// }

// type BusinessPartner = Customer | Supplier

//! Generics

// function getRandomNumber(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length)
//     return items[randomIndex]
// }
// let numbers = [1, 5, 74, 29, 50]

// console.log(getRandomNumber(numbers));

// function getRandomString(items: string[]): string {
//     let randomIndex = Math.floor(Math.random() * items.length)
//     return items[randomIndex]
// }
// let string = ['Rst', 'Mehmet', 'Hamdi']

// console.log(getRandomString(string));



// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length)
//     return items[randomIndex]
// }
// let string = ['Rst', 'Mehmet', 'Hamdi']
// let numbers = [1, 5, 74, 29, 50]

// console.log(getRandomElement(string));
// console.log(getRandomElement(numbers));



// let degiskenlerim = [true, false, true]

// function getRandomElement<T>(items: T[]): T {
//     let randomIndex = Math.floor(Math.random() * items.length)
//     return items[randomIndex]
// }
// let string = ['Rst', 'Mehmet', 'Hamdi']
// let numbers = [1, 5, 74, 29, 50]

// console.log(getRandomElement<string>(string));
// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<boolean>(degiskenlerim));
//! Generics Constraints

// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// let person = merge(
//     { name: "Rst" },
//     // { age: 29 }
//     29
// )

// console.log(person);
//! interface generics
// interface Months<U, V> {
//     key: U,
//     value: V
// }

// let month: Months<number, string> = {
//     key: 1,
//     value: 'January'
// }
// // console.log(month);

// interface Collection<T> {
//     add(o: T): void;
//     remove(o: T): void
// }

// class List<T> implements Collection<T>{
//     private items: T[] = []
//     add(o: T): void {
//         this.items.push(o)
//         console.log(this.items);

//     }

//     remove(o: T): void {
//         let index = this.items.indexOf(o)
//         if (index > -1) {
//             this.items.splice(index, 1)
//         }
//     }
// }

// let list = new List<number>()

// for (let i = 0; i < 10; i++) {
//     list.add(i)
// }
//! Class generics
class Stack<T>{

    private elements: T[] = []
    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0
    }
    isFull(): boolean {
        return this.elements.length === this.size
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!')
        }
        this.elements.push(element)
    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!')
        }
        return this.elements.pop();
    }
}

function randBetween(low: number, hight: number): number {
    return Math.floor(Math.random() * (hight - low + 1) + low)
}
let numbers = new Stack<number>(5)

while (!numbers.isFull()) {
    let n = randBetween(1, 10)
    console.log(`Push ${n} into the stack.`);
    numbers.push(n)
}

while (!numbers.isEmpty()) {
    let n = numbers.pop()
    console.log(`Pop ${n} into the stack.`);
}