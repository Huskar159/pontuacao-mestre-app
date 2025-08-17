import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ukuuugrsdnibxnsodblv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdXV1Z3JzZG5pYnhuc29kYmx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MDQwMTIsImV4cCI6MjA2MTk4MDAxMn0.aeIwWnasU5WEIZruMiZ8CfEHxFamfZosZ0Jvg7VZUF8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
