import { useReducer } from "react";

export const BasicReducerHook = () => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload;

      case "decrement":
        return state - action.payload;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, 0);
  return (
    <>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        -
      </button>
    </>
  );
};
