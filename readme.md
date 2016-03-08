#ZMQ_node
The goal is to create a load-balancing system. 

##Scenario
Several clients (./client) are connected to a proxy (./proxy). The proxy will forward their message to the server (./server) using the push-pull pattern.
The server will store the messages in specific files

Message format sent by the client
<pre>
{
    client: <number>,
    data: "hycariss is trying out ZMQ"
}
</pre>
##Client
Using W3C websockets to connect to proxy (./proxy)

##Proxy
Both endpoints have to know ZMQ or it will not work. This proxy will create a websocket connection to each client and forward it to the server.

##Server
Storing message from client in specific files.

##Plan
Ill start with client (simpler).