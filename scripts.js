let cosyLogo = document.querySelector('#cosy-logo');
let cosyFMLogo = document.querySelector('#cosy-fm-logo');
let haiderHaider = document.querySelector('#haiderHeader');

document.querySelectorAll('.links a').forEach( function(element){
    element.addEventListener('mouseover', function(){
        console.log('hello');
    })
} )