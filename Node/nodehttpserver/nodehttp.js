const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring')
const game = require('./game')

let winTime = 0;

http.createServer(function(request,response){
    const parsedUrl = url.parse(request.url);

    if (request.url == '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return;
    }

    if (parsedUrl.pathname == '/game') {
        const query = querystring.parse(parsedUrl.query);
        const playerAction = query.action;

        const gameResult = game(playerAction);

        if (winTime>=3) {
            response.writeHead(500);
            response.end('老子不玩了');
        }

        response.writeHead(200);
        if (gameResult == 0) {
            response.end('平局');
        }else if(gameResult == 1){
            response.end('你赢了');
            winTime++;
        }else {
            response.end('你输了');
        }
        
    }
    
    if (parsedUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
}).listen(3000)