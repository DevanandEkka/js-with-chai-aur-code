const myNums = [1,2,3,4,5,6,7,8,9,10]

// newNums = myNums.map((num) => num +10  ) //map is also a callback funtion it gives automatically return value


//**************** */ chaining

const newNums = myNums
                        .map( (num) => num *10 )
                        .map( (num) => num + 1 )
                        .map( (num) => num/2 )
                        .filter( (num) => num >50)

console.log(newNums);

