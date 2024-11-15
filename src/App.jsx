import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [toggleMenu, setToggleMenu] = useState("hidden");
  return (
    <main className="flex h-screen">
      <Sidebar toggleMenu={toggleMenu} />

      <section className="w-full sm:w-[80%]">
        <Header setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        <Body />
      </section>
    </main>
  );
}

export default App;
