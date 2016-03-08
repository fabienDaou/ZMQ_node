var WebSocket = require('websocket').server;

var http = require('http');
var httpServer = http.createServer();
httpServer.listen(1234, () => {
    console.log('[info] Listen on port 1234')
});

var wsServer = new WebSocket({
    httpServer: httpServer,
    autoAcceptConnections: false //CORS
});

function isOriginAllowed(origin) {
    console.info('[origin]', origin);
    return true;
}

wsServer.on('request', (request) => {
    if(isOriginAllowed(request.origin)) {
        var connection = request.accept('', request.origin);
        
        connection.on('message', (message) => {
            console.info('[message]', message); 
            if(message.type == 'utf8') {
                // forward message to server
                // message.utf8Data
            }
        });
        
        connection.on('close', (reason, description) => {
            console.info('[close]', reason, '/', description); 
        });
    }
});

