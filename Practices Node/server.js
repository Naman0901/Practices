var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            name: 'naman', job: 'NInja', age: 21
        };
        res.end(JSON.stringify(obj));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = [{
            name: 'naman', job: 'NInja', age: 21
        }, { name: 'Man', job: 'Py', age: 21 }];
        res.end(JSON.stringify(obj));
    }

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');

