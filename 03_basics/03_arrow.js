const user ={
    username: "Devanand",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website `);//this refered current context
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = " Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this)
// }
// chai()


const chai = () => {
    let username = "Devanand"
    console.log(this);
}
// chai()

// const addTwo = (num1 ,num2) =>{ //basic Arrow function
//     return num1 + num2
// }
// console.log(addTwo(201, 200))

// const addTwo = (num1 ,num2) => num1 + num2 // implicit return 

const addTwo = (num1 ,num2) =>( num1 + num2)//if we use parenthesis we do not write return keyword |||| but if we use curly bracket we must have to write return keyword 
console.log(addTwo(201, 200))


