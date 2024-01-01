import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextProps {
  children: ReactNode;
}

interface SearchResult {
  name: string;
  price: string;
}

interface CartItem {
  name: string;
  quantity: number;
  totalPrice: number;
  image: string;
}
interface SearchContextType {
  originalResults: SearchResult[];
  searchResults: SearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
  sortByName: (asc: boolean) => void;
  sortByPrice: (asc: boolean) => void;
  resetFilter: (results: SearchResult[]) => void;
  applyResetFilter: () => void;
  sortByNameAndPrice: (priceAsc: boolean, nameAsc: boolean) => void;
  sortByPriceAndName: (priceAsc: boolean, nameAsc: boolean) => void;
  setIsSearchingFunction: (searching: boolean) => void;
  checkIsSearching: () => boolean;
  setImageDataFunction: (images: Record<string, string>) => void;
  getImageData: () => Record<string, string>;
  checkImagesLoading: () => boolean;
  setCartDataFunction: (item: CartItem) => void;
  getCartData: () => CartItem[];
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [originalResults, setOriginalResults] = useState<SearchResult[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [imageData, setImageData] = useState<Record<string, string>>({});
  const [cartData, setCartData] = useState<CartItem[]>([]);

  const setCartDataFunction = (item: CartItem) => {
    const existingItemIndex = cartData.findIndex(
      (element) => element.name === item.name
    );

    if (existingItemIndex !== -1) {
      const updatedCartData = [...cartData];
      updatedCartData[existingItemIndex].quantity += 1;
      updatedCartData[existingItemIndex].totalPrice = parseFloat(
        (
          updatedCartData[existingItemIndex].totalPrice + item.totalPrice
        ).toFixed(2)
      );

      setCartData(updatedCartData);
    } else {
      setCartData([
        ...cartData,
        {
          ...item,
          quantity: 1,
          totalPrice: parseFloat(item.totalPrice.toFixed(2)),
        },
      ]);
    }
  };

  const getCartData = () => {
    return cartData;
  };

  const setImageDataFunction = (images: Record<string, string>) => {
    setImageData(images);
  };

  const checkImagesLoading = () => {
    return Object.keys(imageData).length === 0;
  };

  const getImageData = () => {
    return imageData;
  };

  const setOriginalSearchResults = (results: SearchResult[]) => {
    setOriginalResults(results);
  };

  const setIsSearchingFunction = (searching: boolean) => {
    setIsSearching(searching);
  };

  const checkIsSearching = () => {
    return isSearching;
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

  const sortByPriceAndName = (priceAsc: boolean, nameAsc: boolean) => {
    const sortedResults = [...searchResults].sort((a, b) => {
      const priceComparison = parseFloat(a.price) - parseFloat(b.price);
      if (priceComparison === 0) {
        if (nameAsc) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
      return priceAsc ? priceComparison : -priceComparison;
    });
    setSearchResults(sortedResults);
  };

  const sortByNameAndPrice = (priceAsc: boolean, nameAsc: boolean) => {
    const sortedResults = [...searchResults].sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
      if (nameComparison === 0) {
        const priceComparison = parseFloat(a.price) - parseFloat(b.price);
        return priceAsc ? priceComparison : -priceComparison;
      }
      return nameAsc ? nameComparison : -nameComparison;
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
    sortByPriceAndName,
    sortByNameAndPrice,
    setIsSearchingFunction,
    checkIsSearching,
    setImageDataFunction,
    getImageData,
    checkImagesLoading,
    setCartDataFunction,
    getCartData,
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
