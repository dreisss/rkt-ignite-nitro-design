import "./App.css";
import Balance from "react-wrap-balancer";
import { Hero, Underline } from "./components";

function App() {
  return (
    <main>
      <Hero />

      <h1>
        <Balance>
          Craft pixel-perfect{" "}
          <span id="ui">
            UI
            <Underline />
          </span>{" "}
          experiences
        </Balance>
      </h1>
    </main>
  );
}

export default App;
