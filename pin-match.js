function fourDigitPin(){
    let i = Math.round(Math.random() * 10000);
    const displayPin = document.getElementById('displayGeneratePin');
    if(i > 1000){
        displayPin.value = i;
    }
    else{
        fourDigitPin();
    }
}

document.getElementById('generate-button').addEventListener('click', function(){
    fourDigitPin();
});

document.getElementById('key-pad').addEventListener('click', function(event){
    const typedNumber = event.target.innerText;
    const previousNumber = document.getElementById('typed-pin');

    if(isNaN(typedNumber)){
        if(typedNumber == 'C'){
            previousNumber.value = '';
        }
    }
    else{
        const previousNumberValue = previousNumber.value;

        const newNumber = previousNumberValue + typedNumber;
        previousNumber.value = newNumber;
    }
});

document.getElementById('submit-button').addEventListener('click', function(){
    console.log('submit button is clicked');
});