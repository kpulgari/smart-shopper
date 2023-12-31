import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import { useSearchContext } from "../contexts/SearchContext";

interface SearchResult {
  name: string;
  price: string;
}

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [initialSearchResult, setInitialSearchResult] = useState<
    SearchResult[]
  >([]);
  const {
    setSearchResults,
    resetFilter,
    setIsSearchingFunction,
    setImageDataFunction,
  } = useSearchContext();

  const initialSearch = async () => {
    try {
      const { data, error } = await supabase.from("Product").select("*");

      if (error) {
        throw error;
      }

      if (data) {
        setInitialSearchResult(data);
        setSearchResults(data);
        resetFilter(data);
      }
    } catch (error) {
      console.error("Error searching!");
    }
  };

  const fetchImagesFromStorage = async () => {
    const images: Record<string, string> = {};
    const promises = initialSearchResult.map(async (item: SearchResult) => {
      try {
        const { data } = await supabase.storage
          .from("products")
          .download(`${item.name}.jpg`);

        if (data instanceof Blob) {
          const imageUrl = URL.createObjectURL(data);
          images[item.name] = imageUrl;
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    });

    await Promise.all(promises);
    setImageDataFunction(images);
  };

  useEffect(() => {
    initialSearch();
  }, []);

  useEffect(() => {
    fetchImagesFromStorage();
  }, [initialSearchResult.length]);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (searchText !== "") {
      setIsSearchingFunction(true);
      performSearch();
    } else if (initialSearchResult.length === 0) {
      initialSearch();
    } else {
      setIsSearchingFunction(true);
      setSearchResults(initialSearchResult);
      resetFilter(initialSearchResult);
    }

    const timeout = setTimeout(() => {
      setIsSearchingFunction(false);
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
        resetFilter(data);
      }
    } catch (error) {
      console.error("Error searching!");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="h-8 flex items-center col-start-2 col-span-2 rounded-lg justify-center w-1/2">
      <input
        type="text"
        className="rounded-xl mx-4 px-4 w-3/4 h-full"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        className="rounded-3xl font-bold font-s px-4 h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
        onClick={() => setSearchResults([])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Smart Search Icon"
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
          className="w-6 h-full"
        >
          <path d="m72.97,56.78l-15.81-6.9c-3.82-1.67-6.87-4.72-8.54-8.54l-6.9-15.81c-.54-1.23-2.27-1.23-2.81,0l-6.9,15.81c-1.67,3.82-4.72,6.87-8.54,8.54l-15.84,6.91c-1.22.53-1.23,2.27,0,2.81l16.11,7.12c3.81,1.69,6.85,4.75,8.5,8.58l6.68,15.51c.53,1.23,2.28,1.24,2.81,0l6.89-15.79c1.67-3.82,4.72-6.87,8.54-8.54l15.81-6.9c1.23-.54,1.23-2.27,0-2.81Z" />
          <path d="m92.76,26.84l-9.14-3.99c-2.21-.96-3.97-2.73-4.93-4.93l-3.99-9.14c-.31-.71-1.31-.71-1.62,0l-3.99,9.14c-.96,2.21-2.73,3.97-4.93,4.93l-9.15,3.99c-.71.31-.71,1.31,0,1.62l9.31,4.12c2.2.97,3.96,2.75,4.91,4.96l3.86,8.96c.31.71,1.32.71,1.63,0l3.98-9.12c.96-2.21,2.73-3.97,4.93-4.93l9.14-3.99c.71-.31.71-1.31,0-1.62Z" />
        </svg>
      </button>
    </div>
  );
};
