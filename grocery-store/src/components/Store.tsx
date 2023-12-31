import { useState, useEffect } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import "../styles/Store.css";

interface SearchResult {
  name: string;
  price: string;
}

export const Store = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [itemsArray, setItemsArray] = useState<SearchResult[]>([]);
  const [imagesLoading, setImagesLoading] = useState(false);
  const { searchResults, checkIsSearching, getImageData, checkImagesLoading } =
    useSearchContext();

  useEffect(() => {
    setImagesLoading(checkImagesLoading());
  }, [checkImagesLoading]);

  useEffect(() => {
    const getImages = async () => {
      const data = getImageData();

      const promises = searchResults.map(async (item: SearchResult) => {
        try {
          return data[item.name];
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

    getImages();
    setData();
  }, [searchResults, imagesLoading]);

  if (imageUrls.length === 0 && !checkIsSearching() && !imagesLoading) {
    return (
      <div className="flex justify-center items-center mr-4 text-center">
        <p className="text-xl font-bold bg-black text-white p-6 rounded-2xl shadow-2xl shadow-black">
          No results found! Search for items using search bar above.
        </p>
      </div>
    );
  }

  if (imagesLoading) {
    return (
      <div className="flex justify-center items-center mr-4 text-center">
        <p className="text-xl font-bold bg-black text-white p-6 rounded-2xl shadow-2xl shadow-black flex flex-row items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading
        </p>
      </div>
    );
  }

  if (checkIsSearching()) {
    return (
      <div className="flex justify-center items-center mr-4 text-center">
        <p className="text-xl font-bold bg-black text-white p-6 rounded-2xl shadow-2xl shadow-black flex flex-row items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Searching
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
            className="max-w-sm active:scale-95 transition-scale duration-200 ease-in-out rounded-xl overflow-hidden bg-black shadow-md shadow-black mx-2 mb-4 border-2 border-black"
          >
            <img
              className="lg:w-52 lg:h-52 w-36 h-36 object-cover"
              src={imageUrl}
              alt={`Image ${index}`}
            />
            <div className="p-4 flex items-center text-xs justify-between text-white lg:text-lg">
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
