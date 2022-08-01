import { useReducer } from "react";

const initialState = {
  value: "",
  history: [""],
};

const undoTextReducer = (state, { type, payload }) => {
  console.log(type, state);
  switch (type) {
    case "change":
      return {
        value: payload,
        history: [...state.history, payload],
      };
    case "undo":
      if (state.history.length !== 0) state.history.pop();
      else state.history = [""];
      return {
        value: state.history[state.history.length - 1],
        history: state.history,
      };
    default:
      throw new Error("Invalid action: " + type);
  }
};

const UndoFunctionality = () => {
  const [state, dispatch] = useReducer(undoTextReducer, initialState);
  const handleChange = (e) =>
    dispatch({ type: "change", payload: e.target.value });

  const handleUndo = () => dispatch({ type: "undo" });

  return (
    <div>
      <input type={"text"} value={state.value} onChange={handleChange} />
      <input type={"button"} value={"Undo"} onClick={handleUndo} />
    </div>
  );
};

export default UndoFunctionality;
