const fs=require('fs');
const write=(data)=>{
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err)
            console.log("Error writing file",err);
        else
        console.log("file written successfully");
    });
}
console.log("before write")
write("I add new data");
console.log("after writing")