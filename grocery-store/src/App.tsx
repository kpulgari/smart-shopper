import "./App.css";
import { Store } from "./components/Store";

function App() {
  return (
    <div className="grid grid-cols-3 h-screen antialiased overflow-hidden gap-8">
      <div className="sticky col-span-3 h-20 top-0 left-0 flex justify-between items-center bg-indigo-400">
        <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r bg-white mx-4">
          SmartShopper
        </span>
        <div className="h-8 flex items-center col-start-2 col-span-2 rounded-lg m-4 justify-center w-1/2">
          <input
            type="text"
            className="rounded-lg mx-4 px-4 w-3/4 h-full"
            placeholder="Search"
          />
          <button className="bg-indigo-600 rounded-lg m-4 hover:bg-indigo-800 font-bold font-s px-4 h-full">
            🤖
          </button>
        </div>
        <button className="bg-indigo-100 rounded-lg px-2 mx-4 hover:bg-indigo-300 h-8">
          🛒
        </button>
      </div>
      <div className="col-span-1 h-128 flex justify-center items-center bg-indigo-100 rounded-lg ml-4 mb-4">
        Cart Items
      </div>
      <Store></Store>
    </div>
  );
}

export default App;
