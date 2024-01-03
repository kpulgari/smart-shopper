# SmartShopper

SmartShopper is a grocery store application designed to simplify your shopping experience. With a user-friendly interface and easy-to-use features, it aims to enhance the way you shop for groceries online. App comprises a collection of 140+ products integrated with images fetched through the Unsplash API.

![Screenshot 1](https://github.com/kpulgari/smart-shopper/assets/90290549/4f027e19-9531-4cbb-ba60-cbf27a965508)

## Features

- **Multi-sorting:** Sort products based on various criteria for convenient browsing.
- **Search Bar:** Quickly find desired products using the search functionality.
- **Functioning Cart:** Add products to the cart and manage items.
- **AI-powered Search (Upcoming):** Future plans include implementing AI for easier product search.

## Technologies Used

- **React**
- **Tailwind**
- **Vite** 
- **Supabase**

## Setup Instructions

To set up SmartShopper, follow these steps:

1. **Set up Supabase Database:**
   - Create a Supabase database named "Product" with columns "name" and "price".
   - Populate the database by copying and pasting the contents of the "data.txt" file from the public folder into the database.

2. **Configure Client Settings:**
   - Copy and paste your Supabase URL and Supabase key into the appropriate fields in the clientConfig.ts file.
   - Obtain an Unsplash API key and insert it into the clientConfig.ts file.

3. **Image Caching with Supabase Bucket:**
   - Create a Supabase bucket named "products" in the same project as your original database.
   - Run the "download_pictures.py" file to populate the bucket with images.

4. **Install Dependencies and Start Application:**
   - Install dependencies using `npm install` or `yarn install`.
   - Start the application using `npm run start` or `yarn start`.

---
