// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.

function updateCounter(){
    count++;
    console.log("Timer Val: "+ count);
    setTimeout(updateCounter,1000);
}

var count =0;
updateCounter();