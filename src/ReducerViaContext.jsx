import { useCounter } from "./counter-context";

export const ReducerViaContext = () => {
  const { state, dispatch } = useCounter();
  //
  return (
    <>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
};

// const reducerFunc = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + action.payload;

//     case "decrement":
//       return state - action.payload;
//     default:
//       return state;
//   }
// };
// const [state, dispatch] = useReducer(reducerFunc, 0);
