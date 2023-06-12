import React, { useEffect, useRef, useState } from "react";

const WsTest = () => {
  const socketRef = useRef<WebSocket>();
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8000");
    socketRef.current.onopen = () => {
      setIsConnected(true);
    };
    socketRef.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      console.log(message);
    };
    socketRef.current.onclose = () => {
      setIsConnected(false);
    };
    return () => {
      socketRef.current?.close();
    };
  }, []);

  const handleCreateRoomClick = () => {
    const createRoomMessage = {
      type: "createRoom",
      payload: {
        userId: "your-user-id",
        username: "your-username",
      },
    };
    socketRef.current?.send(JSON.stringify(createRoomMessage));
  };

  return (
    <div>
      <h2>WebSocket is connected : {`${isConnected}`}</h2>
      <button onClick={handleCreateRoomClick}>部屋作成</button>
    </div>
  );
};

export default WsTest;
