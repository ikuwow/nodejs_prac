// Webサーバーを建てる

var http = require('http'),
    fs = require('fs');
var server = http.createServer();

// .jsは層略可能
var settings = require('./settings');

server.on('request', function(req, res) {

    fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Not found');
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });

});

server.listen(settings.port, settings.post);
console.log(settings);

console.log("server listening...");

