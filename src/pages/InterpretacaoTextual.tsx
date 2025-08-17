import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ChevronRight, ArrowRight, CheckCircle,
  Bookmark, BookMarked, Quote, HelpCircle, Lock,
  Play, MessageSquare, Info, X, PencilRuler, FileText,
  Trophy, Target, Newspaper, BookOpenText, BookText, AlignLeft, BarChart
} from 'lucide-react';
import StudyLayout from '@/components/StudyLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import ExerciseExplanation from '@/components/ExerciseExplanation';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

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

interface TextType {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: { situation: string; example: string }[];
}

// Módulos de Interpretação Textual
const interpretacaoModules: LearningModule[] = [
  // ==== TEXTOS JORNALÍSTICOS (5 módulos) ====
  {
    id: 'interpretacao-jornalistico',
    title: "Textos Jornalísticos - Módulo 1",
    description: "Interpretação de notícias e reportagens de temas atuais.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/interpretacao-jornalistico",
    badge: null
  },
  {
    id: 'interpretacao-jornalistico-2',
    title: "Textos Jornalísticos - Módulo 2",
    description: "Interpretação de entrevistas e depoimentos jornalísticos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/interpretacao-jornalistico-2",
    badge: null
  },
  {
    id: 'interpretacao-jornalistico-3',
    title: "Textos Jornalísticos - Módulo 3",
    description: "Interpretação de manchetes e leads de notícias.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/interpretacao-jornalistico-3",
    badge: null
  },
  {
    id: 'interpretacao-jornalistico-4',
    title: "Textos Jornalísticos - Módulo 4",
    description: "Interpretação de reportagens especiais e investigativas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/interpretacao-jornalistico-4",
    badge: null
  },
  {
    id: 'interpretacao-jornalistico-5',
    title: "Textos Jornalísticos - Módulo 5",
    description: "Interpretação de artigos jornalísticos e editoriais.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    path: "/module/interpretacao-jornalistico-5",
    badge: null
  },
  // ==== OUTROS TIPOS DE TEXTO ====
  // ==== TEXTOS TÉCNICOS E CIENTÍFICOS (5 módulos) ====
  {
    id: 'interpretacao-cientifico',
    title: "Textos Técnicos e Científicos - Módulo 1",
    description: "Interpretação de artigos científicos acadêmicos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    path: "/module/interpretacao-cientifico",
    badge: null
  },
  {
    id: 'interpretacao-cientifico-2',
    title: "Textos Técnicos e Científicos - Módulo 2",
    description: "Interpretação de manuais e documentos técnicos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    path: "/module/interpretacao-cientifico-2",
    badge: null
  },
  {
    id: 'interpretacao-cientifico-3',
    title: "Textos Técnicos e Científicos - Módulo 3",
    description: "Interpretação de relatórios e estudos de caso.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    path: "/module/interpretacao-cientifico-3",
    badge: null
  },
  {
    id: 'interpretacao-cientifico-4',
    title: "Textos Técnicos e Científicos - Módulo 4",
    description: "Interpretação de textos de divulgação científica.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    path: "/module/interpretacao-cientifico-4",
    badge: null
  },
  {
    id: 'interpretacao-cientifico-5',
    title: "Textos Técnicos e Científicos - Módulo 5",
    description: "Interpretação de bulas, receituários e instruções técnicas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    path: "/module/interpretacao-cientifico-5",
    badge: null
  },
  // ==== OUTROS TIPOS DE TEXTO ====
  // ==== TEXTOS LITERÁRIOS (5 módulos) ====
  {
    id: 'interpretacao-literario',
    title: "Textos Literários - Módulo 1",
    description: "Interpretação de contos clássicos e contemporâneos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    path: "/module/interpretacao-literario",
    badge: null
  },
  {
    id: 'interpretacao-literario-2',
    title: "Textos Literários - Módulo 2",
    description: "Interpretação de poemas líricos e sonetos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    path: "/module/interpretacao-literario-2",
    badge: null
  },
  {
    id: 'interpretacao-literario-3',
    title: "Textos Literários - Módulo 3",
    description: "Interpretação de crônicas literárias.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    path: "/module/interpretacao-literario-3",
    badge: null
  },
  {
    id: 'interpretacao-literario-4',
    title: "Textos Literários - Módulo 4",
    description: "Interpretação de fragmentos de romances.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    path: "/module/interpretacao-literario-4",
    badge: null
  },
  {
    id: 'interpretacao-literario-5',
    title: "Textos Literários - Módulo 5",
    description: "Interpretação de textos dramáticos e peças teatrais.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    path: "/module/interpretacao-literario-5",
    badge: null
  },
  // ==== TEXTOS ARGUMENTATIVOS (5 módulos) ====
  {
    id: 'interpretacao-argumentativo',
    title: "Textos Argumentativos - Módulo 1",
    description: "Interpretação de artigos de opinião.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    path: "/module/interpretacao-argumentativo",
    badge: null
  },
  {
    id: 'interpretacao-argumentativo-2',
    title: "Textos Argumentativos - Módulo 2",
    description: "Interpretação de editoriais de jornais e revistas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    path: "/module/interpretacao-argumentativo-2",
    badge: null
  },
  {
    id: 'interpretacao-argumentativo-3',
    title: "Textos Argumentativos - Módulo 3",
    description: "Interpretação de dissertações argumentativas.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    path: "/module/interpretacao-argumentativo-3",
    badge: null
  },
  {
    id: 'interpretacao-argumentativo-4',
    title: "Textos Argumentativos - Módulo 4",
    description: "Interpretação de cartas argumentativas e manifestos.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    path: "/module/interpretacao-argumentativo-4",
    badge: null
  },
  {
    id: 'interpretacao-argumentativo-5',
    title: "Textos Argumentativos - Módulo 5",
    description: "Interpretação de resenhas críticas e ensaios.",
    totalExercises: 10,
    completedExercises: 0,
    unlocked: true,
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    path: "/module/interpretacao-argumentativo-5",
    badge: null
  },

];

