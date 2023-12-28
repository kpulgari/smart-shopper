import { useState, useEffect } from "react";
import { unsplashKey } from "../config/config";
import { useSearchContext } from "../contexts/SearchContext";
import "../styles/Store.css";

import axios from "axios";
// Need to store images somewhere so dont have to rerequest them

const apiLink = `https://api.unsplash.com/search/photos/?client_id=${unsplashKey}&query=`;

interface ImageData {
  urls: {
    small: string;
  };
}
interface SearchResult {
  name: string;
  price: string;
}

export const Store = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [itemsArray, setItemsArray] = useState<SearchResult[]>([]);
  const { searchResults } = useSearchContext();

  useEffect(() => {
    const fetchData = async () => {
      const promises = searchResults.map(async (item: SearchResult) => {
        try {
          const response = await axios.get<{ results: ImageData[] }>(
            apiLink + `${item["name"]}`
          );
          const imageUrl = response.data.results[0]?.urls.small;
          return imageUrl || "";
        } catch (error) {
          console.error("Error fetching image:", error);
          return "";
        }
      });

      const urls = await Promise.all(promises);
      setImageUrls(urls);
    };

    const setData = async () => {
      const itemsData = searchResults.map((item) => ({
        name: item.name,
        price: item.price,
      }));

      setItemsArray(itemsData);
    };

    fetchData();
    setData();
  }, [searchResults]);

  if (imageUrls.length === 0) {
    return (
      <div className="flex justify-center items-center mr-4 text-center ">
        <p className="text-xl font-bold bg-black text-white p-6 rounded-2xl">
          No results found! Search for items using search bar above.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap overflow-y-auto justify-center">
      {imageUrls.map((imageUrl, index) => {
        const productName = itemsArray[index]?.name;
        const truncatedName =
          productName && productName.length > 11
            ? productName.substring(0, 8).trim() + "..."
            : productName;

        return (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-xl mx-2 mb-4"
          >
            <img
              className="lg:w-52 lg:h-52 w-32 h-32 object-cover"
              src={imageUrl}
              alt={`Image ${index}`}
            />
            <div className="px-4 py-4 flex items-center text-xs justify-between text-white bg-black lg:text-lg custom-cursor">
              <div className="font-bold" title={productName}>
                {truncatedName}
              </div>
              <div className="font-light">{itemsArray[index]?.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
