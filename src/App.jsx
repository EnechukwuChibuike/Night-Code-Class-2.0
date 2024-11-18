import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, [timer]);

  return (
    <main className="flex h-screen justify-center items-center text-4xl">
      {timer}
    </main>
  );
}

export default App;
