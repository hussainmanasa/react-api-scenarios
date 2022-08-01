import logo from "./logo.svg";
import "./App.css";
// import { DemoApi } from "./components/DemoApi";
import { lazy, Suspense } from "react";

const DemoApi = lazy(() => import("./components/DemoApi"));
const CounterA = lazy(() => import("./HOCDemo/CounterA"));
const CounterB = lazy(() => import("./HOCDemo/CounterB"));
const UndoFunctionality = lazy(() => import("./components/UndoFunctionality"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Page is loading...</div>}>
        <DemoApi />
        <CounterA>
          <h1>Name:</h1>
          <h1>Name:</h1>
        </CounterA>
        <CounterB text="Test" />
        <UndoFunctionality />
      </Suspense>
    </div>
  );
}

export default App;
