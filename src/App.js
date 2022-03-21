import "./styles.css";

export default function App() {
  // const numList = [
  //   { type: "odd", payload: 1 },
  //   { type: "odd", payload: 3 },
  //   { type: "odd", payload: 55 },
  //   { type: "even", payload: 22 },
  //   { type: "even", payload: 44 }
  // ];

  // const oddEvenReducer = (accum, value) =>
  //   value.type === "even"
  //     ? { ...accum, even: (accum.even += value.payload) }
  //     : { ...accum, odd: (accum.odd += value.payload) };

  // const output = numList.reduce(oddEvenReducer, { even: 0, odd: 0 });
  // console.log(output);

  return (
    <div className="App AppDoo">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
