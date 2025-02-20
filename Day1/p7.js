const fs=require('fs');
const data="I am append data"
fs.appendFile("./data.txt",data,(err) => {
    if(err)
        console.log(err);
    console.log("Data append!");
});