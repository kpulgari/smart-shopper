# SmartShopper 🪄

SmartShopper is a grocery store application designed to simplify your shopping experience with AI-powered _SmartSearch_. It boasts a user-friendly interface and easy-to-use features and aims to enhance how you shop for groceries online. The app comprises 140+ products integrated with images fetched through the Unsplash API.

<img width="1430" alt="SmartSearch" src="https://github.com/kpulgari/smart-shopper/assets/90290549/7159a040-e9be-4769-bf42-ae99d7a79865">

## Technologies Used ⚛️

- **React**
- **Tailwind**
- **Vite**
- **Supabase**
- **Flask**
- **Unsplash API**
- **OpenAI API**

## How SmartSearch Works 🧙🏼‍♂️

### Simplifying Shopping for Specific Items
SmartSearch is your ultimate assistant when you're looking to gather ingredients or products for a specific recipe or category. Let's take the example of baking a cake. Instead of manually searching for each ingredient required, SmartSearch leverages the power of OpenAI's _GPT 3.5 Turbo_ to streamline the process:

https://github.com/kpulgari/smart-shopper/assets/90290549/64e87127-fa74-4fb3-b607-2090487e2700

### Utilizing OpenAI's API
1. **User Request:** When a user wants to fetch all the items related to a specific recipe or category, they trigger SmartSearch by entering their query into the application.
2. **Backend Request:** Upon clicking the SmartSearch button, the frontend of the application sends a request to the backend Flask server, transmitting the specific item or recipe the user is searching for.

### Processing on the Flask Server
3. **OpenAI Query:** The Flask backend server receives the user's query and communicates with the OpenAI API. It utilizes the powerful capabilities of GPT 3.5 Turbo to query the database for items related to the user's input. For instance, searching for "cake" might retrieve various baking ingredients such as flour, sugar, eggs, etc.

### Displaying Results to the User
4. **Frontend Display:** Once the Flask server obtains the results from the OpenAI API, the frontend of the SmartShopper application displays the queried items to the user. The user can then review the list of ingredients or related products fetched by the SmartSearch functionality.

### Streamlining Shopping Experience
By using SmartSearch, users can significantly expedite their shopping process, especially when searching for multiple items related to a specific recipe or category. It simplifies the task of finding all necessary ingredients or products by providing a consolidated list of relevant items directly within the application.

## Setup Instructions 🛠️

To set up **SmartShopper**, follow these steps:

1. **Set up Supabase Database:**
   - Create a Supabase database named "Product" with columns "name" and "price".
   - Populate the database by copying and pasting the contents of the `data.txt` file from the public folder into the database.

2. **Configure Client Settings:**
   - Navigate to the `config` folder, and copy and paste your Supabase URL and Supabase key into the appropriate fields in the `clientConfig.ts` file.
   - Obtain an Unsplash API key and insert it into the `clientConfig.ts` file.
   - Within the same `config` folder, create a new `.env` file and populate it with the variables "SUPABASE_URL", "SUPABASE_KEY", and "UNSPLASH_KEY" and their respective values.

3. **Image Caching with Supabase Bucket:**
   - Create a Supabase bucket named "products" in the same project as your original database.
   - Install all dependencies with pip, and run the `download_pictures.py` file to populate the bucket with images. _Caution: Unsplash free tier API only allows 50 image calls per hour, so run the file over multiple hours to fully download all images_

4. **Install Dependencies and Start Application:**
   - Install dependencies using `npm install`.
   - Start the application using `npm run dev`.
  
To set up **SmartSearch**, follow these steps:

1. **Add OpenAI API Key:**
   - Navigate to the `config` folder and create a variable called "OPENAI_API_KEY" in your `.env` file, and populate it with your OpenAI API key.

2. **Run Python Server:**
   - Install all dependencies with pip, and run the `smart_search.py` file within the `services` folder. Make sure the Flask application is running on `localhost:5000`.
   - Restart SmartShopper application and harness the power of SmartSearch!

---
