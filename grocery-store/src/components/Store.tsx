import React, { useState, useEffect } from "react";
import axios from "axios";

const data = [
  "apples",
  "bananas",
  "oranges",
  "grapes",
  "pizza",
  "hot dogs",
  "cumin",
];
const apiLink =
  "https://api.unsplash.com/search/photos/?client_id=Z6zar4LxhyFJ5xolagT3z90XoUr0SN_-VDQoQ1NYEtQ&query=";

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

  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />
      ))}
    </div>
  );
};
