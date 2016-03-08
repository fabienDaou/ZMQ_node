var fs = require('fs');
var zmq = require('zmq');

// zmq socket: server to proxy
var proxyPullSocket = zmq.socket('pull');

proxyPullSocket.on('message', (message) => {
    console.info('[message]', message);
    
    var json = JSON.parse(message);
    
    if(json.client) {
        var filePath = './clientLog/client' + json.client + '.txt';
        fs.access(filePath, (err, stats) => {
            if(err.code == 'ENOENT') {
                console.info('[info]', 'no such file. Create one...');
                fs.writeFile(filePath, json.data, (err) => {
                    if(err) throw err;
                    console.info('[info]', 'Client', json.client, 'Message saved.');
                }); 
            }
        });
    }
});

proxyPullSocket.connect('tcp://127.0.0.1:2345');

