import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, CreditCard } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/auth/AuthModal';

interface PurchaseModuleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  module: {
    id: string;
    title: string;
    price: number;
    description: string;
  };
}

enum PurchaseState {
  INITIAL,
  PROCESSING,
  COMPLETED,
  AUTH
}

const PurchaseModuleDialog: React.FC<PurchaseModuleDialogProps> = ({ 
  isOpen, 
  onClose, 
  module 
}) => {
  const [purchaseState, setPurchaseState] = useState<PurchaseState>(PurchaseState.INITIAL);
  const { toast } = useToast();
  const { user, addPurchasedModule } = useAuth();

  const handlePurchase = () => {
    setPurchaseState(PurchaseState.PROCESSING);
    
    // Simulate payment processing
    setTimeout(() => {
      setPurchaseState(PurchaseState.COMPLETED);
      
      // If user is already logged in, add the module to their account
      if (user) {
        addPurchasedModule(module.id);
        
        setTimeout(() => {
          onClose();
          toast({
            title: "Módulo adquirido!",
            description: `${module.title} foi adicionado à sua conta.`
          });
        }, 1500);
      }
    }, 2000);
  };
  
  const handleContinue = () => {
    // If user is not logged in, show auth modal
    if (!user) {
      setPurchaseState(PurchaseState.AUTH);
    } else {
      onClose();
    }
  };

  return (
    <>
      <Dialog open={isOpen && purchaseState !== PurchaseState.AUTH} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {purchaseState === PurchaseState.COMPLETED ? 'Compra Concluída!' : `Adquirir ${module.title}`}
            </DialogTitle>
            <DialogDescription>
              {purchaseState === PurchaseState.COMPLETED 
                ? 'Sua compra foi processada com sucesso.' 
                : `Invista no seu aprendizado por apenas R$${module.price}.`}
            </DialogDescription>
          </DialogHeader>
          
          {purchaseState === PurchaseState.INITIAL && (
            <div className="py-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium text-lg mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-2">{module.description}</p>
                <div className="font-semibold text-green-600">R${module.price}</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Acesso vitalício ao conteúdo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Exercícios práticos com gabarito</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Suporte para dúvidas</span>
                </div>
              </div>
            </div>
          )}
          
          {purchaseState === PurchaseState.PROCESSING && (
            <div className="py-6 flex flex-col items-center">
              <Loader2 className="h-12 w-12 animate-spin text-brand-blue mb-4" />
              <p>Processando seu pagamento...</p>
            </div>
          )}
          
          {purchaseState === PurchaseState.COMPLETED && (
            <div className="py-6 flex flex-col items-center">
              <div className="bg-green-50 p-3 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <p className="text-center mb-4">
                {user 
                  ? 'O módulo foi adicionado à sua conta e já está disponível para estudo!' 
                  : 'Para acessar seu novo módulo, crie uma conta ou faça login.'}
              </p>
            </div>
          )}
          
          <DialogFooter>
            {purchaseState === PurchaseState.INITIAL && (
              <Button onClick={handlePurchase} className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Comprar por R${module.price}
              </Button>
            )}
            
            {purchaseState === PurchaseState.COMPLETED && (
              <Button onClick={handleContinue} className="w-full">
                Continuar
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Auth Modal shown after purchase completion if user is not logged in */}
      {purchaseState === PurchaseState.AUTH && (
        <AuthModal 
          isOpen={true} 
          onClose={() => {
            setPurchaseState(PurchaseState.INITIAL);
            onClose();
          }}
          defaultTab="register"
          postPurchase={true}
          moduleId={module.id}
        />
      )}
    </>
  );
};

export default PurchaseModuleDialog;
