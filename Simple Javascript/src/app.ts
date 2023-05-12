// let num1 = 1;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 3));

// function getTotal(numbers: Array<number>) {
//   return numbers.reduce((acc, eachValue) => {
//     return acc + eachValue;
//   }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };

// console.log(user);

//inbuild types
// number
// string
// arr[]
// boolean

//type alias - use to build new type

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };

// const user: User = {
//   name: "john",
//   age: 12,
// };

// function login(userData: User): User {
//   return userData;
// }

// console.log(login({ name: "Doe", age: 90 }));

// type ID = number | string;

// const userId: ID = "123";

//INTERFACES
// --like type aliases

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payeeAccountNumber: 123,
//   payerAccountNumber: 455,
// };
// const transaction2: Transaction = {
//   payeeAccountNumber: 123,
//   payerAccountNumber: 456,
// };
// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: "John Doe",
//   balance: 4000,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };

// console.log(bankAccount);

//extend

// interface Book {
//   name: string;
//   price: number;
// }

// interface EBook extends Book {
//   fileSize: number;
//   format: string;
// }

// interface AudioBook extends EBook {
//   duration: number;
// }

// const book: Book = {
//   name: "Atomic habits",
//   price: 1200,
// };
// const eBook: EBook = {
//   name: "Atomic habits",
//   price: 1200,
//   fileSize: 1000,
//   format: "pdf",
// };
// const audioBook: AudioBook = {
//   name: "Atomic habits",
//   price: 1200,
//   fileSize: 1000,
//   format: "pdf",
//   duration: 5,
// };

// interface is only for object
//   for primitive use alias
//     e.g type EvenNumber = number

// interface merge the same interfaces

//UNIONS

// type ID = number | string;
// this is called union

// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//to solve this error - Narrowing
//   } else {
//     console.log(id);
//   }
// }

// printId("newUser");

// function getFirstThree(x: string | string[]) {
//   return x.slice(0, 3);
// }

// console.log(getFirstThree(["lai", "lily", "doe", "hhhh"]));

// GENERICS

// function logString(arg: string) {
//   console.log(arg);
//   return arg;
// }
// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }
// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// to overcome 3 functions above
// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// logString("logged in");
// logNumber(30);
// logArray([1, 2, 3]);

// logAnything("logged in");
// logAnything(30);
// logAnything([1, 2, 3]);
// logAnything(true);

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }, { age: 20 }];

// interface Player extends HasAge {
//   name: string;
// }

// const players: Player[] = [
//   { name: "john", age: 30 },
//   { name: "doe", age: 40 },
//   { name: "Jabe", age: 50 },
// ];

// console.log(getOldest(people).age);

// //assertion
// const person = getOldest(players) as Player;
// // assertion is not a best way
// console.log(person);

// // using generics
// console.log(getOldest(players));

// interface IPost {
//   title: string;
//   id: number;
//   description: string;
// }

// interface IUser {
//   id: number;
//   name: string;
//   age: number;
// }

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// (async () => {
//   const users = await fetchData<IUser[]>("/users");
//   users[0];
//   const posts = await fetchData<IPost[]>("/users");
//   posts[0];
// })();

// structural typing or duck typing
// 2 objects same properties or method, they both are same

// interface ICredential {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }

// function login(credential: ICredential): boolean {
//   console.log(credential);
//   return true;
// }

// const user: ICredential = {
//   username: "codergyan",
//   password: "secret",
//   isAdmin: true,
// };

// login(user);

// interface Auth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
// }

// const auth: Auth = {
//   username: "codergyan",
//   password: "secret",
//   login(username: string, password: string) {
//     return true;
//   },
// };

// let num = 1; auto detect type from intialization

// ts.config file
// can be created using tsc --init or npx tsc --init