// Definição dos tipos de texto - para o guia explicativo
const textTypes: TextType[] = [
  {
    id: 1,
    name: "jornalistico",
    title: "Textos Jornalísticos",
    description: "Textos informativos que apresentam fatos e notícias com linguagem objetiva e direta.",
    icon: <Newspaper className="h-6 w-6" />,
    color: "bg-blue-600",
    examples: [
      { 
        situation: "Notícias e reportagens", 
        example: "O aumento no preço dos combustíveis, anunciado ontem pela Petrobras, deve afetar diretamente o bolso do consumidor. Segundo especialistas, a alta de 5% para a gasolina e 8% para o diesel será repassada para diversos setores da economia."
      },
      { 
        situation: "Entrevistas", 
        example: "Em entrevista exclusiva, o cientista explicou que o novo tratamento passou por três fases de testes clínicos antes de ser aprovado. 'Os resultados são promissores, especialmente para pacientes em estágio inicial da doença', afirmou."
      }
    ]
  },
  {
    id: 2,
    name: "cientifico",
    title: "Textos Técnicos e Científicos",
    description: "Textos que apresentam informações especializadas, com vocabulário técnico e estrutura formal.",
    icon: <BookOpenText className="h-6 w-6" />,
    color: "bg-green-600",
    examples: [
      { 
        situation: "Artigos científicos", 
        example: "A análise de 75 estudos realizados entre 2010 e 2023 demonstrou que há forte correlação entre o uso prolongado de telas por crianças menores de 5 anos e atrasos no desenvolvimento da linguagem. Os pesquisadores identificaram que crianças expostas a mais de 2 horas diárias de telas apresentavam um vocabulário 23% menor em comparação com o grupo controle."
      },
      { 
        situation: "Manuais técnicos", 
        example: "O efeito fotovoltaico, princípio fundamental das células solares, ocorre quando fótons provenientes da luz solar atingem materiais semicondutores, geralmente silício dopado. Esse impacto causa a liberação de elétrons, que são então capturados, gerando corrente elétrica contínua."
      }
    ]
  },
  {
    id: 3,
    name: "literario",
    title: "Textos Literários",
    description: "Textos que exploram a linguagem artística, com recursos estilísticos e expressividade.",
    icon: <BookText className="h-6 w-6" />,
    color: "bg-purple-600",
    examples: [
      { 
        situation: "Narrativas e contos", 
        example: "O velho sentou-se na varanda e observou o horizonte. As nuvens, pesadas como suas memórias, anunciavam a tempestade. Cinquenta anos naquela casa e ainda se surpreendia com as cores do pôr-do-sol entre as montanhas. Fechou os olhos e pôde ouvir, ainda que distante, a voz de Maria chamando-o para o jantar."
      },
      { 
        situation: "Poemas", 
        example: "Entre o ser e o não ser\nHá o instante suspenso\nOnde a pétala hesita\nAntes de cair.\nNesse vácuo do tempo\nMora toda a poesia."
      }
    ]
  },
  {
    id: 4,
    name: "argumentativo",
    title: "Textos Argumentativos",
    description: "Textos que apresentam e defendem um ponto de vista, com estrutura lógica de argumentação.",
    icon: <AlignLeft className="h-6 w-6" />,
    color: "bg-orange-500",
    examples: [
      { 
        situation: "Artigos de opinião", 
        example: "A redução da maioridade penal não é solução para a criminalidade. Países que adotaram medidas semelhantes não viram diminuição significativa nos índices de violência. Além disso, nossas prisões já superlotadas não oferecem condições de ressocialização. O caminho mais efetivo seria investir em educação, oportunidades de trabalho para jovens e fortalecimento de medidas socioeducativas."
      },
      { 
        situation: "Dissertações", 
        example: "O ensino à distância, apesar de suas limitações, representa um avanço democrático na educação. Primeiramente, permite acesso ao conhecimento em regiões remotas onde universidades presenciais são inexistentes. Além disso, oferece flexibilidade de horários para estudantes que precisam conciliar trabalho e estudo. Por fim, com o avanço das tecnologias interativas, as limitações de interação entre professores e alunos têm sido gradualmente superadas."
      }
    ]
  },

];

