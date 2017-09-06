console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log('jq ready!');
    $('#requestButton').on('cick', getFunky)
}

function getFunky() {
    console.log('in getFunky');
    
}