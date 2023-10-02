import React from "react";

const AlertMessage = ({ type, kind }) => {
  const message = {
    primary: `It's perfect this measurements to ${kind}`,
    warning: `It's necessary to redo measurement to ${kind}`,
    danger: `Time limit to redo the measurement to the ${kind} `,
  };
  return (
    <>
      <div className={`alert alert-${type}`} role="alert">
        {message[type]}
      </div>
    </>
  );
};

export default AlertMessage;
