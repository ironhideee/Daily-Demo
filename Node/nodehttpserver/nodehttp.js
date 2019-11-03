const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring')
const game = require('./game')
const express = require('express');

const app = express();

app.get('/favicon.icon', function (request, response) {
    response.status(200);
    return;
})
app.get('/game', function (request, response) {
    const parsedUrl = url.parse(request.url);
    const query = querystring.parse(parsedUrl.query);
    const playerAction = query.action;

    const gameResult = game(playerAction);

    if (winTime >= 3) {
        response.status(500);
        response.send('老子不玩了');
    }

    response.status(200);
    if (gameResult == 0) {
        response.send('平局');
    } else if (gameResult == 1) {
        response.send('你赢了');
        winTime++;
    } else {
        response.send('你输了');
    }
})
app.get('/', function (request, response) {
    response.status(200);
    fs.createReadStream(__dirname + '/index.html').pipe(response);
})

app.listen(3000);

let winTime = 0;

// http.createServer(function (request, response) {
//     const parsedUrl = url.parse(request.url);

//     if (request.url == '/favicon.ico') {
//         response.writeHead(200);
//         response.end();
//         return;
//     }

//     if (parsedUrl.pathname == '/game') {
//         const query = querystring.parse(parsedUrl.query);
//         const playerAction = query.action;

//         const gameResult = game(playerAction);

//         if (winTime >= 3) {
//             response.writeHead(500);
//             response.end('老子不玩了');
//         }

//         response.writeHead(200);
//         if (gameResult == 0) {
//             response.end('平局');
//         } else if (gameResult == 1) {
//             response.end('你赢了');
//             winTime++;
//         } else {
//             response.end('你输了');
//         }
//     }
//     if (parsedUrl.pathname == '/') {
//         fs.createReadStream(__dirname + '/index.html').pipe(response);
//     }
// }).listen(3000)