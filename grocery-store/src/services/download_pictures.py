from supabase import create_client
from dotenv import load_dotenv
import os
import requests

load_dotenv("../config/.env")

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
unsplash_api = os.environ.get("UNSPLASH_KEY")

client = create_client(url, key)

try:
    response = client.from_("Product").select("*").execute()
    data = response.data
    names = []

    for d in data:
        names.append(d["name"])

    unsplash_link = (
        f"https://api.unsplash.com/search/photos/?client_id={unsplash_api}&query="
    )

    existing_files = client.storage.from_("products").list("")

    for name in names:
        if f"{name}.jpg" not in existing_files:
            try:
                url = unsplash_link + name
                r = requests.get(url)
                data = r.json()
                image_url = data["results"][0]["urls"]["small"]

                image_response = requests.get(image_url)

                if image_response.status_code == 200:
                    image_data = image_response.content

                    storage_response = client.storage.from_("products").upload(
                        f"{name}.jpg", image_data
                    )
                else:
                    print(f"Failed to download image from URL: {image_url}")

            except Exception as e:
                print(f"Item skipped: {name} - Error: {e}")

except Exception as e:
    print(f"Error occurred: {e}")
