// reduce

const myNums = [1,2,3]


// const myTotal = myNums.reduce(function (accumlator, currentvalue){
//     console.log(`value of acc: ${accumlator} and current Val: ${currentvalue}`)
//     return accumlator + currentvalue

// },0)


const myTotal = myNums.reduce( (acc,curr) => acc+curr,0 ) //using arrow functin
// console.log(myTotal);

const shoppingCart =[
     {
    course: "Javascript",
    price: 2999
     },
     {
    course: "Java",
    price: 4000
     },
     {
    course: "Python",
    price: 999
     },
     {
    course: "Machine Learning",
    price: 19999
     },

]

const priceToPay = shoppingCart.reduce( (acc ,item) =>  acc + item.price ,0 )
console.log(priceToPay);