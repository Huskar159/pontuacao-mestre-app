-- Remove policies for exercise_stats table
DROP POLICY IF EXISTS "Users can view own stats" ON public.exercise_stats;
DROP POLICY IF EXISTS "Users can update own stats" ON public.exercise_stats;
DROP POLICY IF EXISTS "Users can insert own stats" ON public.exercise_stats;

-- Drop the exercise_stats table
DROP TABLE IF EXISTS public.exercise_stats;
