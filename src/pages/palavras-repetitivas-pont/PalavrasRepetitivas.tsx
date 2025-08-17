import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, CheckCircle, Info, Play,
  MessageSquare, PencilRuler, FileText
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import StudyLayout from '@/components/StudyLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { useAuth } from '@/contexts/AuthContext';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  totalExercises: number;
  completedExercises: number;
  unlocked: boolean;
  icon: React.ReactNode;
  color: string;
  path: string;
  badge?: string;
}

interface ExerciseType {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: { situation: string; example: string }[];
}

// Módulos de Exercícios
const exerciciosModules: LearningModule[] = [
  // Substituição de Palavras Comuns
  {
    id: 'substituicao-palavras-comuns',
    title: "Substituição de Palavras Comuns - Módulo 1",
    description: "Aprenda a substituir palavras básicas por sinônimos mais sofisticados.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/substituicao-palavras-comuns",
    badge: null
  },
  {
    id: 'verbos-comuns',
    title: "Verbos Comuns - Módulo 2",
    description: "Substitua verbos básicos por alternativas mais expressivas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/verbos-comuns",
    badge: null
  },
  {
    id: 'conectivos-transicao',
    title: "Conectivos e Transições - Módulo 3",
    description: "Aprimore suas transições entre parágrafos e ideias.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/conectivos-transicao",
    badge: null
  },
  {
    id: 'expressoes-argumentativas',
    title: "Expressões Argumentativas - Módulo 4",
    description: "Enriqueça seus argumentos com expressões mais elaboradas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/expressoes-argumentativas",
    badge: null
  },
  {
    id: 'conclusoes-redacao',
    title: "Conclusões de Redação - Módulo 5",
    description: "Aprenda a variar as expressões conclusivas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/conclusoes-redacao",
    badge: null
  }
];

// Definição dos tipos de exercícios - para o guia explicativo
const exerciseTypes: ExerciseType[] = [
  {
    id: 1,
    name: "substituicao",
    title: "Substituição de Palavras",
    description: "Exercícios para enriquecer seu vocabulário substituindo palavras comuns.",
    icon: <PencilRuler className="h-6 w-6" />,
    color: "bg-blue-600",
    examples: [
      { 
        situation: "Palavras comuns", 
        example: "Em vez de usar 'muito importante', prefira: 'fundamental', 'essencial', 'imprescindível', 'crucial'."
      },
      { 
        situation: "Verbos básicos", 
        example: "Substitua 'ter' por: 'possuir', 'apresentar', 'dispor de', 'contar com'."
      }
    ]
  },
  {
    id: 2,
    name: "conectivos",
    title: "Conectivos e Transições",
    description: "Aprenda a conectar ideias de forma mais sofisticada.",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-green-600",
    examples: [
      { 
        situation: "Conectivos simples", 
        example: "Em vez de 'mas', use: 'entretanto', 'contudo', 'todavia', 'não obstante'."
      },
      { 
        situation: "Transições elaboradas", 
        example: "Para iniciar um argumento: 'Sob essa perspectiva', 'No que tange a', 'No âmbito dessa discussão'."
      }
    ]
  }
];

const PalavrasRepetitivas: React.FC = () => {
  const { user, hasPurchasedModule } = useAuth();
  const [completedCategories, setCompletedCategories] = useState<string[]>([]);
  
  // Verificar se o módulo foi comprado
  const isPurchased = hasPurchasedModule('palavras-repetitivas');
  
  // Pegar o progresso do usuário
  useEffect(() => {
    if (user) {
      const completedModules: string[] = [];
      setCompletedCategories(completedModules);
      
      exerciciosModules.forEach(module => {
        module.completedExercises = 0;
      });
    }
  }, [user]);

  // Calcular o progresso geral
  const totalModules = exerciciosModules.length;
  const completedModules = exerciciosModules.filter(
    module => module.completedExercises === module.totalExercises
  ).length;
  const overallProgress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  
  // Detectar se está em dispositivo móvel
  const isMobile = useIsMobile();

  return (
    <StudyLayout>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Exercícios para Enriquecer seu Vocabulário</h1>
              <p className="text-gray-600">
                Aprenda a evitar palavras repetitivas e torne sua redação mais sofisticada.
              </p>
            </div>
            
            {/* Indicador de progresso removido */}
          </div>
        </div>

        <Tabs defaultValue="modulos" className="w-full" orientation={isMobile ? "vertical" : "horizontal"}>
          <TabsList className="mb-6 w-full md:w-auto flex flex-wrap">
            <TabsTrigger value="modulos">Módulos de Estudo</TabsTrigger>
            <TabsTrigger value="guia">Guia de Vocabulário</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modulos">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Módulos disponíveis
              </h2>
              
              <div className="space-y-2">
                {exerciciosModules.map((module, index) => (
                  <Card key={module.id} className="overflow-hidden mt-3">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                          <div className={`${module.color} text-white rounded-full p-3 mr-4 shadow-md`}>
                            {module.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold">
                                <span className="inline-flex items-center justify-center bg-gray-800 text-white text-sm rounded-full w-6 h-6 mr-2">{index + 1}</span>
                                {module.title}
                              </h3>
                              {module.badge && (
                                <Badge variant="outline" className="bg-purple-100 text-purple-500 border-purple-500">
                                  {module.badge}
                                </Badge>
                              )}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="p-0 h-6 text-gray-500 hover:text-purple-500 hover:bg-transparent"
                                  >
                                    <Info className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Detalhes do Módulo</DialogTitle>
                                    <DialogDescription>Saiba mais sobre este módulo de vocabulário</DialogDescription>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                                    <p className="mb-4">{module.description}</p>
                                    <div className="text-sm text-gray-500">
                                      <p>• Total de exercícios: {module.totalExercises}</p>
                                      <p>• Exercícios concluídos: {module.completedExercises}</p>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                            <p className="text-gray-600">{module.description}</p>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Link to={module.path} state={{ from: 'palavras-repetitivas' }}>
                            <Button className="w-full md:w-auto">
                              {module.completedExercises > 0 ? 'Refazer' : 'Começar'} <Play className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guia">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6">Guia de Vocabulário</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {exerciseTypes.map(type => (
                  <Card key={type.id} className="overflow-hidden">
                    <CardContent className="p-5">
                      <div className="flex items-start mb-4">
                        <div className={`${type.color} text-white rounded-full p-3 mr-4 shadow-md`}>
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{type.title}</h3>
                          <p className="text-gray-600 text-sm">{type.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-4">
                        <h4 className="font-semibold text-sm border-b pb-2">Exemplos:</h4>
                        {type.examples.map((example, i) => (
                          <div key={i} className="space-y-2">
                            <p className="text-sm font-medium text-gray-700">{example.situation}:</p>
                            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                              {example.example}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudyLayout>
  );
};

export default PalavrasRepetitivas;
