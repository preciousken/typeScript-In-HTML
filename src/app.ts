console.log('hello precious');

interface User {
    name:String,
    age:number
}

class Account {
    name: string;
    age: number;

    constructor(name: string, age: number){
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
    1,2,3,4
  ])


  


const latestAccount = new Account('Ademola Kehinde',21)

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