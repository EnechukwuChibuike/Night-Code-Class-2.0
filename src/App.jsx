import "./App.css";
import { useState } from "react";

function App() {
  // let text = "hello";
  // const [variable, variableUpdater] = useState();
  const [text, setText] = useState("hello");
  const [num, setNum] = useState(0);

  const handleClick = () => {
    text === "hi" ? setText("hello") : setText("hi");
  };

  const increaseNum = () => {
    setNum(num + 1);
  };

  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <section>
        <h1 className="text-4xl">{text}</h1>
        <button className="bg-blue-600 text-white p-2" onClick={handleClick}>
          Click me
        </button>
      </section>

      <section>
        <h1 className="text-4xl">{num}</h1>
        <button className="bg-blue-600 text-white p-2" onClick={increaseNum}>
          Increase
        </button>
      </section>
    </main>
  );
}

export default App;
