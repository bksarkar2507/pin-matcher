function fourDigitPin(){
    let i = Math.round(Math.random() * 10000);
    console.log(typeof i);
}

document.getElementById('generate-button').addEventListener('click', function(){
    const displayPin = document.getElementById('displayGeneratePin');
    fourDigitPin();
});