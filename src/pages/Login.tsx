import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  
  // Redirecionar para /pontuacao se já estiver logado
  useEffect(() => {
    if (user) {
      navigate('/pontuacao');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      let response;
      
      if (isSignUp) {
        // Registro
        response = await signUp(email, password);
        
        if (response.error) {
          throw new Error(response.error.message);
        }
        
        toast({
          title: "Conta criada com sucesso!",
          description: "Você já pode fazer login com suas credenciais.",
          variant: "default"
        });
        
        // Voltar para o modo de login
        setIsSignUp(false);
      } else {
        // Login
        response = await signIn(email, password);
        
        if (response.error) {
          throw new Error(response.error.message);
        }
        
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para a página principal...",
          variant: "default"
        });
        
        // Recarregar a página para garantir que a conexão com o Supabase seja estabelecida
        window.location.href = '/pontuacao';
      }
    } catch (error: any) {
      console.error('Erro de autenticação:', error);
      
      // Mensagens de erro customizadas com base no tipo de erro
      let errorMessage = 'Ocorreu um erro durante a autenticação.';
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Credenciais inválidas. Verifique seu email e senha.';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Email não confirmado. Verifique sua caixa de entrada.';
      } else if (error.message.includes('User already registered')) {
        errorMessage = 'Este email já está registrado. Tente fazer login.';
      } else if (error.message.includes('Password should be at least')) {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      }
      
      toast({
        title: "Erro de autenticação",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Pontuação Mestre
          </h1>
          <p className="mt-2 text-gray-600">
            Sistema de aprendizado de pontuação
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>{isSignUp ? 'Criar conta' : 'Entrar no sistema'}</CardTitle>
            <CardDescription>
              {isSignUp 
                ? 'Preencha os campos abaixo para criar sua conta'
                : 'Entre com suas credenciais para acessar o sistema'}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu-email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Carregando...</span>
                ) : isSignUp ? (
                  <span className="flex items-center">Criar conta <ArrowRight className="ml-2 h-4 w-4" /></span>
                ) : (
                  <span className="flex items-center">Entrar <ArrowRight className="ml-2 h-4 w-4" /></span>
                )}
              </Button>
              
              {/* Botão de registro removido conforme solicitado */}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
