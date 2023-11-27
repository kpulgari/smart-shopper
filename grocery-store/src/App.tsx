import { useEffect } from "react";
import "./App.css";
import { Store } from "./components/Store";
import { setupInitialData } from "./services/supabaseSetup";

function App() {
  useEffect(() => {
    setupInitialData()
      .then(() => {
        console.log("Initial data setup completed.");
      })
      .catch((error) => {
        console.error("Error setting up initial data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 h-screen antialiased overflow-hidden gap-8">
      <div className="sticky col-span-3 h-20 top-0 left-0 flex justify-between items-center bg-cyan-400">
        <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r bg-white mx-4">
          SmartShopper
        </span>
        <div className="h-8 flex items-center col-start-2 col-span-2 rounded-lg m-4 justify-center w-1/2">
          <input
            type="text"
            className="rounded-lg mx-4 px-4 w-3/4 h-full"
            placeholder="Search"
          />
          <button className="bg-cyan-600 rounded-lg m-4 hover:bg-cyan-800 font-bold font-s px-4 h-full">
            🤖
          </button>
        </div>
        <button className="bg-cyan-600 rounded-lg px-2 mx-4 hover:bg-cyan-800 h-8 text-white font-bold">
          Checkout
        </button>
      </div>
      <div className="col-span-1 h-128 bg-cyan-100 rounded-lg ml-4 mb-4 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col gap-4 m-4">
          <div className="bg-white h-12 flex justify-center items-center w-full rounded-lg font-bold text-xl">
            Cart
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white h-16 w-full flex justify-left items-center rounded-lg p-4 font-bold m-0">
              Row 1
            </div>
            <div className="bg-white h-16 w-full flex justify-left items-center rounded-lg p-4 font-bold m-0">
              Row 1
            </div>
          </div>
        </div>
      </div>
      <Store></Store>
    </div>
  );
}

export default App;
