import "./App.css";
import { Store } from "./components/Store";

function App() {
  return (
    <div className="grid grid-cols-3 h-screen antialiased overflow-hidden">
      <div className="sticky col-span-3 h-16 top-0 left-0 flex justify-between items-center bg-slate-800">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300 mx-4">
          SmartShopper
        </span>
        <button className="bg-slate-100 rounded-lg px-2 mx-4 hover:bg-slate-400">
          🛒
        </button>
      </div>
      <div className="h-8 bg-slate-200 flex items-center col-start-2 col-span-2 rounded-lg m-4 justify-center">
        <input
          type="text"
          className="rounded-lg mx-4 px-4 w-1/2"
          placeholder="Search"
        />
        <button className="bg-slate-400 rounded-lg m-4 hover:bg-slate-500 font-bold font-s px-4">
          🤖
        </button>
      </div>
      <div className="col-span-1 h-128 flex justify-center items-center bg-slate-100 rounded-lg mx-4 mb-4">
        Sidebar
      </div>
      <Store></Store>
    </div>
  );
}

export default App;
