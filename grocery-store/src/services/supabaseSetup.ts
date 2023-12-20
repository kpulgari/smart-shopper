import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export async function SetupInitialData(): Promise<void> {
  const [searchResults, setSearchResults] = useState<object[]>([]);
  const itemsInCart = 143;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const { data, error } = await supabase.from("Product").select("*");

        if (error) {
          throw error;
        }

        if (data) {
          setSearchResults(data);
        }

        if (searchResults.length !== 0) {
          if (searchResults.length !== itemsInCart) {
            console.error("Not all items present!", searchResults.length);
          } else {
            console.log("All items present!");
          }
        }
      } catch (error) {
        console.error("Error setting up initial data:", error);
      }
    };

    fetchInitialData();
  }, [searchResults.length]);
}
