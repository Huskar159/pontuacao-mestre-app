import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, purchasePlan } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basico' | 'completo'>('completo');

  // Se o usuário já estiver logado, redireciona para a página principal
  React.useEffect(() => {
    if (user) {
      navigate('/pontuacao');
    }
  }, [user, navigate]);

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setIsProcessing(true);
    try {
      // Simular atraso de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Processar a compra do plano selecionado
      const success = await purchasePlan(selectedPlan);
      
      if (!success) {
        throw new Error('Falha ao processar a compra');
      }

      toast({
        title: "Compra realizada com sucesso!",
        description: "Obrigado por sua compra! Você já pode acessar o conteúdo.",
      });

      // Redirecionar para a página principal após a compra
      navigate('/pontuacao');
    } catch (error) {
      console.error("Erro ao processar compra:", error);
      toast({
        title: "Erro na compra",
        description: "Ocorreu um erro ao processar sua compra. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePlanSelect = (plan: 'basico' | 'completo') => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-300">Aumente Sua Nota</span> na Redação
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-semibold mb-8">
            Com exercícios práticos e rápidos, você dominará a pontuação
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-800 rounded-xl p-8 mb-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Planos disponíveis:</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-sm font-semibold">+100 Exercícios Práticos</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-sm font-semibold">Estratégias Comprovadas</p>
                </div>
              </div>
            </div>

            <div>
              <div 
                className={`bg-blue-900 rounded-lg p-6 mb-4 border-2 ${selectedPlan === 'basico' ? 'border-green-400' : 'border-transparent'} cursor-pointer`}
                onClick={() => handlePlanSelect('basico')}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Plano Básico</h3>
                    <p className="text-sm text-gray-300 mb-2">Acesso ao módulo Pontuação</p>
                  </div>
                  <div className={`h-6 w-6 rounded-full border-2 ${selectedPlan === 'basico' ? 'bg-green-400' : 'border-white'}`}></div>
                </div>
                <div className="text-4xl font-bold text-yellow-300 mt-1">R$10,00</div>
              </div>

              <div 
                className={`bg-blue-900 rounded-lg p-6 border-2 ${selectedPlan === 'completo' ? 'border-green-400' : 'border-transparent'} cursor-pointer`}
                onClick={() => handlePlanSelect('completo')}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">Plano Completo</h3>
                    <p className="text-sm text-gray-300 mb-2">Acesso a todos os módulos</p>
                  </div>
                  <div className={`h-6 w-6 rounded-full border-2 ${selectedPlan === 'completo' ? 'bg-green-400' : 'border-white'}`}></div>
                </div>
                <div className="text-4xl font-bold text-yellow-300 mt-1">R$19,90</div>
              </div>

              <Button 
                onClick={handlePurchase} 
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-lg font-bold py-3 rounded-lg" 
                disabled={isProcessing}
              >
                {isProcessing ? "Processando..." : "COMPRAR AGORA"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