const InterpretacaoTextual: React.FC = () => {
  const { user, hasPurchasedModule } = useAuth();
  const [completedCategories, setCompletedCategories] = useState<string[]>([]);
  
  // Verificar se o módulo foi comprado
  const isPurchased = hasPurchasedModule('interpretacao-textual');
  
  // Pegar o progresso do usuário, se estiver disponível
  useEffect(() => {
    if (user) {
      // Como o 'profile' não está disponível no AuthContext,
      // vamos assumir que todos os módulos estão pendentes
      const completedModules: string[] = [];
      setCompletedCategories(completedModules);
      
      // Atualizar o status de conclusão dos módulos (todos pendentes)
      interpretacaoModules.forEach(module => {
        module.completedExercises = 0;
      });
    }
  }, [user]);

  // Calcular o progresso geral
  const totalModules = interpretacaoModules.length;
  const completedModules = interpretacaoModules.filter(
    module => module.completedExercises === module.totalExercises
  ).length;
  const overallProgress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  // Módulo sempre liberado - removida verificação de bloqueio

  return (
    <StudyLayout>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">250 Exercícios de Interpretação Textual</h1>
              <p className="text-gray-600">
                Exercícios para desenvolver habilidades de leitura e compreensão de diferentes tipos de textos.
              </p>
            </div>
            
            {user && (
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="mr-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Seu progresso</p>
                  <div className="flex items-center">
                    <Progress value={overallProgress} className="h-2 w-32 mr-2" />
                    <span className="text-sm font-medium">{Math.round(overallProgress)}%</span>
                  </div>
                </div>
                <Badge variant="outline" className="ml-2 bg-gray-100">
                  {completedModules}/{totalModules} concluídos
                </Badge>
              </div>
            )}
          </div>
        </div>

        <Tabs defaultValue="modulos" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="modulos">Módulos de Estudo</TabsTrigger>
            <TabsTrigger value="guia">Guia de Interpretação</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modulos">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Módulos disponíveis
              </h2>
              
              <div className="space-y-2">
                {/* Divisória para TEXTOS JORNALÍSTICOS */}
                <div className="mt-6 mb-4">
                  <h2 className="text-xl font-bold py-2 px-4 bg-blue-100 text-blue-800 rounded-lg border-l-4 border-blue-600">
                    TEXTOS JORNALÍSTICOS
                  </h2>
                </div>
                
                {/* Módulos de Textos Jornalísticos */}
                {interpretacaoModules
                  .filter(module => module.id.startsWith('interpretacao-jornalistico'))
                  .map((module, index) => (
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
                                      <DialogDescription>Saiba mais sobre este módulo de interpretação textual</DialogDescription>
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
                              <div className="flex items-center mt-2">
                                <Badge variant={module.completedExercises > 0 ? "success" : "secondary"}>
                                  {module.completedExercises > 0 ? (
                                    <><CheckCircle className="mr-1 h-3 w-3" /> Concluído</>
                                  ) : (
                                    'Pendente'
                                  )}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Link to={module.path}>
                              <Button className="w-full md:w-auto">
                                {module.completedExercises > 0 ? 'Refazer' : 'Começar'} <Play className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                {/* Divisória para TEXTOS TÉCNICOS E CIENTÍFICOS */}
                <div className="mt-10 mb-4">
                  <h2 className="text-xl font-bold py-2 px-4 bg-green-100 text-green-800 rounded-lg border-l-4 border-green-600">
                    TEXTOS TÉCNICOS E CIENTÍFICOS
                  </h2>
                </div>
                
                {/* Módulos de Textos Técnicos e Científicos */}
                {interpretacaoModules
                  .filter(module => module.id.startsWith('interpretacao-cientifico'))
                  .map((module, index) => (
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
                                      <DialogDescription>Saiba mais sobre este módulo de interpretação textual</DialogDescription>
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
                              <div className="flex items-center mt-2">
                                <Badge variant={module.completedExercises > 0 ? "success" : "secondary"}>
                                  {module.completedExercises > 0 ? (
                                    <><CheckCircle className="mr-1 h-3 w-3" /> Concluído</>
                                  ) : (
                                    'Pendente'
                                  )}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Link to={module.path}>
                              <Button className="w-full md:w-auto">
                                {module.completedExercises > 0 ? 'Refazer' : 'Começar'} <Play className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                {/* Divisória para TEXTOS LITERÁRIOS */}
                <div className="mt-10 mb-4">
                  <h2 className="text-xl font-bold py-2 px-4 bg-purple-100 text-purple-800 rounded-lg border-l-4 border-purple-600">
                    TEXTOS LITERÁRIOS
                  </h2>
                </div>
                
                {/* Módulos de Textos Literários */}
                {interpretacaoModules
                  .filter(module => module.id.startsWith('interpretacao-literario'))
                  .map((module, index) => (
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
                                      <DialogDescription>Saiba mais sobre este módulo de interpretação textual</DialogDescription>
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
                              <div className="flex items-center mt-2">
                                <Badge variant={module.completedExercises > 0 ? "success" : "secondary"}>
                                  {module.completedExercises > 0 ? (
                                    <><CheckCircle className="mr-1 h-3 w-3" /> Concluído</>
                                  ) : (
                                    'Pendente'
                                  )}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Link to={module.path}>
                              <Button className="w-full md:w-auto">
                                {module.completedExercises > 0 ? 'Refazer' : 'Começar'} <Play className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                {/* Divisória para TEXTOS ARGUMENTATIVOS */}
                <div className="mt-10 mb-4">
                  <h2 className="text-xl font-bold py-2 px-4 bg-orange-100 text-orange-800 rounded-lg border-l-4 border-orange-500">
                    TEXTOS ARGUMENTATIVOS
                  </h2>
                </div>
                
                {/* Módulos de Textos Argumentativos */}
                {interpretacaoModules
                  .filter(module => module.id.startsWith('interpretacao-argumentativo'))
                  .map((module, index) => (
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
                                    <DialogDescription>Saiba mais sobre este módulo de interpretação textual</DialogDescription>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                                    <p className="mb-4">{module.description}</p>
                                    <p className="text-sm text-gray-600">Este módulo contém {module.totalExercises} exercícios para praticar suas habilidades de interpretação.</p>
                                  </div>
                                  <DialogFooter>
                                    <Link to={module.path}>
                                      <Button>
                                        Começar <Play className="ml-2 h-4 w-4" />
                                      </Button>
                                    </Link>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                            <p className="text-gray-600">{module.description}</p>
                            <div className="flex items-center mt-2">
                              <Badge variant={module.completedExercises > 0 ? "success" : "secondary"}>
                                {module.completedExercises > 0 ? (
                                  <><CheckCircle className="mr-1 h-3 w-3" /> Concluído</>
                                ) : (
                                  'Pendente'
                                )}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                          <Link to={module.path}>
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
        </Tabs>
      </div>
    </StudyLayout>
  );
};

export default InterpretacaoTextual;
