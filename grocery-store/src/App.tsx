import "./App.css";
import { Store } from "./components/Store";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { SetupInitialData } from "./services/supabaseSetup";

function App() {
  SetupInitialData();

  return (
    <div className="grid grid-cols-3 antialiased overflow-hidden gap-8">
      <Header></Header>
      <div className="col-span-1">
        <Cart></Cart>
      </div>
      <div className="col-span-2">
        <Store></Store>
      </div>
    </div>
  );
}

export default App;
