import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

const WsTest = () => {
  const [data, setData] = useState("初期値");
  const [userId, setUserId] = useState("your-user-id");
  // 参加者用のテストルーム
  const [testRoomId, setTestRoomId] = useState("test-room");

  // ==================== 部屋作成 ====================
  const handleCreateRoomClick = () => {
    console.log("handleCreateRoomClick");
    // サーバへ送信
    const createRoomMessage = {
      userId: userId,
      username: "your-username",
    };
    socket.emit("req_createRoom", createRoomMessage);
  };

  const res_createRoom = userId;
  socket.on(res_createRoom, (data) => {
    console.log("res_createRoom", data);
    // dataをjsonで同じstateにセット
    setData(JSON.stringify(data));
    setTestRoomId(data.roomId);
    console.log("testRoomId", testRoomId);
  });

  // ==================== 部屋参加 ====================
  const handleJoinRoomClick = () => {
    console.log("handleJoinRoomClick");
    // サーバへ送信
    const joinRoomMessage = {
      userId: "joinTestUserId",
      username: "joinTestUser",
      roomId: testRoomId,
    };
    socket.emit("req_joinRoom", joinRoomMessage);
  };

  const res_joinRoom = testRoomId;
  socket.on(res_joinRoom, (data) => {
    console.log("res_joinRoom", data);
    setData(JSON.stringify(data));
  });

  return (
    <div>
      <h2>WebSocket</h2>
      <button onClick={() => handleCreateRoomClick()}>部屋作成</button>
      <div>{data}</div>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => handleJoinRoomClick()}>部屋参加</button>
    </div>
  );
};

export default WsTest;
