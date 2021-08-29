function WebSocketServer(message) {
  const SERVER_URL = "ws://localhost:8000";

  // Create WebSocket connection.
  const socket = new WebSocket(SERVER_URL);

  // Connection opened
  socket.addEventListener("open", function (event) {
    console.log("Connection established");
  });

  // Listen for messages
  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });

  socket.send(message);
}

export default WebSocketServer