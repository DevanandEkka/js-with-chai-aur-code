const userEmail = []

if (userEmail){
    console.log("Got the user email")
}
else{
    console.log("Don't have user");
}

// falsy values**********

// false, 0, - 0, BigInt (0n),"",null, undefined, NaN


//truthy values*********

// "0",'false', " " , [], {}, function(){} 

// if (userEmail.length===0) {
//     console.log("array is empty");
// }


const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    console.log("The object is empty");
}


// Nullish coalescing operator (??) : perform in Null and Undefined

let val1
// val1 = 5??10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 =null ?? 10??20

console.log(val1)

// terniary operation 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less then 80") :console.log("more than 80")



