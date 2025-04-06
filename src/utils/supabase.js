
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://exnkrtigqfofvoadtzmx.supabase.co' ;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bmtydGlncWZvZnZvYWR0em14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNzk0ODgsImV4cCI6MjA1ODg1NTQ4OH0.CK4n0KdN3-3In371TfST3mNLkdrxosB9wEaMaPn4bQE'

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  });
  return supabase;
};

export default supabaseClient;