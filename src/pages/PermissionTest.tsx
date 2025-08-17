import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import StudyLayout from '@/components/StudyLayout';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

const PermissionTest: React.FC = () => {
  const { user, userProfile, updateProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const togglePermission = async (field: string, value: boolean) => {
    if (!user) return;
    
    try {
      const updateData: Record<string, boolean> = {};
      updateData[field] = value;
      
      await updateProfile(updateData);
      
      toast({
        title: "Permissão atualizada",
        description: `Permissão ${field} foi ${value ? 'ativada' : 'desativada'}.`,
        variant: "success",
      });
    } catch (error) {
      console.error('Erro ao atualizar permissão:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar a permissão.",
        variant: "destructive",
      });
    }
  };

  return (
    <StudyLayout pageTitle="Teste de Permissões">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Painel de Teste de Permissões</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informações do Usuário</h2>
            <div className="space-y-2">
              <p><strong>Email:</strong> {user?.email || 'Não autenticado'}</p>
              <p><strong>ID:</strong> {user?.id || 'N/A'}</p>
              <p><strong>Status:</strong> {user ? 'Autenticado' : 'Não autenticado'}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Permissões Atuais</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="plano-basico">Plano Básico</Label>
                  <p className="text-sm text-gray-500">Acesso ao módulo Pontuação Mestre</p>
                </div>
                <Switch
                  id="plano-basico"
                  checked={userProfile?.plano_basico || false}
                  onCheckedChange={(checked) => togglePermission('plano_basico', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="plano-completo">Plano Completo</Label>
                  <p className="text-sm text-gray-500">Acesso a todos os módulos</p>
                </div>
                <Switch
                  id="plano-completo"
                  checked={userProfile?.plano_completo || false}
                  onCheckedChange={(checked) => togglePermission('plano_completo', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="interpretacao-textual">Interpretação Textual</Label>
                  <p className="text-sm text-gray-500">Acesso ao módulo de interpretação textual</p>
                </div>
                <Switch
                  id="interpretacao-textual"
                  checked={userProfile?.interpretacao_textual || false}
                  onCheckedChange={(checked) => togglePermission('interpretacao_textual', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="palavras-repetidas">Palavras Repetitivas</Label>
                  <p className="text-sm text-gray-500">Acesso ao módulo de palavras repetitivas</p>
                </div>
                <Switch
                  id="palavras-repetidas"
                  checked={userProfile?.palavras_repetidas || false}
                  onCheckedChange={(checked) => togglePermission('palavras_repetidas', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Navegação</h2>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate('/pontuacao')}>Pontuação Mestre</Button>
              <Button onClick={() => navigate('/interpretacao-textual')}>Interpretação Textual</Button>
              <Button onClick={() => navigate('/palavras-repetitivas-pont')}>Palavras Repetitivas</Button>
              <Button onClick={() => navigate('/editor-textos')}>Editor de Textos</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudyLayout>
  );
};

export default PermissionTest;
