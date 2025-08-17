
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'card',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Pedido recebido!",
        description: "Redirecionando para a área de exercícios...",
        duration: 3000,
      });
      
      // Redirect to success page
      navigate('/success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        paymentMethod: 'card',
      });
    }, 1500);
  };

  return (
    <div id="checkout" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garanta Agora Seu Acesso
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Preencha os dados abaixo para receber acesso imediato ao Pontuação Mestre
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Dados para Acesso</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu melhor email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Forma de pagamento
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-blue"
                      />
                      <span>Cartão de crédito (até 12x)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={formData.paymentMethod === 'pix'}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-blue"
                      />
                      <span>Pix (10% de desconto)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="boleto"
                        checked={formData.paymentMethod === 'boleto'}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-blue"
                      />
                      <span>Boleto bancário</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-green-700 py-6 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processando..." : "Finalizar Compra - R$ 27"}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Pagamento 100% seguro. Acesso imediato após confirmação.
                </p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <div className="flex flex-wrap justify-center gap-4">
              <img src="https://placehold.co/60x30?text=VISA" alt="Visa" className="h-8" />
              <img src="https://placehold.co/60x30?text=MASTER" alt="Mastercard" className="h-8" />
              <img src="https://placehold.co/60x30?text=PIX" alt="Pix" className="h-8" />
              <img src="https://placehold.co/60x30?text=BOLETO" alt="Boleto" className="h-8" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;
