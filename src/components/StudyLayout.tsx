import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Lock, BookOpen, LogOut, User, FileEdit, Menu, X, Home, BookText, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from "@/lib/utils";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { CoursePurchaseModal } from './CoursePurchaseModal';

interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  isPurchased: boolean;
  price: number;
  path: string;
}

interface StudyLayoutProps {
  children: React.ReactNode;
}

const getModules = (hasPurchasedModule: (id: string) => boolean): ModuleInfo[] => {
  console.log('[StudyLayout] *** GERANDO MÓDULOS COM PERMISSÕES ATUALIZADAS ***');
  
  // Criar os módulos e verificar suas permissões individualmente
  const pontuacaoAccess = hasPurchasedModule('pontuacao');
  const palavrasAccess = hasPurchasedModule('palavras-repetitivas');
  
  console.log('[StudyLayout] Permissões dos módulos:', {
    pontuacao: pontuacaoAccess,
    palavras: palavrasAccess
  });
  
  return [
    {
      id: 'pontuacao',
      title: 'Pontuação Mestre',
      description: '150+ questões práticas com gabarito comentado',
      isPurchased: pontuacaoAccess,
      price: 27,
      path: '/pontuacao'
    },
    {
      id: 'palavras-repetitivas',
      title: 'Palavras Repetidas',
      description: 'Eleve a qualidade da sua escrita, eliminando repetições e enriquecendo seu vocabulário.|Acesso a mais de 50 exercícios práticos e interativos.|Aprenda a identificar e substituir palavras repetidas com eficácia.|Receba explicações detalhadas para cada exercício.|Torne seus textos mais profissionais e cativantes.',
      isPurchased: palavrasAccess,
      price: 5,
      path: '/palavras-repetitivas-pont'
    }
  ];
};

