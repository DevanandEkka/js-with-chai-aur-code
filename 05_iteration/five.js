const coding = ["js", "ruby","java","python","c++"]

// coding.forEach(function name() {} )  normally function creation

// coding.forEach( function(item){
//     console.log(item)
// } )


// coding.forEach( greet = () => {} ) // arrow function  

// coding.forEach(  ( item) => {// Using arrow function for foreach loop
//     console.log(item)
// } )

// coding.forEach( function(item,index,arr){
//     console.log(item,index,arr)
// } )


const mycoding =[
    {
        languageName:"javaScript",
        Extention: ".js"
    },
    {
        languageName:"python",
        Extention: ".py"
    },
    {
        languageName:"c++",
        Extention: ".cpp"
    },
    {
        languageName:"java",
        Extention: ".java"
    },
]

mycoding.forEach( (item ) => {
    console.log(item.languageName)

} )
