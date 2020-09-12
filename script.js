const fs = require('fs');

//Asynchronous way
fs.readFile('./hello.text', (err, data) =>{
    if(err){
        throw err;
    }

    console.log(data.toString('utf-8'));
})

//synchronous way
const file = fs.readFileSync('./hello.text');
console.log(file.toString());

//Append file
fs.appendFile('./hello.text' , ' This is additional info', err =>{
    if( err ){
        console.log(err)
    }
})

//Write

fs.writeFile('bye.text', 'See you soon', err => {
    if(err){
        console.log(err);
    }
})

//Delete
fs.unlink('./bye.text', err => {
    if(err){
        console.log(err);
    }
})