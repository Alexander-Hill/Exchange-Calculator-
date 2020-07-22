
// what do we need to bring in from the DOM


const option1 = document.getElementById('currency-one');
const input1 = document.getElementById('amount-one');
const option2 = document.getElementById('currency-two');
const input2 = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap')
const invisDiv = document.getElementById('rate');



// what is the function that we will be using for everything

function CheckThisOut() {

     const selectOption1 = option1.value;
     const selectOption2 = option2.value;
    
    





// we should go grab the API
 fetch(`https://v6.exchangerate-api.com/v6/1ef7d48bd5e22f0b6bf2f2b4/latest/${selectOption1}`)
 .then(res => res.json())
 .then(data => {

    const rate = data.conversion_rates[selectOption2];

       invisDiv.innerText = `1 ${selectOption1} = ${rate} ${selectOption2}`;

    input2.value = (input1.value * rate);
 })



};


// lets add the event listeners

option1.addEventListener('change', CheckThisOut);
input1.addEventListener('input', CheckThisOut);
option2.addEventListener('change', CheckThisOut);
input2.addEventListener('input', CheckThisOut);
















//always wait to call the function in order
CheckThisOut();

