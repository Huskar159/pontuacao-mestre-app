import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [shouldReload, setShouldReload] = useState<boolean>(false);

  // Efeito para verificar se há um redirecionamento pendente
  useEffect(() => {
    // Verificar se há um redirecionamento pendente no localStorage
    const reloadFlag = localStorage.getItem('shouldReload');
    
    if (reloadFlag === 'true') {
      console.log('[PrivateRoute] Redirecionamento pendente detectado, recarregando a página...');
      localStorage.removeItem('shouldReload');
      // Usar um timeout para evitar o loop de renderização
      const timer = setTimeout(() => {
        window.location.reload();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Enquanto verifica a autenticação, exibe um indicador de carregamento
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Se não estiver autenticado, redireciona para o login preservando a rota original
  if (!user) {
    console.log('[PrivateRoute] Usuário não autenticado, redirecionando para login...');
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Se estiver autenticado, renderiza o conteúdo da rota
  return <>{children}</>;
};

export default PrivateRoute;
