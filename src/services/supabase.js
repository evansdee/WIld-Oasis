import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hwupglserjxhxbszmdjd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dXBnbHNlcmp4aHhic3ptZGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzODY4NTAsImV4cCI6MjAzMzk2Mjg1MH0.2p6jEv8PiOkjbwMH257HGWKcuYrxkAXQdoHv4c41t-Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
