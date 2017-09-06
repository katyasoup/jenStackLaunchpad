console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log('jq ready!');
    $('#requestButton').on('click', getFunky);
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