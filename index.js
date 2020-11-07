const http = require('http');
const express = require('express');

//create http server

let server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World'); 
        res.end();  
    }
    if (req.url === '/all'){
        res.write('This is a json with a list of all users'); 
        res.end();  
    }
    if (req.url === '/other'){
        res.write('Something else'); 
        res.end();  
    } 
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
