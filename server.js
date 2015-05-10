// Webサーバーを建てる

var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');
var server = http.createServer();


// これはブロッキングな命令
// リクエストを待ち受ける前の命令だからよし。
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');

// .jsは層略可能
var settings = require('./settings');
var n = 0;

server.on('request', function(req, res) {

    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>world</string>",
        n: n
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

});

server.listen(settings.port, settings.post);
console.log(settings);

console.log("server listening...");

