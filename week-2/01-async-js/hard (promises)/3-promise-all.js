/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    var p1 = wait1(t1*1000);
    var p2 = wait2(t2*1000);
    var p3 = wait3(t3*1000);
    var promises = [p1,p2,p3];
    return Promise.all(promises).then(values=> {
        const end = Date.now();
        return end-start;
    });
}

module.exports = calculateTime;
