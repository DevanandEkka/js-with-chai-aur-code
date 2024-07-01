
let c =3000
let a = 1220  //Global Scope can accessible anywhere in the program
if(true){
    let a = 10  //block scope can't be accessed out side the curly brackets
    const b = 20
    // c = 30
    // console.log("Inner:",a);
}


//  console.log("Outer: ", a)
// console.log(b);
// console.log(c);
function One(){
    const username = "Devanand"

    function Two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website)

    // Two()
}
One()





if(true){
    const username = "Devanand"
    if (username=== "Devanand") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username);



// +++++++++++intersting concept++++++++++++++

console.log(addOne(5))

function addOne(num){   //Here we only declear the function that's why it will execute
    return num + 1

}

console.log(addTwo(10))

const addTwo = function(num){ //Here we declear a function and hold in a variable that's why this function will not be execute
    return + 2
}
