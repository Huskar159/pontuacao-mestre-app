-- Create a table for exercise categories (punctuation types)
CREATE TABLE IF NOT EXISTS public.exercise_categories (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a table for exercises
CREATE TABLE IF NOT EXISTS public.exercises (
  id SERIAL PRIMARY KEY,
  category_id TEXT REFERENCES public.exercise_categories(id) NOT NULL,
  question TEXT NOT NULL,
  explanation TEXT,
  difficulty INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a table for exercise options
CREATE TABLE IF NOT EXISTS public.exercise_options (
  id SERIAL PRIMARY KEY,
  exercise_id INTEGER REFERENCES public.exercises(id) ON DELETE CASCADE,
  option_text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT false,
  explanation TEXT
);

-- Create a table for user progress
CREATE TABLE IF NOT EXISTS public.user_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES public.exercises(id) ON DELETE CASCADE,
  is_correct BOOLEAN NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  last_attempted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, exercise_id)
);

-- Create a table for exercise completion statistics
CREATE TABLE IF NOT EXISTS public.exercise_stats (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  category_id TEXT REFERENCES public.exercise_categories(id) ON DELETE CASCADE,
  exercises_completed INTEGER DEFAULT 0,
  exercises_correct INTEGER DEFAULT 0,
  last_updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, category_id)
);

-- Set up Row Level Security
ALTER TABLE public.exercise_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_stats ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Everyone can read exercise categories, exercises, and options
CREATE POLICY "Exercise categories are viewable by everyone" 
  ON public.exercise_categories FOR SELECT USING (true);
  
CREATE POLICY "Exercises are viewable by everyone" 
  ON public.exercises FOR SELECT USING (true);
  
CREATE POLICY "Exercise options are viewable by everyone" 
  ON public.exercise_options FOR SELECT USING (true);

-- Users can only view, update and insert their own progress
CREATE POLICY "Users can view own progress" 
  ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Users can update own progress" 
  ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);
  
CREATE POLICY "Users can insert own progress" 
  ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only view, update and insert their own stats
CREATE POLICY "Users can view own stats" 
  ON public.exercise_stats FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Users can update own stats" 
  ON public.exercise_stats FOR UPDATE USING (auth.uid() = user_id);
  
CREATE POLICY "Users can insert own stats" 
  ON public.exercise_stats FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Insert initial data for comma exercises category
INSERT INTO public.exercise_categories (id, title, description)
VALUES ('virgula', 'Vírgula (,)', 'A vírgula indica uma pequena pausa no discurso e tem diversos usos na língua portuguesa.');
