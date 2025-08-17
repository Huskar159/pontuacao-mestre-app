import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight } from 'lucide-react';
import StudyLayout from '@/components/StudyLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const exerciseModules = [
  {
    id: 1,
    title: "Palavras Repetitivas na Redação",
    description: "80+ exercícios práticos para eliminar repetições e enriquecer seu vocabulário.",
    price: 10,
    numberOfExercises: 80,
    level: "Intermediário",
    topicsCovered: ["Sinonímia", "Conectivos", "Recursos de Coesão", "Vocabulário Avançado"],
    benefits: ["Evite repetições em redações", "Amplie seu vocabulário", "Melhore a coesão textual"],
    icon: "BookOpen"
  },
  {
    id: 2,
    title: "Elimine Pleonasmos (Vícios de Linguagem)",
    description: "60+ exercícios para identificar e corrigir vícios de linguagem em textos.",
    price: 7,
    numberOfExercises: 60,
    level: "Básico-Intermediário",
    topicsCovered: ["Pleonasmo", "Redundância", "Ambiguidade", "Expressões Viciadas"],
    benefits: ["Identifique erros comuns", "Elimine duplicidades", "Texto mais limpo e direto"],
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Concordância Verbal e Nominal Essencial",
    description: "120+ exercícios práticos para dominar as regras de concordância.",
    price: 10,
    numberOfExercises: 120,
    level: "Intermediário-Avançado",
    topicsCovered: ["Concordância com o sujeito composto", "Casos especiais", "Concordância nominal"],
    benefits: ["Evite erros gramaticais graves", "Domine casos especiais", "Mais pontos na prova"],
    icon: "BookOpen"
  },
  {
    id: 4,
    title: "Uso dos Porquês Simplificado",
    description: "50+ exercícios para nunca mais errar o uso dos porquês.",
    price: 7,
    numberOfExercises: 50,
    level: "Básico",
    topicsCovered: ["Por que", "Porque", "Por quê", "Porquê"],
    benefits: ["Elimine dúvidas comuns", "Fixe as regras definitivamente", "Aplicação prática"],
    icon: "BookOpen"
  },
];

const MoreExercises: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handlePurchase = (moduleId: number) => {
    const module = exerciseModules.find(m => m.id === moduleId);
    if (module) {
      toast({
        title: "Módulo Adicionado!",
        description: `${module.title} foi adicionado ao seu acesso.`,
        variant: "success",
      });
    }
  };
  
  const handleBundlePurchase = () => {
    toast({
      title: "Pacote Completo Adquirido!",
      description: "Todos os módulos foram adicionados ao seu acesso!",
      variant: "success",
    });
  };
  
  return (
    <StudyLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Módulos Adicionais de Exercícios</h1>
          <p className="text-xl text-gray-600">
            Aprofunde seus conhecimentos com módulos especializados
          </p>
        </div>
        
        {/* Module Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {exerciseModules.map((module) => (
            <Card 
              key={module.id}
              className={`border-2 transition-all hover:shadow-lg ${
                selectedModule === module.id 
                  ? 'border-brand-green bg-brand-lightGreen/30' 
                  : 'border-gray-200 hover:border-brand-blue/50'
              }`}
              onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-brand-blue mr-3" />
                      <h3 className="font-bold text-lg">{module.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-brand-lightBlue text-brand-blue">
                        {module.numberOfExercises}+ Exercícios
                      </Badge>
                      <Badge variant="secondary" className="bg-brand-lightBlue text-brand-blue">
                        Nível: {module.level}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-1 mb-6">
                      {module.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-2xl text-brand-blue mb-2">R$ {module.price}</div>
                    <div className="text-sm text-gray-500">Pagamento único</div>
                  </div>
                </div>
                
                {selectedModule === module.id && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold mb-2">Tópicos Abordados:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {module.topicsCovered.map((topic, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full mt-4 bg-brand-green hover:bg-green-700"
                      onClick={() => handlePurchase(module.id)}
                    >
                      Adicionar ao Meu Acesso - R$ {module.price}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Box de promoção removido */}
        
        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Compare os Módulos</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Módulo</TableHead>
                <TableHead className="text-center">Exercícios</TableHead>
                <TableHead className="text-center">Nível</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exerciseModules.map((module) => (
                <TableRow key={module.id}>
                  <TableCell className="font-medium">{module.title}</TableCell>
                  <TableCell className="text-center">{module.numberOfExercises}+</TableCell>
                  <TableCell className="text-center">{module.level}</TableCell>
                  <TableCell className="text-center font-bold">R$ {module.price}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handlePurchase(module.id)}
                    >
                      Adicionar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-50">
                <TableCell className="font-bold">Pacote Completo</TableCell>
                <TableCell className="text-center font-bold">310+</TableCell>
                <TableCell className="text-center">Todos</TableCell>
                <TableCell className="text-center font-bold text-brand-green">R$ 20</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-brand-green hover:bg-green-700"
                    onClick={handleBundlePurchase}
                  >
                    Melhor Opção
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </StudyLayout>
  );
};

export default MoreExercises;
