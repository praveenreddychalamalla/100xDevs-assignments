// Create a counter in JavaScript

// Code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function updateCounter(){
    count++;
    console.log("Timer Val: "+ count);
}
function createCounter(){
    var count = 0;
    setInterval(updateCounter,1000);
}
var count =0;
createCounter();
