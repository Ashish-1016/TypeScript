//Optional chaining -> ?.
const user = {
    name: "Alice",
    address: {
      city: "Wonderland"
    }
  };
  
  const cityName = user.address?.city;
  console.log("City: " + cityName);  
  
//this is a way of saying that when address is defined, user.address?.city will be computed; but when address is null or undefined, stop what we’re doing and just return undefined.”

//Nullish Coalescing -> ?? 

// ?? -> Fallback to a default value, when dealing with null or undefined

let firstName = null ?? "null"

console.log(firstName)




