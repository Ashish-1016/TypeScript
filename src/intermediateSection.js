//Optional chaining -> ?.
//Nullish Coalescing -> ?? 
// ?? -> Fallback to a default value, when dealing with null or undefined
var firstName = null !== null && null !== void 0 ? null : "null";
console.log(firstName);
