// Stack (premitive Number, String, Boolean,Undefined,null,symbol ) Grant a copy ,, any changes takes place in its copied value.. Original value state as it is


//Heap (Non - Premitive (Array,object,Function)...(Refrence) grant a refrence ,,,any changes takes place in its original values


let myName = ` Devanand Ekka`

let anotherName = myName;
anotherName = `Chotu`

console.log(myName)
console.log(anotherName);


let userOne = {
    email:"user@gmail.com",
    upi:`user@ybl`
}
let userTwo = userOne
userTwo.email = "abc@google.com"


console.log(userOne.email)
console.log(userTwo.email)


