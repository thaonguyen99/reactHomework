import React from "react";
import Child from "./child";

const Parent = () => {
  const messageList = ["a", "b"];

  const actionList = (message) => {
    console.log(message);
  };

  return <Child message={messageList} onClickMessage={actionList} />;
};

export default Parent;
