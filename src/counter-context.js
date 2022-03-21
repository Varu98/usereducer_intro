import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  //Reducer Function
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log("add");
        return { counter: state.counter + 1 };

      case "DECREMENT":
        console.log("add");
        return { counter: state.counter - 1 };

      default:
        console.log("Error");
    }
  };

  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { useCounter, CounterProvider };
