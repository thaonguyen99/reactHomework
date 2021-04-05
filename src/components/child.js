import React from "react";

const Child = (props) => {
  //   const { message, onClickMessage } = props;
  const handleMessage = (message) => {
    // if (onClickMessage) {
    //   props.onClickMessage(message);
    // }
    props.onClickMessage(message);
  };
  return (
    <div>
      {props.message.length > 0 &&
        props.message.map((message, index) => {
          return (
            <p key={index} onClick={() => handleMessage(message)}>
              {message}
            </p>
          );
        })}
    </div>
  );
};

export default Child;
