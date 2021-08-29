const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const port = 8000;

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  console.log("A new client connected!");
  ws.send("Welcome new Client!");

  ws.on("message", function incoming(message) {
    console.log("received %s", message);
    setTimeout(() => {
      ws.send("got your msg, it is: " + message);
    }, 2000);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
