//string, number, boolean -> small starting letter

//Using rpmitive types with arrays
//1. number[], string[], boolean[]
//2. Array<number> -> generic type


// expr:any -> Just to convince Typescript that a particular line of code is correct

//noImplicitAny: true for best practices

//Variables Type annotations

let studentName:string="ABC"; //usually not required
let studentSurname="DEF"; //TS will infer from its context

//Function Type anotaions

//1. Parameter type annotations

function fullname(firstname:string,lastName:string){
    console.log("Welcome"+ firstname.toUpperCase()+" "+lastName.toUpperCase())
}

fullname(studentName,studentSurname);

//2 Return type annotations

function greet(firstname:string):string{
    return "Hello Student"
}
//Return statements don't require type annotation, TS infers it from the return statement

greet(studentName)

//Anonymous functions also use inference from the input paramter i.e using in callbacks

const studentNames=["Alice","Bob","Charlie"]

studentNames.forEach((s)=>{
    console.log(s.toUpperCase())
})
//Here anonymouse fuction uses the string type annotaion from the array type annoation itself

function studentInfo(studentObj:{firstName:string, lastName:string, rollNo:number}){
    console.log(studentObj)
}

studentInfo({firstName:"Alice",lastName:"foo",rollNo:19}) //; OR , both work here

//If any parameter is not given any type then it is any

//Optional properties in objects

function classroomInfo(classInfo:{division:string,floor:number, open?:boolean}) {
console.log(classInfo)    
}

classroomInfo({division:"A",floor:2}) //No error as open is an optional property
 
//But JS will give a undefined property error. TO turn around this we use condition

function classroomInfo2(classInfo:{division:string,floor:number, open?:boolean}) {
    if(classInfo.open !== undefined){
        console.log(classInfo)    
    }
}

//Union types -> Bind multiple types together

function studentRollNo(id:string | number){
    console.log(id)
}

studentRollNo(10) //OK
studentRollNo("20") //OK
// studentRollNo({id:'202'}) //NOT OK 

// function studentPRN(id:string | number){
//     console.log(id.toUpperCase()) //Will not work
// }

//Solution for the above code is to narrow donw the type union

function studentPRN(id:string | number){
    if(typeof id ==='string'){
        //then
        console.log(id.toLowerCase())
    }
    else{
        //Here id is number
        console.log(id)
    }
}

studentPRN("1234");studentPRN(1234); //Both will work now without error

//Can also be used with array's also to check arrays

function welcomeStudets(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[] OR array of strings'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}

// Some things work for union type methods for example slice() method works for both number | string



