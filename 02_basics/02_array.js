const marvel_heros = ["Thor" , "Ironman", "Spiderman"]
const dc_heros = ["Spiderman" , "Flace", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_new_heros = [...marvel_heros , ...dc_heros]//Spred operator
// console.log(all_new_heros);


let another_array = [0,1,1,2,[4,5,8,9],5,[5,10,8]]
let real_another_array = another_array.flat(Infinity)
console.log("A", real_another_array);

console.log(Array.isArray("Devanand"))
console.log(Array.from("Devanand"))
console.log(Array.from({name:"Devanand"}))//gives Empty array ** intresting**


let score1 =100
let score2 = 200
let score3 = 400
console.log(Array.of(score1,score2,score3))