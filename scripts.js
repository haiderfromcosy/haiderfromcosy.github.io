let cosyLogo = document.querySelector('#cosy-logo');
let cosyFMLogo =document.querySelector('#cosy-fm-logo');
let haiderHaider = document.querySelector('#haiderHeader');


cosyLogo.addEventListener('mouseover', hoverOne);
cosyLogo.addEventListener('mouseout', hoverOneFinish)
cosyFMLogo.addEventListener('mouseover', hoverTwo);
cosyFMLogo.addEventListener('mouseout', hoverTwoFinish);



function hoverOne(){
    document.body.classList.add('red');
}

function hoverOneFinish(){
    document.body.classList.remove('red');
}

function hoverTwo(){
    document.body.classList.add('green');
}
function hoverTwoFinish(){
    document.body.classList.remove('green');
}

function hoverThree(){

}

function hoverFour(){

}