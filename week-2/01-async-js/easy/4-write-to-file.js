// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const { error } = require('console');
var fs=require('fs');

function writeToFile(file,data){
    fs.writeFile(file,data,{flag:"a+"},err=>{
        if(err){
            console.log(err);
        } else {
            console.log("Content Written to file " + file + " Successfully");
        }
    })
}

writeToFile("sample.txt","\nWritten from 4-write-to-file.js");
