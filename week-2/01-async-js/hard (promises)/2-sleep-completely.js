/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function makeThreadBusy(milliseconds){
    var currentTime = Date.now();
    var delayedTime = currentTime+milliseconds;
    while (currentTime < delayedTime) {
        // busy wait - do nothing - no op, but keep the thread busy executing loop
        currentTime = Date.now();
    }
}

function sleep(milliseconds) {
    const p = new Promise((resolve) => {
        makeThreadBusy(milliseconds);
        resolve();
    });
    return p;
}

module.exports = sleep;
