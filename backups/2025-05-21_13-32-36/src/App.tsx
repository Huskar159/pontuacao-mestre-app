
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Exercises from "./pages/Exercises";
import Success from "./pages/Success";
import MoreExercises from "./pages/MoreExercises";
import Material from "./pages/Material";
import ModuleExercises from "./pages/ModuleExercises";
import InterpretacaoTextual from "./pages/InterpretacaoTextual";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/success" element={<Success />} />
            <Route path="/more-exercises" element={<MoreExercises />} />
            <Route path="/material" element={<Material />} />
            <Route path="/interpretacao-textual" element={<InterpretacaoTextual />} />
            <Route path="/module/:moduleId" element={<ModuleExercises />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
