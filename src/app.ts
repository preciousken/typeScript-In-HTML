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


  const car:[
    Type:string,
     plateNumber:number,
     year?:number
  ]= ['rangeRover',2,2002 ]
  console.log(car);
  

  const magics ={
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
    height:number,
    width:number
  }


  const dimensions: Rectangle = {
    height : 293,
    width : 3648
  }

  console.log(dimensions);



  // //// extending interfaces
  interface newRectangle extends Rectangle {
    colors: string
  }


  const latestShape : newRectangle ={
    height : 235,
    width : 235,
    colors: 'red'
  }


  //////// UNION 
  const methods = {
    printStatusCode: async (code: string | number) => {
      if(typeof code === 'string'){
        console.log('the status code of this function is '+code.toUpperCase());
        return;
      }
      console.log('the status code of this function is '+code);
      
    }
  }
  methods.printStatusCode('305')



  // //// FUNCTIONS
  