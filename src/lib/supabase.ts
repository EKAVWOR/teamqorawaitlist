import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase configuration is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);

export interface WaitlistEntry {
  id?: string;
  full_name: string;
  email: string;
  whatsapp_phone: string;
  user_type: string;
  services_interest: string[];
  company_name?: string;
  needs_description?: string;
  created_at?: string;
  whatsapp_joined?: boolean;
}

export const addToWaitlist = async (entry: WaitlistEntry): Promise<{ success: boolean; error?: string; data?: WaitlistEntry }> => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          full_name: entry.full_name,
          email: entry.email,
          whatsapp_phone: entry.whatsapp_phone,
          user_type: entry.user_type,
          services_interest: entry.services_interest,
          company_name: entry.company_name || null,
          needs_description: entry.needs_description || null,
          whatsapp_joined: false,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error adding to waitlist:', err);
    return { success: false, error: 'An unexpected error occurred.' };
  }
};

export const checkDuplicateEmail = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .limit(1);

    if (error) {
      console.error('Supabase error:', error);
      return false;
    }

    return data && data.length > 0;
  } catch (err) {
    console.error('Error checking duplicate email:', err);
    return false;
  }
};

export const markWhatsAppJoined = async (email: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .update({ whatsapp_joined: true })
      .eq('email', email);

    if (error) {
      console.error('Error updating WhatsApp status:', error);
    }
  } catch (err) {
    console.error('Error marking WhatsApp joined:', err);
  }
};