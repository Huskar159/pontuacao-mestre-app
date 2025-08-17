import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pontuacao from "./pages/Pontuacao";
import MoreExercises from "./pages/MoreExercises";
import Material from "./pages/Material";
import ModuleExercises from "./pages/ModuleExercises";

import PalavrasRepetitivas from "./pages/palavras-repetitivas-pont/PalavrasRepetitivas";
import EditorTextos from "./pages/editor-textos/EditorTextos";
import PermissionTest from "./pages/PermissionTest";
import Login from "./pages/Login";
import Checkout from "./pages/vendas/Checkout";
import PrivateRoute from "./components/PrivateRoute";
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
            {/* Rotas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Redirecionar raiz para a página de vendas */}
            <Route path="/" element={<Navigate to="/checkout" replace />} />
            
            {/* Rotas protegidas */}
            <Route path="/pontuacao" element={
              <PrivateRoute>
                <Pontuacao />
              </PrivateRoute>
            } />
            <Route path="/editor-textos" element={
              <PrivateRoute>
                <EditorTextos />
              </PrivateRoute>
            } />
            <Route path="/permission-test" element={
              <PrivateRoute>
                <PermissionTest />
              </PrivateRoute>
            } />
            <Route path="/more-exercises" element={
              <PrivateRoute>
                <MoreExercises />
              </PrivateRoute>
            } />
            <Route path="/material" element={
              <PrivateRoute>
                <Material />
              </PrivateRoute>
            } />

            <Route path="/palavras-repetitivas-pont" element={
              <PrivateRoute>
                <PalavrasRepetitivas />
              </PrivateRoute>
            } />
            <Route path="/module/:moduleId" element={
              <PrivateRoute>
                <ModuleExercises />
              </PrivateRoute>
            } />
            
            {/* Rota de página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
