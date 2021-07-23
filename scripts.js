let cosyLogo = document.querySelector('#cosy-logo');
let cosyFMLogo = document.querySelector('#cosy-fm-logo');
let haiderHaider = document.querySelector('#haiderHeader');

document.querySelectorAll('.links a').forEach( function(element){
    element.addEventListener('mouseover', function(){
        
        if ( element.id == "cosy-link" ) {
            alert('I just hovered over COSY')
        } else if ( element.id == "youtube-link" ) {
            alert('YouTube Link')
        } else if ( element.id == "instagram-link" ) {
            alert('Instagram Link')
        } else if ( element.id == 'spotify-link' ){
            alert('Spotify link')
        }

    })
} )