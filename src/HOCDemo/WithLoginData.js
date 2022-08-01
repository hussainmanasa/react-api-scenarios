import React, { useEffect, useState } from "react";
import { loginData } from "./loginData";

const WithLoginData = (WrappedComponent) => {
  const WithLoginData = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
      setData(loginData);
    }, [loginData]);

    return (
      <div>
        <WrappedComponent data={data} {...props} />
      </div>
    );
  };
  return WithLoginData;
};

export default WithLoginData;
