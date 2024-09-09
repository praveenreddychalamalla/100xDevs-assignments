/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const p = new Promise((resolve)=>{
        setTimeout(resolve,t);
    });
    return p;
}

function wait2(t) {
    const p = new Promise((resolve)=>{
        setTimeout(resolve,t);
    });
    return p;
}

function wait3(t) {
    const p = new Promise((resolve)=>{
        setTimeout(resolve,t);
    });
    return p;
}

async function promiseChain(t1,t2,t3){
    const start = Date.now();
    await wait1(t1*1000);
    await wait2(t2*1000);
    await wait3(t3*1000);
    
    const end = Date.now();
    return end-start;

}
function calculateTime(t1, t2, t3) {
    return promiseChain(t1,t2,t3);
}

module.exports = calculateTime;
