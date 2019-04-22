const path = require('path')
const os = require('os');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
// server.on ('connection', (socket) => {
//     console.log('New Connection...');
// });


server.listen(3000);

console.log('Listening on port 3000...');


const files = fs.readdir('./', function(err, files){
    if (err) console.log(err);
    else console.log(files);
});

var totalMem = os.totalmem();
var freeMem = os.freemem();

//ECAMScript 6
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);


//regiseter a listener
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('listener called' , arg);
}); 

logger.log('message');
