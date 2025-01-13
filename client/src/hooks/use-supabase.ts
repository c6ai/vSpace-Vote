import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export function useSupabase() {
  const { toast } = useToast();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setIsInitialized(true);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    };

    initializeSupabase();
  }, [toast]);

  return { isInitialized, supabase };
}
