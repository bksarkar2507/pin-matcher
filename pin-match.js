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

document.getElementById('key-pad').addEventListener('click', function(){
    console.log('key pad is clicked');
});