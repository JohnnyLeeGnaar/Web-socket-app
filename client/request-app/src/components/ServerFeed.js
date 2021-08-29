import React from "react";

const ServerFeed = (props) => {
  const { response } = props;
  return (
    <div className="canvas">
      <h3>{response}</h3>
    </div>
  );
};

export default ServerFeed;
