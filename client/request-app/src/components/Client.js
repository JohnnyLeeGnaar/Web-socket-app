import React, { useState, useEffect } from "react";

import ServerRequestBar from "./ServerRequestBar";
import ServerFeed from "./ServerFeed"

const SERVER_URL = "ws://localhost:8000";
const socket = new WebSocket(SERVER_URL);

const Client = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");


  const onChangeHandler = (msg) => {
    setMessage(msg);
  };

  useEffect(() => {
    socket.addEventListener("open", function (event) {
      console.log("Connection established");
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
      setResponse(event.data);
    });
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    socket.send(message);
  };

  return (
    <>
      <div className="flex-wrapper">
        <ServerRequestBar
          changeMessage={onChangeHandler}
          sendMessage={onClickHandler}
        ></ServerRequestBar>
        <ServerFeed response={response}></ServerFeed>
      </div>
    </>
  );
};

export default Client;
