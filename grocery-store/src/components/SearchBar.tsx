import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<object[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      if (searchText !== "") {
        performSearch();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    setTypingTimeout(timeout);

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [searchText]);

  const performSearch = async () => {
    try {
      const { data, error } = await supabase
        .from("Product")
        .select("*")
        .ilike("name", `${searchText}%`);

      if (error) {
        throw error;
      }

      if (data) {
        setSearchResults(data);
      }
    } catch (error) {
      console.error("Error searching!");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="h-8 flex items-center col-start-2 col-span-2 rounded-lg m-4 justify-center w-1/2">
      <input
        type="text"
        className="rounded-lg mx-4 px-4 w-3/4 h-full"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        onClick={() => console.log(searchResults)}
      />
      <button
        className="bg-cyan-600 rounded-lg m-4 hover:bg-cyan-800 font-bold font-s px-4 h-full"
        onClick={() => setSearchResults([])}
      >
        🤖
      </button>
    </div>
  );
};
