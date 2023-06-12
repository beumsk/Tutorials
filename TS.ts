// TYPESCRIPT - Strongly Typed JavaScript - by Beumsk



// npm install typescript 
// npx tsc --init // init TS project
// change config in tsconfig.json
// npx tsc // compile TS
// npx tsc -w // watch TS changes to be compiled
// test Typescript live -> https://www.typescriptlang.org/play 



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

function func(): void { console.log('Hi!') } // void is only for function not returning any value
const func = (): void => console.log('Hi!');
function func(name: string, age: number): string { return 'Hi ' + name + ', you are ' + age } // you can specify type of each arg and the returned type as well
const func = (name: string, age: number): string => 'Hi ' + name + ', you are ' + age;

const some: any; // any type; you can use all types and all operations (some.thing)
const some: unknown; // unknown type; you can use all types but no operations without manual type checking



// TYPE ALIAS
type StrOrNum = string|number;
let dualType: StrOrNum; dualType = 123; dualType = '123';
// combining aliases
type X = { a: string, b: number };
type Y = X & { c: string, d: number };
let combinedAlias: Y = { a: 'a', b: 2, c: 'c', d: 4 };



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


