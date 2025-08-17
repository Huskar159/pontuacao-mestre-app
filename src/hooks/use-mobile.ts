import { useState, useEffect } from 'react';

/**
 * Hook para detectar se o dispositivo atual é um dispositivo móvel
 * baseado na largura da janela
 * @returns {boolean} true se for um dispositivo móvel
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    // Função para verificar se a tela é de um dispositivo móvel
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px é o breakpoint padrão para md no Tailwind
    };

    // Verifica inicialmente
    checkIfMobile();

    // Adiciona o event listener
    window.addEventListener('resize', checkIfMobile);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return isMobile;
}
