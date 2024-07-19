// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click' , function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id==='grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id==='white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id==='blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id==='yellow'){
//             body.style.backgroundColor = e.target.id;
//         }

//     });
// });

const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);/

buttons.forEach(function(button){
    console.log('button');
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target)

        //USING switch case
        switch (button) {
            case grey:
                body.style.backgroundColor = event.target.id ;
                
                break;
            case white:
                body.style.backgroundColor = event.target.id ;
                
                break;
            case blue:
                body.style.backgroundColor = event.target.id ;
                
                break;
            case yellow:
                body.style.backgroundColor = event.target.id ;
                
                break;
        
            default:
                break;
        }
    })
})