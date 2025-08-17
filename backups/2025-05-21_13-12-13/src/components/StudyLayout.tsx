import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lock, BookOpen, CheckCircle, ShoppingCart } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import UserHeader from '@/components/auth/UserHeader';
import { useAuth } from '@/contexts/AuthContext';
import PurchaseModuleDialog from '@/components/purchase/PurchaseModuleDialog';

interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  isPurchased: boolean;
  price: number;
  path: string;
}

const modules: ModuleInfo[] = [
  {
    id: 'pontuacao',
    title: 'Pontuação Mestre',
    description: '150+ questões práticas com gabarito comentado',
    isPurchased: true, // Main course is purchased
    price: 27,
    path: '/success'
  },
  {
    id: 'palavras-repetitivas',
    title: 'Palavras Repetitivas na Redação',
    description: '80+ exercícios para enriquecer seu vocabulário',
    isPurchased: false,
    price: 10,
    path: '/more-exercises'
  },
  {
    id: 'pleonasmos',
    title: 'Elimine Pleonasmos',
    description: '60+ exercícios para eliminar vícios de linguagem',
    isPurchased: false,
    price: 7,
    path: '/more-exercises'
  },
  {
    id: 'concordancia',
    title: 'Concordância Verbal e Nominal',
    description: '120+ exercícios sobre regras de concordância',
    isPurchased: false,
    price: 10,
    path: '/more-exercises'
  },
  {
    id: 'porques',
    title: 'Uso dos Porquês',
    description: '50+ exercícios para dominar os porquês',
    isPurchased: false,
    price: 7,
    path: '/more-exercises'
  }
];

interface StudyLayoutProps {
  children: React.ReactNode;
}

const StudyLayout: React.FC<StudyLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { toast } = useToast();
  const [selectedModule, setSelectedModule] = useState<ModuleInfo | null>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handlePurchaseClick = (module: ModuleInfo) => {
    setSelectedModule(module);
    setIsPurchaseModalOpen(true);
  };

  const { hasPurchasedModule } = useAuth();
  
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        {selectedModule && (
          <PurchaseModuleDialog
            isOpen={isPurchaseModalOpen}
            onClose={() => setIsPurchaseModalOpen(false)}
            module={{
              id: selectedModule.id,
              title: selectedModule.title,
              price: selectedModule.price,
              description: selectedModule.description
            }}
          />
        )}
        <Sidebar>
          <SidebarContent>
            <div className="pt-6">
              <div className="px-4 pb-2 flex justify-between items-center">
                <div>
                  <Link to="/" className="font-bold text-xl text-brand-blue block">Pontuação Mestre</Link>
                  <p className="text-sm text-gray-500 mt-1">Área de Estudo</p>
                </div>
                <UserHeader />
              </div>
            </div>
            <SidebarGroup>
              <SidebarGroupLabel>Seus Módulos</SidebarGroupLabel>
              <SidebarMenu>
                {modules.map((module) => (
                  <SidebarMenuItem key={module.id}>
                    <div className="flex justify-between items-center w-full">
                      <SidebarMenuButton 
                        asChild
                        isActive={location.pathname === module.path && (module.isPurchased || hasPurchasedModule(module.id))}
                        tooltip={module.isPurchased ? 'Acesso Liberado' : `Adquira por R$${module.price}`}
                        className="flex-grow mr-2" // Allow button to grow and add margin
                      >
                        <Link 
                          to={(module.isPurchased || hasPurchasedModule(module.id)) ? module.path : '#'}
                          onClick={(e) => !(module.isPurchased || hasPurchasedModule(module.id)) && e.preventDefault()} // Prevent navigation if not purchased
                          className="flex items-center w-full"
                        >
                          {(module.isPurchased || hasPurchasedModule(module.id)) ? (
                            <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                          ) : (
                            <Lock className="h-4 w-4 mr-2 flex-shrink-0" />
                          )}
                          <span className="truncate">{module.title}</span> {/* Add truncate */} 
                        </Link>
                      </SidebarMenuButton>
                      {!(module.isPurchased || hasPurchasedModule(module.id)) && (
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="h-6 text-xs px-1 flex-shrink-0 text-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange" // Adjusted styling, removed absolute positioning
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering link navigation
                            handlePurchaseClick(module);
                          }}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          R${module.price}
                        </Button>
                      )}
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            
            {/* Special Offer */}
            <div className="mt-6 p-4 bg-brand-lightBlue/40 mx-4 rounded-lg">
              <h3 className="font-semibold text-sm mb-1">Oferta Especial</h3>
              <p className="text-xs text-gray-600 mb-2">Obtenha todos os módulos com 40% de desconto!</p>
              <Button 
                size="sm" 
                className="w-full bg-brand-green hover:bg-green-700 text-xs"
                onClick={() => {
                  // Create a bundle module
                  const bundleModule: ModuleInfo = {
                    id: 'bundle-all',
                    title: 'Pacote Completo',
                    description: 'Todos os módulos com 40% de desconto',
                    isPurchased: false,
                    price: 20,
                    path: '/success'
                  };
                  handlePurchaseClick(bundleModule);
                }}
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Adquirir por R$20
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="p-6 bg-gray-50">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default StudyLayout;
