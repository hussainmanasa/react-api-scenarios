import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  };
  return WithCounter;
};

export default WithCounter;
