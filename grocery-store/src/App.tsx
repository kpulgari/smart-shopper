import { useEffect } from "react";
import "./App.css";
import { Store } from "./components/Store";
import { setupInitialData } from "./services/supabaseSetup";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

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
      <Header></Header>
      <Cart></Cart>
      <Store></Store>
    </div>
  );
}

export default App;
