import "./App.css";
import CarList from "./CarList";
import List from "./List";

function App() {
  const condition = true;

  return (
    <main className="bg-gray-400 h-screen flex justify-center">
      {condition && <List />}
      {!condition && <CarList />}

      {/* Ternary operator */}
      {/* {condition ? <List /> : <CarList />} */}
    </main>
  );
}

export default App;
