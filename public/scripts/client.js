console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log('jq ready!');
    $('#requestButton').on('click', getFunky);
    extraFunky();
}

function getFunky() {
    console.log('in getFunky');
    $.ajax({
        type: 'GET',
        url: '/funky',
        success: function(response) {
            console.log('your funky response:', response);
        }
    });   
}

function extraFunky() {
    $.ajax({
        type: 'GET',
        url: '/groovy',
        success: function(response) {
            console.log('groovin!', response);
        }
    });
}