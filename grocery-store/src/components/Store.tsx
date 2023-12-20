import { useState, useEffect } from "react";
import { unsplashKey } from "../config/config";

import axios from "axios";
// Need to store images somewhere so dont have to rerequest them

const data: string[] = ["apple"];

const apiLink = `https://api.unsplash.com/search/photos/?client_id=${unsplashKey}&query=`;

interface ImageData {
  urls: {
    small: string;
  };
}

export const Store = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = data.map(async (item) => {
        try {
          const response = await axios.get<{ results: ImageData[] }>(
            apiLink + `${item}`
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

    fetchData();
  }, []);

  if (imageUrls.length === 0) {
    return (
      <div className="flex justify-center items-center mr-4">
        <p className="text-xl font-bold bg-cyan-100 p-4 rounded">
          No results found! Search for items using search bar above.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap overflow-y-auto justify-center">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-md mx-2 mb-4"
        >
          <img
            className="lg:w-52 lg:h-52 w-32 h-32 object-cover"
            src={imageUrl}
            alt={`Image ${index}`}
          />
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="font-bold text-l">{data[index]}</div>
            <button className="text-xl bg-cyan-100 px-2 rounded-lg hover:bg-cyan-300 ">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
