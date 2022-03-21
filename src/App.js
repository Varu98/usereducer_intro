import { BasicReducerHook } from "./BasicReducerHook";
import { ReducerViaContext } from "./ReducerViaContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App AppDoo">
      {/* <BasicReducerHook /> */}
      <ReducerViaContext />
    </div>
  );
}
