import WithCounter from "./WithCounter";

const CounterB = (props) => {
  const { count, increment, text } = props;
  return (
    <div>
      <h1>Counter B {text}</h1>
      <button onMouseOver={increment}>Hovered {count} times</button>
    </div>
  );
};

export default WithCounter(CounterB);
