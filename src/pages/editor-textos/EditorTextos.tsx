import React, { useState, useEffect, useRef } from 'react';
import { Save, Check, AlertCircle, HelpCircle, Download, Upload } from 'lucide-react';
import StudyLayout from '@/components/StudyLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { checkPunctuation } from '@/services/textCorrectionService';

interface Correction {
  position: { start: number; end: number };
  original: string;
  suggestion: string;
  explanation: string;
  type: 'error' | 'warning' | 'info';
}

interface SavedText {
  id: string;
  title: string;
  content: string;
  date: string;
  corrections?: Correction[];
}

const EditorTextos: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('Meu texto sem título');
  const [corrections, setCorrections] = useState<Correction[]>([]);
  const [selectedCorrection, setSelectedCorrection] = useState<Correction | null>(null);
  const [showExplanationDialog, setShowExplanationDialog] = useState(false);
  const [savedTexts, setSavedTexts] = useState<SavedText[]>([]);
  const [showSavedTexts, setShowSavedTexts] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Carregar textos salvos quando o componente for montado
  useEffect(() => {
    if (user) {
      const storedTexts = localStorage.getItem(`saved_texts_${user.id}`);
      if (storedTexts) {
        setSavedTexts(JSON.parse(storedTexts));
      }
    }
  }, [user]);

  // Verificar pontuação quando o texto mudar (com debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.length > 10) {
        analyzeText();
      } else {
        setCorrections([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  // Analisar o texto e identificar problemas de pontuação
  const analyzeText = async () => {
    setIsAnalyzing(true);
    try {
      const detectedCorrections = await checkPunctuation(text);
      setCorrections(detectedCorrections);
    } catch (error) {
      console.error('Erro ao analisar texto:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Aplicar uma correção sugerida
  const applyCorrection = (correction: Correction) => {
    if (textareaRef.current) {
      const newText = 
        text.substring(0, correction.position.start) + 
        correction.suggestion + 
        text.substring(correction.position.end);
      
      setText(newText);
      
      // Posicionar o cursor após a correção
      const newPosition = correction.position.start + correction.suggestion.length;
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    }
  };

  // Mostrar explicação da correção
  const showExplanation = (correction: Correction) => {
    setSelectedCorrection(correction);
    setShowExplanationDialog(true);
  };

  // Salvar o texto atual
  const saveText = () => {
    if (!user) {
      toast({
        title: "É necessário fazer login",
        description: "Faça login para salvar seus textos.",
        variant: "destructive",
      });
      return;
    }
    
    if (text.trim() === '') {
      toast({
        title: "Texto vazio",
        description: "Por favor, escreva algo antes de salvar.",
        variant: "destructive",
      });
      return;
    }

    const newSavedText: SavedText = {
      id: Date.now().toString(),
      title,
      content: text,
      date: new Date().toLocaleString('pt-BR'),
      corrections
    };

    const updatedSavedTexts = [...savedTexts, newSavedText];
    setSavedTexts(updatedSavedTexts);
    localStorage.setItem(`saved_texts_${user.id}`, JSON.stringify(updatedSavedTexts));

    toast({
      title: "Texto salvo com sucesso!",
      description: "Seu texto foi salvo e pode ser acessado posteriormente.",
    });
  };

  // Carregar um texto salvo
  const loadText = (savedText: SavedText) => {
    setText(savedText.content);
    setTitle(savedText.title);
    if (savedText.corrections) {
      setCorrections(savedText.corrections);
    }
    setShowSavedTexts(false);
  };

  // Excluir um texto salvo
  const deleteText = (id: string) => {
    const updatedTexts = savedTexts.filter(text => text.id !== id);
    setSavedTexts(updatedTexts);
    if (user) {
      localStorage.setItem(`saved_texts_${user.id}`, JSON.stringify(updatedTexts));
    }
  };

  // Exportar texto como arquivo .txt
  const exportText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Importar texto de um arquivo
  const importText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setText(content);
      setTitle(file.name.replace(/\.txt$/, '') || 'Texto importado');
    };
    reader.readAsText(file);
  };

  return (
    <StudyLayout pageTitle="Editor de Textos">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <Input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-xl font-semibold mb-2"
                    placeholder="Título do seu texto"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={saveText} variant="outline" className="flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                  <Button onClick={() => setShowSavedTexts(true)} variant="outline" className="flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Meus Textos
                  </Button>
                  <Button onClick={exportText} variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar
                  </Button>
                  <div className="relative">
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={importText}
                      className="hidden"
                      id="import-file"
                    />
                    <Button 
                      onClick={() => document.getElementById('import-file')?.click()} 
                      variant="outline" 
                      className="flex items-center"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Importar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Textarea
                  ref={textareaRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Comece a escrever seu texto aqui. O sistema irá analisar automaticamente sua pontuação e sugerir correções."
                  className="min-h-[300px] p-4 text-base leading-relaxed resize-y"
                />
                {isAnalyzing && (
                  <div className="absolute top-2 right-2 text-sm text-blue-500">
                    Analisando...
                  </div>
                )}
              </div>

              {corrections.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Sugestões de correção ({corrections.length})</h3>
                  <div className="space-y-2">
                    {corrections.map((correction, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex items-start justify-between ${
                          correction.type === 'error' ? 'bg-red-50 border border-red-200' : 
                          correction.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 
                          'bg-blue-50 border border-blue-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center">
                            {correction.type === 'error' ? (
                              <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                            ) : correction.type === 'warning' ? (
                              <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
                            )}
                            <span className="font-medium">
                              Substituir "{correction.original}" por "{correction.suggestion}"
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {correction.explanation.length > 100 
                              ? correction.explanation.substring(0, 100) + '...' 
                              : correction.explanation}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => showExplanation(correction)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={() => applyCorrection(correction)}
                            className="text-green-500 hover:text-green-700 bg-green-50 hover:bg-green-100"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Diálogo de explicação */}
      <Dialog open={showExplanationDialog} onOpenChange={setShowExplanationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Explicação da correção</DialogTitle>
            <DialogDescription>
              Entenda por que esta correção é sugerida
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="p-4 bg-gray-50 rounded-md mb-4">
              <p className="font-medium">Original:</p>
              <p className="text-red-500">{selectedCorrection?.original}</p>
              <p className="font-medium mt-2">Sugestão:</p>
              <p className="text-green-500">{selectedCorrection?.suggestion}</p>
            </div>
            <div>
              <p className="font-medium">Explicação:</p>
              <p>{selectedCorrection?.explanation}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Diálogo de textos salvos */}
      <Dialog open={showSavedTexts} onOpenChange={setShowSavedTexts}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Meus textos salvos</DialogTitle>
            <DialogDescription>
              Acesse seus textos salvos anteriormente
            </DialogDescription>
          </DialogHeader>
          
          {savedTexts.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500">Você ainda não tem textos salvos.</p>
            </div>
          ) : (
            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              <Tabs defaultValue="list" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="list">Lista</TabsTrigger>
                  <TabsTrigger value="grid">Grade</TabsTrigger>
                </TabsList>
                
                <TabsContent value="list" className="mt-4">
                  <div className="space-y-2">
                    {savedTexts.map((savedText) => (
                      <div 
                        key={savedText.id}
                        className="p-4 border rounded-md hover:bg-gray-50 transition"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{savedText.title}</h3>
                            <p className="text-sm text-gray-500">{savedText.date}</p>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {savedText.content.substring(0, 100)}
                              {savedText.content.length > 100 && '...'}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => loadText(savedText)}
                            >
                              Abrir
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              onClick={() => deleteText(savedText.id)}
                            >
                              Excluir
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="grid" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedTexts.map((savedText) => (
                      <Card key={savedText.id}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">{savedText.title}</h3>
                          <p className="text-sm text-gray-500">{savedText.date}</p>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                            {savedText.content.substring(0, 150)}
                            {savedText.content.length > 150 && '...'}
                          </p>
                          <div className="flex justify-end space-x-2 mt-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => loadText(savedText)}
                            >
                              Abrir
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              onClick={() => deleteText(savedText.id)}
                            >
                              Excluir
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </StudyLayout>
  );
};

export default EditorTextos;
