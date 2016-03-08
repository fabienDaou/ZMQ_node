#ZMQ_node
The goal is to create a load-balancing system. 
##Scenario
Several clients (./client) send their requests (push-pull) to the server (./server).
Then the server (./server) forward them to available workers.
The workers feed back to the client when jod is done.

Message format sent by the client
{
    address: "tcp://<ipaddress>:<port>",
    data: "hycariss is trying out ZMQ"
}

Message format sent by workers
{
    success: "true"
}

##Client

##Proxy
Both endpoints have to know ZMQ or it wont work. This proxy will create a websocket connection to each client and forward it to the server.

##Server

##Workers
Workers are child processes started by the server.

##Plan

Ill start with client (simpler).