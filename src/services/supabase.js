import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cmqkwjnbevjbudkkwmtb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcWt3am5iZXZqYnVka2t3bXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjE0ODEsImV4cCI6MjA5NDgzNzQ4MX0.qx2VCfJyD-J_WBx0DPjiCLi0T_tllelO-T4CBBu6jfw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
