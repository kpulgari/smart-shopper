import "./App.css";
import { Store } from "./components/Store";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { SetupInitialData } from "./services/supabaseSetup";
import { SearchProvider } from "./contexts/SearchContext";
import { Cart } from "./components/Cart";

function App() {
  SetupInitialData();

  return (
    <SearchProvider>
      <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-indigo-300">
        <div className="grid grid-cols-3 antialiased lg:gap-8 gap-4">
          <div className="sticky top-0 z-50 col-span-3">
            <Header></Header>
          </div>
          <div className="col-span-1">
            <div className="fixed w-[32.5%]">
              <Filter></Filter>
            </div>
          </div>
          <div className="col-span-2">
            <Store></Store>
          </div>
          <div className="col-span-1">
            <div className="fixed w-[32.5%] lg:bottom-6 bottom-4 ">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
