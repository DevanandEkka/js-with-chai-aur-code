function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

//  sayMyName()    // Here,sayMyName is refrence & () execution

// function addTwoNumbers(number1 ,number2) // when you pass function defination is called parameters 
// {
//     console.log(number1 + number2)
// }
// addTwoNumbers(8,8)// when you pass values are   called Arguments 

function addTwoNumbers(number1 ,number2) {
    // let result = number1 + number2
    return number1 + number2//after return NO cade will execute
  
}

let result = addTwoNumbers(11,11)
// console.log("Result:", result);

function loginUserMessage(username){
    if (username===undefined) {
        // console.log("Please Enter Your Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Devanand"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){   //rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,800,400,))

//how to pass object in function

const user ={
    username: "Devanand",
    price: 1999
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username}  price is ${anyobject.price}`)
}
console.log(handleObject(user))