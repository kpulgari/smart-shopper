import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextProps {
  children: ReactNode;
}
interface SearchResult {
  name: string;
  price: string;
}
interface SearchContextType {
  searchResults: SearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const contextValue: SearchContextType = {
    searchResults,
    setSearchResults,
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
