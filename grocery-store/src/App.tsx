import "./App.css";
import { Store } from "./components/Store";

function App() {
  return (
    <div className="grid grid-cols-3 h-screen antialiased overflow-hidden">
      <div className="sticky col-span-3 h-16 top-0 left-0 flex justify-center items-center bg-slate-800">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
          SmartShopper
        </span>
      </div>
      <div className="h-8 bg-slate-500 justify-center flex items-center col-start-2 col-span-2 rounded-lg m-4">
        Search
      </div>
      <div className="col-span-1 h-96 flex justify-center items-center bg-slate-100 rounded-lg m-4">
        Sidebar
      </div>
      <Store></Store>
    </div>
  );
}

export default App;
