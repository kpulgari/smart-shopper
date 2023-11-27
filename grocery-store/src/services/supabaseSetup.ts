import { supabase } from "./supabase";

export async function setupInitialData(): Promise<void> {
  try {
    const initialData = [
      { name: "bananas", price: 1.99 },
      { name: "apples", price: 3.99 },
    ];

    const { data, error } = await supabase.from("Product").insert(initialData);

    if (error) {
      throw error;
    }

    if (data) {
      console.log("Initial data inserted:", data);
    }
  } catch (error) {
    console.error("Error setting up initial data:");
  }
}

// Create function that checks all data is present - use instead of setupInitialData()
