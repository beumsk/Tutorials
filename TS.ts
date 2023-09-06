// TYPESCRIPT - Strongly Typed JavaScript - by Beumsk



// npm install typescript 
// npx tsc --init // init TS project
// change config in tsconfig.json
// npx tsc // compile TS
// npx tsc -w // watch TS changes to be compiled
// test Typescript live -> https://www.typescriptlang.org/play 

// add in package.json scripts
// "ts": "node_modules/.bin/tsc --noEmit --skipLibCheck"



// TSCONFIG.JSON
{
  "compilerOptions": {
    "target": "commonjs", // also ES6...
    "sourceMap": false,
    "watch": true,
    "lib": ["dom", "es2017"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules/**/*"]
}



// @ts-ignore -> ignore next line ts errors
// @ts-nocheck -> ignore file ts errors



// IMPLICIT TYPING
const num = 1;
const str = 'Hello';
const bool = false;
const arr = [];
const obj = {};
const func() {}
const func = () => {}



// EXPLICIT TYPING
const num: number = 1;
const str: string = 'Hello';
const bool: boolean = false;

let dualType: (string | number); dualType = 123; dualType = "ABC"; // both types work
let anyType: any; anyType = false; anyType = "any string"; // any type works

const arr: string[] = ['one', 'two', 'three'];
const arr: (string | number)[] = ['one', 2, 'three'];
const arr: any[] = ['one', 2, false];
const arr: Array<string> = ['one', 'two', 'three'];
const arr: [number, string] = [1, "two"];

const obj: {} = { title: "Hello", id: 1 };
const obj: { title: string; id: number } = { title: "Hello", id: 1 };
const obj: { title: string; id: number, online?: boolean } = { title: "Hello", id: 1 };

function func(): void { console.log('Hi!') } // void is only for function not returning any value
const func = (): void => console.log('Hi!');
function func(name: string, age: number): string { return 'Hi ' + name + ', you are ' + age } // you can specify type of each arg and the returned type as well
const func = (name: string, age: number): string => 'Hi ' + name + ', you are ' + age;

const some: any; // any type; you can use all types and all operations (some.thing)
const some: unknown; // unknown type; you can use all types but no operations without manual type checking



// TYPE ALIAS
type StrOrNum = string|number;
let dualType: StrOrNum; dualType = 123; dualType = '123';
// fixed values alias
type Themes = "light" | "dark" | "rose";
let theme: lightOrDark; theme = "light"; theme = "dark";
// excluding alias
type Themes = "light" | "dark" | "rose";
type duoThemes = Exclude<Themes, "rose">;
let excludedAlias: duoThemes = 'dark'; // not 'rose'
// func alias
type myFunc = (a:number, b:string) => void;
let write: myFunc = (num, str) => { console.log(num + " times " + str) };
// combining aliases
type X = { a: string, b: number };
type Y = X & { c: string, d: number };
let combinedAlias: Y = { a: 'a', b: 2, c: 'c', d: 4 };
// omitting alias
type X = { a: string, b: number, c: string, d: number };
type Y = Omit<X, 'd'>;
let omitedAlias: Y = { a: 'a', b: 2, c: 'c' };
// smart alias
type Smart = { name: string } & ({ type: 'circle', radius: number } | { type: 'square', side: number });
let smartCircle: Smart = { name: 'c', type: 'circle', radius: 10 };
let smartSquare: Smart = { name: 's', type: 'square', side: 10 };



// INTERFACE
interface XX { a: string, b: number };
interface YY extends XX { c: string, d: number };
let combinedInterFace: YY = { a: 'a', b: 2, c: 'c', d: 4 };

interface ComplexObject {
  title: string;
  data: {
    id: number;
    name: string;
  }[];
  optionalData?: [];
  twoTypes: string | number;
  func: (param: string) => string;
  [key: string]: any;
}
const obj: ComplexObject = {
  title: 'Title',
  data: [
    {
      id: 1,
      name: 'data1'
    },
    {
      id: 2,
      name: 'data2'
    }
  ],
  twoTypes: 'dual',
  func: (param) => 'string: ' + param,
  anotherProp: true
}



// GENERICS
interface GenericInterface<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const article: GenericInterface<string> = {
  id: 1,
  title: "first piece",
  desc: 'desc',
  extra: ["str", "string"]
}


interface GenericInterface2<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const article: GenericInterface<{id:number, name:string}> = {
  id: 1,
  title: "first piece",
  desc: 'desc',
  extra: [{id:1, name:"author"}]
}










