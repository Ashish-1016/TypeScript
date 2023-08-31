// void, object, unknown, never, Function

//


function voidFuc():void{
    return;
}

//TS will return "no meaningful value"
//JS will return "lack of value"

//Optional parameters

function f(x?:number | undefined){
    if(x!==undefined){
        console.log(x.toFixed())
    }
}

//Rule of Thumb: Rule: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