const StudyLayout: React.FC<StudyLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    user, 
    signOut, 
    hasPurchasedModule, 
    userProfile, 
    addPurchasedModule, 
    isLoading: isAuthLoading 
  } = useAuth();
  
  // Função para lidar com o logout
  const handleSignOut = async (e?: React.MouseEvent) => {
    try {
      e?.preventDefault();
      e?.stopPropagation();
      
      console.log('[StudyLayout] Iniciando logout...');
      
      // Fechar o menu móvel se estiver aberto
      if (isMobile) {
        setMobileMenuOpen(false);
      }
      
      // Chamar a função de logout do AuthContext
      await signOut();
      
      // Redirecionar para a página de login
      navigate('/login', { replace: true });
      
      console.log('[StudyLayout] Logout concluído com sucesso');
    } catch (error) {
      console.error('[StudyLayout] Erro durante o logout:', error);
      // Mesmo em caso de erro, redirecionar para o login
      navigate('/login', { replace: true });
    }
  };
  
  const [completedModules, setCompletedModules] = useState<Record<string, number>>({});
  const [modules, setModules] = useState<ModuleInfo[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleInfo | null>(null);
  const [isProfileReady, setIsProfileReady] = useState(false);
  const isMobile = useIsMobile();
  
  // Efeito para verificar se o perfil está pronto
  useEffect(() => {
    console.log('[StudyLayout] Verificando estado do perfil:', {
      isAuthLoading,
      user: !!user,
      userProfile: !!userProfile,
      isProfileReady
    });
    
    if (!isAuthLoading) {
      if (user) {
        if (userProfile) {
          console.log('[StudyLayout] Perfil carregado e pronto:', userProfile);
          setIsProfileReady(true);
        } else {
          console.log('[StudyLayout] Usuário autenticado mas perfil ainda não carregado');
          // Não definir isProfileReady como false aqui para evitar flicker
        }
      } else {
        console.log('[StudyLayout] Usuário não autenticado, redirecionando...');
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthLoading, user, userProfile, navigate]);

  useEffect(() => {
    // Só inicializa os módulos quando o perfil estiver pronto
    if (isProfileReady) {
      console.log('[StudyLayout] Inicializando módulos com perfil pronto:', userProfile);
      const modulesList = getModules(hasPurchasedModule);
      console.log('[StudyLayout] Status dos módulos:', modulesList.map(m => ({ 
        id: m.id, 
        isPurchased: m.isPurchased, 
        hasPlanAccess: hasPurchasedModule(m.id)
      })));
      setModules(modulesList);
    }
  }, [hasPurchasedModule, userProfile, isProfileReady]);

  useEffect(() => {
    try {
      const savedCompletions = localStorage.getItem('completedExercises');
      if (savedCompletions) {
        const completed = JSON.parse(savedCompletions);
        const moduleCompletions: Record<string, number> = {};
        
        modules.forEach(module => {
          // Get total exercises for this module
          const totalExercises = module.id === 'pontuacao' ? 150 : 
                               module.id === 'palavras-repetitivas' ? 50 : 0;
                               
          // Count completed exercises for this module
          const completedCount = (completed as number[]).filter(id => 
            id.toString().startsWith(module.id)
          ).length;
            
          // Calculate completion percentage
          moduleCompletions[module.id] = Math.round((completedCount / totalExercises) * 100);
        });
        
        setCompletedModules(moduleCompletions);
      }
    } catch (error) {
      console.error('Error loading completed exercises:', error);
    }
  }, [modules]);

  const handlePurchase = async () => {
    if (!selectedModule) return;
    
    try {
      // Adicionar o módulo usando a função do AuthContext
      await addPurchasedModule(selectedModule.id);
      
      // Atualizar o estado local para refletir a compra
      const updatedModules = modules.map(m => 
        m.id === selectedModule.id ? { ...m, isPurchased: true } : m
      );
      
      setModules(updatedModules);
      
      toast({
        title: "Compra realizada com sucesso!",
        description: `O módulo "${selectedModule.title}" foi adicionado ao seu acesso.`,
        variant: "default",
      });
      
      // Atualizar o estado do usuário para refletir a compra
      if (userProfile) {
        // Usando type assertion para evitar erros de tipo
        const updatedProfile = {
          ...userProfile,
          purchased_modules: [...(userProfile.purchased_modules || []), selectedModule.id]
        };
        // @ts-ignore - Atualizando o estado do usuário
        setUserProfile(updatedProfile);
      }
      
    } catch (error) {
      console.error('Erro ao processar a compra:', error);
      toast({
        title: "Erro na compra",
        description: "Não foi possível processar sua compra. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      // Fechar o modal e limpar o módulo selecionado
      setPurchaseModalOpen(false);
      setSelectedModule(null);
    }
  };

  // Função para lidar com o clique em um módulo
  const handleModuleClick = (module: ModuleInfo, e?: React.MouseEvent) => {
    // Se o clique foi no botão de compra, não fazer nada (o próprio botão tratará o clique)
    if (e && (e.target as HTMLElement).closest('.purchase-button')) {
      e.stopPropagation();
      return;
    }
    
    // Prevenir o comportamento padrão do link
    e?.preventDefault();
    e?.stopPropagation();
    
    if (module.isPurchased) {
      // Se o módulo estiver comprado, navegar para a página do módulo
      navigate(module.path);
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    } else {
      // Se o módulo não estiver comprado, abrir o modal de compra
      setSelectedModule(module);
      setPurchaseModalOpen(true);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mostrar loading enquanto estiver carregando a autenticação
  if (isAuthLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }
  
  // Se não estiver carregando mas não tem usuário, redireciona para login
  if (!user) {
    return null; // O redirecionamento será tratado pelo useEffect
  }
  
  // Se chegou aqui, o usuário está autenticado e podemos mostrar a interface
  // Mesmo que o perfil não esteja totalmente carregado, mostramos a interface
  // para evitar o loading infinito

  return (
    <div className={cn("min-h-screen w-full flex flex-col md:flex-row", "relative")}>
      {/* Modal de compra */}
      {selectedModule && (
        <CoursePurchaseModal
          isOpen={purchaseModalOpen}
          onClose={() => {
            setPurchaseModalOpen(false);
            setSelectedModule(null);
          }}
          onPurchase={handlePurchase}
          course={{
            title: selectedModule.title,
            description: selectedModule.description,
            price: selectedModule.price,
          }}
        />
      )}

      <SidebarProvider
        defaultOpen={!isMobile}
        className={cn("flex flex-col md:flex-row flex-1", isMobile ? "!pl-0 !ml-0" : "")}
      >
        {/* Overlay for mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Header */}
        {isMobile && (
          <div className="md:hidden flex items-center justify-between p-4 border-b bg-white sticky top-0 z-30">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-lg font-semibold">
              Pontuação Mestra
            </Link>
            <div className="w-8"></div> {/* Placeholder para alinhamento */}
          </div>
        )}

        {/* Mobile Sidebar */}
        {isMobile && (
          <div
            className={cn(
              "fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out shadow-lg w-84",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* User Profile Section */}
              <div className="flex flex-col w-full mb-4">
                <p className="font-semibold text-lg text-center">{user?.name || 'Usuário'}</p>
                <p className="text-sm text-gray-500 mb-3 text-center">{user?.email || 'email@example.com'}</p>
                <Button 
                  variant="ghost" 
                  onClick={(e) => handleSignOut(e)} 
                  className="text-red-600 hover:bg-red-50 hover:text-red-700 w-full justify-center text-sm py-2 px-3 rounded-md"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
              
              <Separator className="my-2" />
              
              {/* Mobile Navigation */}
              <SidebarMenu>
                
                <SidebarGroup>
                  <SidebarGroupLabel className="text-base font-medium">Módulos do Curso</SidebarGroupLabel>
                  <SidebarMenu className="mt-2 space-y-1">
                    {modules.map((module) => (
                      <SidebarMenuItem key={module.id}>
                        <div className="flex items-center justify-between w-full">
                          <SidebarMenuButton
                            asChild
                            className={cn(
                              "w-full justify-between text-left py-2.5 px-3 rounded-md transition-colors duration-150",
                              location.pathname === module.path && module.isPurchased && "bg-primary text-primary-foreground hover:bg-primary/90",
                              !module.isPurchased && "bg-red-50 hover:bg-red-100",
                              module.isPurchased && location.pathname !== module.path && "hover:bg-gray-100"
                            )}
                            onClick={(e) => handleModuleClick(module, e)}
                          >
                            <Link 
                              to={module.isPurchased ? module.path : '#'} 
                              className={cn(
                                "flex items-center justify-between w-full",
                                !module.isPurchased && "cursor-pointer"
                              )}
                            >
                              <div className="flex items-center">
                                {module.isPurchased ? (
                                  <BookOpen className="mr-3 h-5 w-5 flex-shrink-0" />
                                ) : (
                                  <Lock className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                                )}
                                <span className={cn("truncate", !module.isPurchased ? "text-gray-700" : "")}>
                                  {module.title}
                                </span>
                              </div>
                              {!module.isPurchased ? (
                                <button 
                                  className="ml-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setSelectedModule(module);
                                    setPurchaseModalOpen(true);
                                  }}
                                >
                                  Comprar
                                </button>
                              ) : completedModules[module.id] === 100 ? (
                                <Badge 
                                  variant="secondary" 
                                  className="ml-2 bg-brand-green text-white text-xs px-1.5 py-0.5"
                                >
                                  Concluído
                                </Badge>
                              ) : null}
                            </Link>
                          </SidebarMenuButton>
                        </div>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarMenu>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        {!isMobile && (
          <Sidebar className="border-r w-80 flex-shrink-0">
            <SidebarContent className="p-4">
              <div className="flex flex-col items-center w-full mb-4">
                <p className="font-semibold text-lg mb-1 text-center">{user?.name || 'Usuário'}</p>
                <p className="text-sm text-gray-500 mb-3 text-center">{user?.email || 'email@example.com'}</p>
                <Button 
                  variant="ghost" 
                  onClick={handleSignOut} 
                  className="text-red-600 hover:bg-red-50 hover:text-red-700 w-full justify-start mt-1 text-sm py-2 px-3 rounded-md"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
              
              <Separator className="my-2" />
              
              {/* Desktop Navigation */}
              <SidebarMenu className="space-y-1">
                {/* Removidas as opções Início e Meu Perfil do desktop */}
                <SidebarGroup>
                  <SidebarGroupLabel className="text-base font-medium">Módulos do Curso</SidebarGroupLabel>
                  <SidebarMenu className="mt-2 space-y-1">
                    {modules.map((module) => (
                      <SidebarMenuItem key={module.id}>
                        <div className="flex items-center justify-between w-full">
                          <SidebarMenuButton
                            asChild
                            className={cn(
                              "w-full justify-between text-left py-2.5 px-3 rounded-md transition-colors duration-150",
                              location.pathname === module.path && module.isPurchased && "bg-primary text-primary-foreground hover:bg-primary/90",
                              !module.isPurchased && "bg-red-50 hover:bg-red-100",
                              module.isPurchased && location.pathname !== module.path && "hover:bg-gray-100"
                            )}
                            onClick={(e) => handleModuleClick(module, e)}
                          >
                            <Link 
                              to={module.isPurchased ? module.path : '#'} 
                              className={cn(
                                "flex items-center justify-between w-full",
                                !module.isPurchased && "cursor-pointer"
                              )}
                            >
                              <div className="flex items-center">
                                {module.isPurchased ? (
                                  <BookOpen className="mr-3 h-5 w-5 flex-shrink-0" />
                                ) : (
                                  <Lock className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                                )}
                                <span className={cn("truncate", !module.isPurchased ? "text-gray-700" : "")}>
                                  {module.title}
                                </span>
                              </div>
                              {!module.isPurchased ? (
                                <button 
                                  className="ml-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setSelectedModule(module);
                                    setPurchaseModalOpen(true);
                                  }}
                                >
                                  Comprar
                                </button>
                              ) : completedModules[module.id] === 100 ? (
                                <Badge 
                                  variant="secondary" 
                                  className="ml-2 bg-brand-green text-white text-xs px-1.5 py-0.5"
                                >
                                  Concluído
                                </Badge>
                              ) : null}
                            </Link>
                          </SidebarMenuButton>
                        </div>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        )}

        {/* Main Content */}
        <div className={cn("flex-1 overflow-auto", {
          "pt-16": isMobile
        })}>
          <div className="w-full max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StudyLayout;
