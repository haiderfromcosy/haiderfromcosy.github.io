let cosyLogo = document.querySelector('#cosy-logo');
let cosyFMLogo = document.querySelector('#cosy-fm-logo');
let haiderHaider = document.querySelector('#haiderHeader');
let changingWord = document.querySelector('#changing-word')

document.querySelectorAll('.links a').forEach( function(element){
    element.addEventListener('mouseover', function(){
        
        if ( element.id == "cosy-link" ) {
            changingWord.innerText = 'COSY';
            document.body.classList.add('red');

        } else if ( element.id == "youtube-link" ) {
            changingWord.innerText = 'COSY FM';
            document.body.classList.add('green');

        } else if ( element.id == "instagram-link" ) {
            changingWord.innerText = 'IG';
        } else if ( element.id == 'spotify-link' ){
            changingWord.innerText = 'Spotify';
        }

    }) 
    element.addEventListener('mouseout', function(){
        changingWord.innerText = '';
        document.body.classList.remove('red')
        document.body.classList.remove('green')
    })
} )