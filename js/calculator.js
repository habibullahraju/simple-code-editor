document.getElementById('btn-bold').addEventListener('click', function(){
    const textAreaFeld = document.getElementById('text-area-feld')
   
 if ((textAreaFeld.style.fontWeight == 'bold')) {
    textAreaFeld.style.fontWeight = 'normal'
 }
 else{
    textAreaFeld.style.fontWeight = 'bold'
 }

    
});

document.getElementById('btn-italic').addEventListener('click', function(){
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.fontStyle == 'italic') {
        textAreaFeld.style.fontStyle = 'normal';
    }
    else{
        textAreaFeld.style.fontStyle = 'italic';
    }
});

document.getElementById('btn-underline').addEventListener('click', function () {
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.textDecoration == 'underline') {
        textAreaFeld.style.textDecoration = 'none';
    }
    else{
        textAreaFeld.style.textDecoration = 'underline';
    }
});

document.getElementById('btn-left-align').addEventListener('click', function(){
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.textAlign== 'left') {
        textAreaFeld.style.textAlign = 'normal';
    }
    else{
        textAreaFeld.style.textAlign = 'left';
    }
});
document.getElementById('btn-center-align').addEventListener('click', function(){
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.textAlign == 'center') {
        textAreaFeld.style.textAlign = 'normal';
    }
    else{
        textAreaFeld.style.textAlign = 'center';
    }
});
document.getElementById('btn-right-align').addEventListener('click', function(){
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.textAlign == 'right') {
        textAreaFeld.style.textAlign = "normal";        
    }
    else{
        textAreaFeld.style.textAlign = 'right';
    }
});
document.getElementById('btn-justify-align').addEventListener('click', function () {
    const textAreaFeld = document.getElementById('text-area-feld');
    if (textAreaFeld.style.textAlign == 'justify') {
        textAreaFeld.style.textAlign = 'normal';
    }
    else{
        textAreaFeld.style.textAlign = 'justify';

    }
});
document.getElementById('increase-font').addEventListener('click' ,function (e) {
        const increaseValue = document.getElementById('increase-font');
        const value = increaseValue.value;
        if (value < 10) {
            alert('Please Enter a value > 10')
            return 
        }
        const textAreaFeld = document.getElementById('text-area-feld');
        textAreaFeld.style.fontSize = value + 'px'
});

document.getElementById('btn-color').addEventListener('blur', function(){
    const textAreaFeld = document.getElementById('text-area-feld');
    const colorValue = document.getElementById('btn-color').value;
    
    textAreaFeld.style.color = colorValue;
    window.addEventListener("load", startup, false);
})
// function font(e){
//     let value = e.value;
//     const textAreaFeld =  document.getElementById('text-area-feld');
//     textAreaFeld.style.fontSize = value + "px";
// }























// const textAreaFeld = document.getElementById('text-area-feld')

// function f1() {
//     if (textAreaFeld.style.fontWeight == 'bold') {
//         textAreaFeld.style.fontWeight = 'normal';
//     }
//     else{
//         textAreaFeld.style.fontWeight = 'bold'
//     }
// }