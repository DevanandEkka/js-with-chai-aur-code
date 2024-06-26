//singleton if you create an object using constructor that always created as singleton object.create


// literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Devanand",
    "full name" : "Devanand Ekka",
    [mySym] : "mykey1",
    age : 24,
    email : "devanand@gmail.com",
    location : "Ranchi",
    isLoggedIn : true
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]) //square notation Access
console.log(jsUser[mySym]);
jsUser.age = 50
// Object.freeze(jsUser)
jsUser.age =51
console.log(jsUser);

jsUser.greetingOne = function(){
    console.log("Hello js User") 
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User ${this.name}`) //`..` String interpolation
}
console.log(jsUser.greetingOne())
console.log(jsUser.greetingTwo())
// console.log(jsUser.greeting)
