// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       Praveen
// ```

// After the program runs, the output should be

// ```
// hello world my name is Praveen
// ```

var fs = require('fs');

function cleanFile(file){
    fs.readFile(file,"utf-8",(error, data)=>{
        data = data.replace(/\s+/g, ' ');
        fs.writeFile(file,data,err=>{
            if(err){
                console.log(err);
            } else {
                console.log("Content Written to file " + file + " Successfully");
            }
        })
    })
}
cleanFile("./sample.txt");
