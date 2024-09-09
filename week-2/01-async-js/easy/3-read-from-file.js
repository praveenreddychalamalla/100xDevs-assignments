// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

var fs = require('fs');

function readFile(){
    fs.readFile("./sample.txt","utf-8",(error, data)=>{
        console.log(data);
        console.log("EOF");
    })
}

setTimeout(readFile,20000); // Printed lately
for (let i = 0; i < 1e2; i++) {
    // Prints the file content after the completion of for-loop. 
    // All the readFile calls are queued up in the callback queue from the Web APIs ( set time out calls - delegated to Web APIs )
    // After the completion of for-loop, the js thread becomes idle and picks readFile calls one-by-one from call back queue
    setTimeout(readFile,1); 
    console.log("In Loop");
}
