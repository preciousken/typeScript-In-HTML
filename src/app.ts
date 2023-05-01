console.log('hello precious');

interface User {
  name: String,
  age: number
}

class Account {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type people = 'taiwo' | "kehinde" | "Precious" | "marvelous";
type myBool = true | false

const person: people = 'kehinde'

function getLength(obj: string | number[]) {
  return obj.length;
}

getLength([
  1, 2, 3, 4
])





const latestAccount = new Account('Ademola Kehinde', 21)

console.log(latestAccount);


function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    //   return [obj];
    console.log('it is a string');
    return;
    //   (parameter) obj: string
  }
  return console.log('it is an array ');
  ;
}

wrapInArray(['taiwo'])


const car: [
  Type: string,
  plateNumber: number,
  year?: number
] = ['rangeRover', 2, 2002]
console.log(car);


const magics = {
  _add: async (): Promise<void> => {
    try {
      console.log('this is not an error');
    } catch (error) {
      console.log('this is an error');

    }
  },
  get add() {
    return this._add;
  },
  set add(value) {
    this._add = value;
  },
}

magics.add()


// //// ENUM
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log({
  notFound: StatusCodes.NotFound,
  success: StatusCodes.Success,
});



// ////// interfaces
interface Rectangle {
  height: number,
  width: number
}


const dimensions: Rectangle = {
  height: 293,
  width: 3648
}

console.log(dimensions);



// //// extending interfaces
interface newRectangle extends Rectangle {
  colors: string
}


const latestShape: newRectangle = {
  height: 235,
  width: 235,
  colors: 'red'
}


//////// UNION 
const methods = {
  printStatusCode: async (code: string | number) => {
    if (typeof code === 'string') {
      console.log('the status code of this function is ' + code.toUpperCase());
      return;
    }
    console.log('the status code of this function is ' + code);

  }
}
methods.printStatusCode('305')







// //// FUNCTIONS

// 1. for a function to return a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());


type NewType = {
  name: string,
  school: string
};





// 2. for a function that is returning an object

function returnObject(): NewType {
  const person = {
    name: 'taiwo',
    school: "UNIABUJA"
  }
  return person
}


console.log(returnObject());





// //// 3.  FOR A FUNCTION THAT IS NOT RETURNING ANYTHING, USE VOID

function logSomething(): void {
  console.log('something is happening right now');

}
logSomething()





// 4. function parameters
function multiply(a: number, b: number): string {
  let result = `${a * b}` // made it to give a string result instead of a number. though it received a number parameter
  return result
}
console.log(multiply(2, 3));



// ---> method 2
interface Multiply {
  a: number,
  b: number
}

function multiply2({ a, b }: Multiply): number {
  let result = a * b // made it to give a string result instead of a number. though it received a number parameter
  return result
}
console.log(multiply(2, 3));



// ///// OPTIONAL
function Add(a: number, b: number, c?: number): number {
  return a * b + (c || 0)
}

console.log(Add(1, 3, 5));




// ///// TYPSCRIPT CASTING
//  casting is the process of overriding types in typescript


let x: unknown = '12345678';
console.log((x as string).length);



// ---- TO FORCE OVERRIDE A TYPE, FIRST CAST AS UNKNOWN THEN CAST IT TO THE NEW TYPE
const y: number = 123456789;
const newY = (y as unknown) as string
console.log(newY);



// //// TYPESCRIPT CLASSES
class Person {
  name: string;
  school: string

  public constructor(name: string, school: string) {
    this.name = name;
    this.school = school
  }

  public getName(): [string] {
    return [this.school]
  }
}

const _person = new Person("Jane", 'fedeeral university of technology, Akure');
console.log(_person.getName()); // person.name isn't accessible from outside the class since it's private



class NewPerson {
  age: number | undefined;
  name: string
  constructor(name: string, age?: number) {
    this.name = name,
    this.age = age

    this.declareHim()
  }


  declareHim(){
    console.log(this.name+" is "+this.age+" years old");
  }

}

const declaredPerson = new NewPerson('Kehinde',21)

console.log(declaredPerson);
