/**
 * returns:
 * 'finished function'
 * 'finished function'
 * 'click event!'
 */

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!'); //this gets added to the event queue and then executes ones the execution stack is complete/finished   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

