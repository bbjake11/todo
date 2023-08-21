import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const lastName = "Sullano";
  const firstName = "Brandon Jake";

  return (
    <>
      <Header lastname={lastName} firstName={firstName} />
    </>
  );
}

export default App;
