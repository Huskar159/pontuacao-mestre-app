import React from 'react';
import StudyLayout from '@/components/StudyLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// This page remains mostly unchanged but uses our StudyLayout
const Material: React.FC = () => {
  return (
    <StudyLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Material Teórico: Pontuação</h1>
        
        <p className="text-gray-700 mb-6">
          Este material teórico aborda os principais tópicos de pontuação da língua portuguesa, com exemplos práticos para facilitar seu aprendizado.
        </p>
        
        <Tabs defaultValue="virgula" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="virgula">Vírgula</TabsTrigger>
            <TabsTrigger value="ponto-virgula">Ponto e Vírgula</TabsTrigger>
            <TabsTrigger value="dois-pontos">Dois Pontos</TabsTrigger>
            <TabsTrigger value="aspas">Aspas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="virgula" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Regras de Uso da Vírgula</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">1. Separar elementos de uma enumeração</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Comprei maçãs, peras, uvas e bananas.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">2. Isolar o aposto ou explicação</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Paulo, diretor da empresa, fez o anúncio.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">3. Separar adjuntos adverbiais deslocados</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">No final da tarde, iremos à praia.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">4. Separar orações coordenadas</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Ela estudou muito, mas não passou no exame.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">5. Isolar orações adjetivas explicativas</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Os alunos, que estudaram, foram aprovados.</span> (todos estudaram e foram aprovados)
                    </p>
                    <p className="ml-5 mt-1 text-gray-700">
                      Diferente de: <span className="italic">Os alunos que estudaram foram aprovados.</span> (apenas os que estudaram foram aprovados)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quando NÃO usar a vírgula</h3>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">1. Entre sujeito e verbo</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Incorreto: <span className="italic line-through">Os alunos da turma de português, fizeram a prova.</span>
                    </p>
                    <p className="ml-5 mt-1 text-gray-700">
                      Correto: <span className="italic">Os alunos da turma de português fizeram a prova.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">2. Entre verbo e seus complementos</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Incorreto: <span className="italic line-through">O professor entregou, as notas aos alunos.</span>
                    </p>
                    <p className="ml-5 mt-1 text-gray-700">
                      Correto: <span className="italic">O professor entregou as notas aos alunos.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ponto-virgula">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Uso do Ponto e Vírgula</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">1. Separar itens de uma enumeração complexa</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Art. 1º Ficam proibidos: a caça de animais silvestres; a pesca em época de reprodução; o desmatamento em áreas de preservação.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">2. Separar orações coordenadas extensas</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Os alunos estudaram muito para a prova; contudo, o resultado não foi o esperado.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">3. Separar orações coordenadas já com vírgulas internas</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Ele chegou cedo, organizou o material, revisou as notas; ela, porém, preferiu descansar um pouco mais antes da apresentação.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dois-pontos">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Uso dos Dois Pontos</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">1. Antes de uma enumeração</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Comprei vários itens: pão, leite, manteiga e café.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">2. Antes de uma citação</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Como dizia minha avó: "Quem não arrisca, não petisca."</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">3. Para introduzir uma explicação</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">A situação é clara: precisamos agir imediatamente.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">4. Nos diálogos, indicando fala</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">João perguntou: — Você vai à festa?</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="aspas">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Uso das Aspas</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">1. Para indicar citações diretas</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Segundo o autor, "a educação é a arma mais poderosa para mudar o mundo".</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">2. Para destacar palavras estrangeiras</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">O novo "smartphone" da empresa foi lançado ontem.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">3. Para indicar ironia ou gírias</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Aquele "gênio" conseguiu reprovar em todas as matérias.</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-brand-blue">4. Para destacar títulos de obras</h3>
                    <p className="ml-5 mt-2 text-gray-700">
                      Exemplo: <span className="italic">Acabei de ler "Dom Casmurro" de Machado de Assis.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-600">
            Aprenda na prática com nossos exercícios
          </p>
          <Link to="/exercises">
            <Button>
              Ir para Exercícios
            </Button>
          </Link>
        </div>
      </div>
    </StudyLayout>
  );
};

export default Material;
