import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [num, setNum] = useState(0);

  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-3xl">{num}</h1>
      <Button ButtonText="click" setNum={setNum} num={num} />
    </main>
  );
}

export default App;
