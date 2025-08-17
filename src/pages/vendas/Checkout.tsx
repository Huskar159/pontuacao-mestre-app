import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, BookOpen, Award, Star, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-4 bg-blue-800/50 rounded-lg">
      <div className="flex-shrink-0 mr-4 text-green-400">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-blue-100">{description}</p>
      </div>
    </div>
  );
};

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  title: string;
  price: string;
  originalPrice: string;
  features: PlanFeature[];
  isSelected: boolean;
  onClick: () => void;
  onPurchase: () => void;
  isProcessing: boolean;
  recommended?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  title, 
  price, 
  originalPrice, 
  features, 
  isSelected, 
  onClick, 
  onPurchase,
  isProcessing,
  recommended 
}) => {
  return (
    <Card 
      className={`relative transition-all ${isSelected ? 'border-4 border-green-400' : 'border border-blue-300'}`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          RECOMENDADO
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-sm line-through text-gray-400 mr-2">{originalPrice}</span>
            <span className="text-sm">por apenas</span>
          </div>
          <div className="text-3xl font-bold text-green-500">{price}</div>
          <p className="text-sm text-gray-500 mt-1">Pagamento único, acesso vitalício</p>
        </div>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={`text-sm ${!feature.included && 'text-gray-400'}`}>{feature.text}</span>
            </div>
          ))}
          
          <div className="pt-4">
            <Button 
              onClick={(e) => { e.stopPropagation(); onPurchase(); }} 
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition transform hover:scale-105" 
              disabled={isProcessing}
            >
              {isProcessing ? "Processando..." : "COMPRAR AGORA"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, purchasePlan } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<'basico' | 'completo'>('completo');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Se o usuário já estiver logado, verificar se já tem acesso ao conteúdo
    if (user && user.purchased_modules && user.purchased_modules.includes('pontuacao')) {
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
      // Simular processamento
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header/Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-300">Aumente Sua Nota</span> na Redação do Concurso com <span className="text-green-400">+100 Exercícios de Pontuação</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-semibold mb-8">
            Com exercícios práticos e rápidos, você dominará a pontuação e ficará preparado para se destacar na redação.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Este material é perfeito para você que:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Benefit 
              icon={<Target className="h-6 w-6" />}
              title="Quer melhorar sua redação"
              description="Aumente suas chances de aprovação nos concursos com uma redação impecável"
            />
            <Benefit 
              icon={<BookOpen className="h-6 w-6" />}
              title="Tem dificuldades com pontuação"
              description="Domine as regras de pontuação de forma prática e eficiente"
            />
            <Benefit 
              icon={<Award className="h-6 w-6" />}
              title="Busca material prático"
              description="Exercícios objetivos para aplicar a pontuação correta em redações"
            />
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="mb-16 bg-blue-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">O que você vai aprender:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Uso correto da vírgula</h3>
                  <p className="text-sm text-blue-100">Aprenda a utilizar a vírgula em todas as situações e evite os erros mais comuns.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Domínio do ponto e vírgula</h3>
                  <p className="text-sm text-blue-100">Domine esse sinal de pontuação que impressiona os examinadores quando usado corretamente.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Aplicação dos dois pontos</h3>
                  <p className="text-sm text-blue-100">Saiba exatamente quando e como usar os dois pontos para conectar ideias com elegância.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Uso dos parênteses</h3>
                  <p className="text-sm text-blue-100">Aprenda a fazer intercalações e observações sem comprometer a fluidez do texto.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Interpretação textual</h3>
                  <p className="text-sm text-blue-100">Melhore sua compreensão de textos complexos com exercícios práticos (plano completo).</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Eliminação de palavras repetitivas</h3>
                  <p className="text-sm text-blue-100">Enriqueça seu vocabulário e evite repetições desnecessárias (plano completo).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">Escolha seu plano:</h2>
          <p className="text-center text-blue-100 mb-8">Investimento único, acesso permanente!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PlanCard 
              title="Plano Básico"
              price="R$10,00"
              originalPrice="R$67,00"
              features={[
                { text: "Acesso ao módulo completo de Pontuação com 200+ exercícios práticos (vírgula, ponto e vírgula, dois pontos, parênteses)", included: true },
                { text: "Provas finais para cada tipo de pontuação", included: true },
                { text: "Explicações detalhadas dos erros para melhor compreensão", included: true },
                { text: "Gabaritos comentados com justificativas", included: true },
                { text: "Acesso permanente ao conteúdo", included: true },
                { text: "Exercícios para eliminar palavras repetitivas e enriquecer vocabulário", included: false }
              ]}
              isSelected={selectedPlan === 'basico'}
              onClick={() => setSelectedPlan('basico')}
              onPurchase={() => {
                setSelectedPlan('basico');
                handlePurchase();
              }}
              isProcessing={isProcessing}
            />
            
            <PlanCard 
              title="Plano Completo"
              price="R$19,90"
              originalPrice="R$97,00"
              features={[
                { text: "Acesso ao módulo completo de Pontuação com 200+ exercícios práticos (vírgula, ponto e vírgula, dois pontos, parênteses)", included: true },
                { text: "Provas finais para cada tipo de pontuação", included: true },
                { text: "Explicações detalhadas dos erros para melhor compreensão", included: true },
                { text: "Gabaritos comentados com justificativas", included: true },
                { text: "Acesso permanente ao conteúdo", included: true },
                { text: "Exercícios para eliminar palavras repetitivas e enriquecer vocabulário", included: true }
              ]}
              isSelected={selectedPlan === 'completo'}
              onClick={() => setSelectedPlan('completo')}
              onPurchase={() => {
                setSelectedPlan('completo');
                handlePurchase();
              }}
              isProcessing={isProcessing}
              recommended={true}
            />
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-3 bg-blue-700 p-4 rounded-lg max-w-lg mx-auto">
            <Shield className="h-6 w-6 text-white" />
            <p className="font-bold">Garantia de 30 dias ou seu dinheiro de volta</p>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Como você vai receber o método:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Acesso Imediato</h3>
              <p className="text-sm">Após a compra, o material será desbloqueado instantaneamente na plataforma.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Estude no Seu Ritmo</h3>
              <p className="text-sm">Acesse de qualquer dispositivo, a qualquer hora, no seu próprio ritmo.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Pratique e Evolua</h3>
              <p className="text-sm">Faça os exercícios, aprenda com o feedback imediato e veja sua evolução.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials/Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">O que dizem nossos alunos:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-blue-800 border-blue-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="italic mb-4">"Os exercícios de pontuação fizeram toda diferença na minha redação. Consegui nota máxima no quesito 'domínio da norma culta' e fui aprovado no concurso!"</p>
                <div>
                  <p className="font-semibold">Carlos S.</p>
                  <p className="text-sm text-blue-200">Aprovado no TCU</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-800 border-blue-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="italic mb-4">"Material excelente e muito prático! Em apenas duas semanas praticando os exercícios, percebi uma melhora significativa na minha redação."</p>
                <div>
                  <p className="font-semibold">Ana L.</p>
                  <p className="text-sm text-blue-200">Aprovada na PF</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Pronto para melhorar sua redação?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Não perca mais pontos por erros de pontuação. Comece agora mesmo a dominar as regras e destaque-se nos concursos!</p>
          
          <Button 
            onClick={handlePurchase} 
            className="py-6 px-12 bg-red-600 hover:bg-red-700 text-lg font-bold rounded-lg transition transform hover:scale-105" 
            disabled={isProcessing}
          >
            {isProcessing ? "Processando..." : "QUERO MELHORAR MINHA REDAÇÃO AGORA!"}
          </Button>
          
          <p className="mt-4 text-sm text-blue-200">Oferta por tempo limitado. Garanta seu acesso hoje!</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
