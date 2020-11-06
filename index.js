const http = require('http');

//create http server

let server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
