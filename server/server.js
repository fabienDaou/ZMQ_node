var fs = require('fs');
var zmq = require('zmq');

// zmq socket: server to proxy
var proxyPullSocket = zmq.socket('pull');

proxyPullSocket.on('message', (message) => {
    var json = JSON.parse(message);
    console.info('[message]', json);
    
    if(json.client !== undefined) {
        var filePath = './clientLog/client' + json.client + '.txt';
        fs.writeFile(filePath, json.data, (err) => {
            if(err) throw err;
            console.info('[info]', 'Client', json.client, 'Message saved.');
        }); 
    }
});

proxyPullSocket.connect('tcp://127.0.0.1:2345');

