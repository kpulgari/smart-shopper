import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextProps {
  children: ReactNode;
}
interface SearchResult {
  name: string;
  price: string;
}
interface SearchContextType {
  originalResults: SearchResult[];
  searchResults: SearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
  sortByName: (asc: boolean) => void;
  sortByPrice: (asc: boolean) => void;
  resetFilter: (results: SearchResult[]) => void;
  applyResetFilter: () => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [originalResults, setOriginalResults] = useState<SearchResult[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const setOriginalSearchResults = (results: SearchResult[]) => {
    setOriginalResults(results);
  };

  const sortByName = (asc: boolean) => {
    const sortedResults = [...searchResults].sort((a, b) => {
      if (asc) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSearchResults(sortedResults);
  };

  const sortByPrice = (asc: boolean) => {
    const sortedResults = [...searchResults].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return asc ? priceA - priceB : priceB - priceA;
    });
    setSearchResults(sortedResults);
  };

  const resetFilter = (results: SearchResult[]) => {
    console.log(results);
    setOriginalSearchResults(results);
  };

  const applyResetFilter = () => {
    setSearchResults(originalResults);
  };

  const contextValue: SearchContextType = {
    originalResults,
    searchResults,
    setSearchResults,
    sortByName,
    sortByPrice,
    resetFilter,
    applyResetFilter,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }

  return context;
};
