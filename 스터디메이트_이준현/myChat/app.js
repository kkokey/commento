var http    = require('http');
var fs      = require('fs');

var server  =  http.createServer(function(request, response) {

    fs.readFile('loginPage.html', 'utf-8', function(error, data) {

        if(error) {
            response.writeHead(500,{'Content-Type' : 'text/html'});
            response.end('에러가 발생했습니다 : ' + error);
        } else {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        }
    })
})

server.listen(8080, function() {

    console.log('Server is running');
})