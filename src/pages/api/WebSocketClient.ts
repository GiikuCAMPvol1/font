import WebSocket from "ws";

const WebSocketClient = new WebSocket("ws://localhost:8000");

// Handle incoming messages
WebSocketClient.onmessage = (event) => {
  console.log("Received message:", event.data);
};

// Send a message to the server
WebSocketClient.send("Hello, server!");

export default WebSocketClient;

// const createWebSocketConnection = (roomId: string) => {
//   const socket = io(`http://localhost:8000/room-users/${roomId}/ws`, {
//     transports: ["websocket"],
//   });

//   socket.on("connect", () => {
//     console.log("WebSocket connection established");
//   });

//   socket.on("message", (message) => {
//     console.log("Received data from server:", message);
//     // Handle received data appropriately
//   });

//   socket.on("disconnect", () => {
//     console.log("WebSocket connection closed");
//   });

//   socket.on("error", (error) => {
//     console.error("WebSocket error:", error);
//   });

//   return socket;
// };

// export default createWebSocketConnection;
