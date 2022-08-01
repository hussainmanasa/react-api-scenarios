import WithCounter from "./WithCounter";
import WithLoginData from "./WithLoginData";

const CounterA = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>Counter A</h1>
      <div>Logged In user is: {data?.name}</div>
      {props.children}
    </div>
  );
};

export default WithLoginData(CounterA);
