-- Remove policies for user_progress table
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;

-- Drop the user_progress table
DROP TABLE IF EXISTS public.user_progress;
