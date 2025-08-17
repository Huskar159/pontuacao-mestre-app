import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';

interface PixPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixKey: string;
}

export const PixPaymentModal: React.FC<PixPaymentModalProps> = ({ isOpen, onClose, pixKey }) => {
  const whatsappLink = "https://wa.me/5561981662814?text=Comprei%20o%20produto%2C%20Palavras%20Repetidas%2C%20vou%20enviar%20o%20comprovante.";
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setIsCopied(true);
      toast({
        title: 'Chave PIX copiada!',
        description: 'Agora você pode colar no seu aplicativo de pagamentos.',
      });
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast({
        title: 'Erro ao copiar',
        description: 'Não foi possível copiar a chave. Por favor, tente manualmente.',
        variant: 'destructive',
      });
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[90%] max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Pague com Pix</DialogTitle>
          <DialogDescription className="text-gray-600 pt-2">
            Para concluir sua compra, faça um Pix para a chave abaixo. Após o pagamento, o acesso ao módulo será liberado.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="w-full p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-sm text-gray-600">Chave Pix (E-mail)</p>
            <p className="text-lg font-semibold text-gray-900 break-words">{pixKey}</p>
          </div>
          <Button onClick={handleCopy} className="w-full font-medium text-base">
            {isCopied ? (
              <><Check className="mr-2 h-5 w-5" /> Copiado!</>
            ) : (
              <><Copy className="mr-2 h-5 w-5" /> Copiar Chave Pix</>
            )}
          </Button>
          <Button 
            onClick={() => {
              window.open(whatsappLink, '_blank');
              onClose();
            }}
            className="w-full font-medium text-base bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            Enviar Comprovante pelo Whatsapp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
