import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exnkrtigqfofvoadtzmx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // truncated for brevity

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const test = async () => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error('❌ Supabase Error:', error.message);
  } else {
    console.log('✅ Supabase Success:', data);
  }
};

test();
