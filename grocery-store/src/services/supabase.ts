import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "../config/config";

if (!supabaseKey) {
  throw new Error("Supabase key is not defined in configuration file");
}

if (!supabaseUrl) {
  throw new Error("Supabase url is not defined in configuration file");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
