import React, { useEffect } from "react";

const WsTest = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000");

    socket.addEventListener("open", function (event) {
      console.log("サーバーへの接続成功");
    });

    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });

    const handleButtonClick = () => {
      socket.send("hello from client");
    };

    const button = document.getElementById("button");
    button?.addEventListener("click", handleButtonClick);

    return () => {
      // Clean up WebSocket connection when component unmounts
      socket.close();
    };
  }, []);

  return <input type="button" id="button" value="データの送信" />;
};

export default WsTest;
