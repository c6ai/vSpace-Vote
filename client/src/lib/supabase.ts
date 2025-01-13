import { createClient } from '@supabase/supabase-js';

// Initialize with empty values if env vars are missing
// This allows the app to load and show appropriate error messages
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create client with empty values if not configured
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export a function to check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

// Helper function to handle auth state
export async function getAuthState() {
  if (!isSupabaseConfigured()) {
    return { user: null, isLoading: false };
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error fetching auth state:', error.message);
      return { user: null, isLoading: false };
    }
    return { user, isLoading: false };
  } catch (e) {
    console.error('Error in auth state check:', e);
    return { user: null, isLoading: false };
  }
}