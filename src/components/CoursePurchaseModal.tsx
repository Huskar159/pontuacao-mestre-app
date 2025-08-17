import React, { useState } from 'react';
import { PixPaymentModal } from './PixPaymentModal';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface CoursePurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  course: {
    title: string;
    description: string;
    price: number;
  };
}

export const CoursePurchaseModal: React.FC<CoursePurchaseModalProps> = ({
  isOpen,
  onClose,
  onPurchase,
  course,
}) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

    const [mainDescription, ...benefits] = course.description.split('|');

    const handleOpenPixModal = () => {
    setIsPixModalOpen(true);
  };

  const handleClosePixModalAndPurchase = async () => {
    setIsPixModalOpen(false);

    try {
      setIsPurchasing(true);
            // Simula a compra após o usuário ver as instruções do Pix
      await onPurchase();
      setPurchaseComplete(true);
      
      // Fechar o modal após 2 segundos
      setTimeout(() => {
        setPurchaseComplete(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Erro ao processar a compra:', error);
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleClose = () => {
    if (!isPurchasing) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="w-[90%] max-w-[350px] sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {course.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {mainDescription}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">O que você vai aprender:</h3>
            <ul className="space-y-2 text-gray-700">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-sm text-gray-500">Preço total</p>
              <p className="text-2xl font-bold text-gray-900">R$ {course.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <Button 
              onClick={handleOpenPixModal} 
              className="bg-brand-green hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium text-base min-w-32 h-10"
              disabled={isPurchasing || purchaseComplete}
            >
              {isPurchasing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : purchaseComplete ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Concluído!
                </>
              ) : (
                'Comprar Agora'
              )}
            </Button>
          </div>
          
        </div>
      </DialogContent>
      <PixPaymentModal 
        isOpen={isPixModalOpen}
        onClose={handleClosePixModalAndPurchase}
        pixKey="pontuacao.mestre@hotmail.com"
      />
    </Dialog>
  );
};
