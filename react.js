// React is JS library.It for building user interface.
// Front-End => what i see, 
// Back-End => logic, data , 

let number = 0;

const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const display = document.querySelector('.display')

button.addEventListener(('click'), () => {
    number++;
    display.textContent = number;
})

button2.addEventListener( ('click') , () => {
    number--;
    display.textContent = number;
})