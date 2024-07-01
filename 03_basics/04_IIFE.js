//(IIFE)  Immediately Invoked Function Expressions ,use for avoid Global pollution

// function chai() {
//     console.log(`DB connected`)
// }
// chai()


//++++++++++ usong IIFE concept++++++++++
(function chai() {
    //named IIFE
    console.log(`DB connected`)// we have to wrap whole function       declaration with a parenthesis and immediately after function call ()
})();

(() => {
    console.log(`DB connected`);
} 
) ();

((name) => {
    console.log(`DB connectrd three , ${name}`)
})("Devanand")