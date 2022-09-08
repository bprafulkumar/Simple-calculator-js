var display = document.getElementById('btn-display');

let buttons = Array.from(document.querySelectorAll('.numbers'));
console.log(buttons)

// buttons.map( button => {
//     button.addEventListener('click', function(e){
//         console.log(e.target.innerText)
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });


// console.log(e.target.innerText)


buttons.forEach (buttons =>{
    buttons.addEventListener('click', function(e){
       switch (e.target.innerText) {
        case 'C':
            display.innerHTML = ''
            break;
        case '=':
            try{display.innerHTML = eval(display.innerText)
            }catch{
                display.innerHTML = 'Error!'
            }    
        break;
        default:
            display.innerHTML+= e.target.innerText
       }
    })
})