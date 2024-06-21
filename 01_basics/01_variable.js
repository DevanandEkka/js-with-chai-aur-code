const accountId =144553
let accountEmail="devanandekka@gmail.com"
var accountPassword="12345"
accountCity="Ranchi"

//   accountId=2 can't be changed constant
var accountPassword=10101
accountCity="Gumla"
console.log(accountId);
let accountState
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not use var
because of issue in block scope and functional scope
*/