import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

// Define the shape of the context
type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: any | null; data: any | null }>;
  signIn: (email: string, password: string) => Promise<{ error: any | null; data: any | null }>;
  signOut: () => Promise<void>;
  updateProfile: (userData: { 
    username?: string, 
    purchased_modules?: string[], 
    completed_modules?: Record<string, any>,
    pontuacao?: boolean,
    plano_completo?: boolean,
    interpretacao_textual?: boolean,
    palavras_repetidas?: boolean 
  }) => Promise<{ error: any | null }>;
  addPurchasedModule: (moduleId: string) => Promise<void>;
  hasPurchasedModule: (moduleId: string) => boolean;
  purchasePlan: (planType: 'basico' | 'completo') => Promise<boolean>;
  userProfile: any | null; // Expor o perfil do usuário
  hasFullPlan: () => boolean; // Verificar se usuário tem plano completo
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  
  // Função auxiliar para converter qualquer valor para booleano, tratando NULL como false
  const convertToBoolean = (value: any): boolean => {
    // Se for null, undefined ou vazio, retorna false
    if (value === null || value === undefined || value === '') {
      return false;
    }
    
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return value === 1;
    if (typeof value === 'string') {
      const lowerValue = value.toLowerCase();
      return lowerValue === 'true' || lowerValue === 't' || lowerValue === '1' || lowerValue === 'yes' || lowerValue === 'y';
    }
    return Boolean(value);
  };

  // Função auxiliar para verificar campos específicos do perfil
  const checkProfileField = (fieldName: string): boolean => {
    if (!userProfile) {
      console.log(`[AuthContext] checkProfileField: ${fieldName} = false (userProfile não existe)`);
      return false;
    }
    
    // Obter o valor bruto do campo
    const value = userProfile[fieldName];
    
    // Log para debug
    console.log(`[AuthContext] checkProfileField: ${fieldName} = ${value} (${typeof value})`);
    
    // Se o valor for null/undefined, o módulo está bloqueado
    if (value === null || value === undefined) {
      console.log(`[AuthContext] checkProfileField: ${fieldName} = BLOQUEADO (valor null/undefined)`);
      return false;
    }
    
    // Usar a função de conversão booleana para outros casos
    const isTrue = convertToBoolean(value);
    
    // Log detalhado do resultado
    console.log(`[AuthContext] checkProfileField RESULT: ${fieldName} = ${isTrue} (convertido de ${value})`);
    return isTrue;
  };

  useEffect(() => {
    console.log("[AuthContext] Setting up auth listener...");
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        // Definir um timeout para evitar carregamento infinito
        const timeoutId = setTimeout(() => {
          console.log("[AuthContext] Timeout reached while fetching profile. Creating temporary profile.");
          // Criar um perfil temporário em memória
          setUserProfile({ 
            id: session.user.id,
            completed_modules: {},
            purchased_modules: []
          });
          setIsLoading(false);
        }, 5000); // 5 segundos de timeout
        
        // Tentar buscar o perfil
        fetchUserProfile(session.user.id)
          .finally(() => {
            clearTimeout(timeoutId); // Limpar o timeout se fetchUserProfile terminar
          });
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        console.log(`[AuthContext] Auth state changed: ${_event}`);
        setIsLoading(true);
        
        try {
          setSession(session);
          setUser(session?.user ?? null);

          if (_event === 'SIGNED_IN' && session?.user) {
            console.log("[AuthContext] SIGNED_IN detected. Fetching profile...");
            
            // Definir um timeout para evitar carregamento infinito
            const timeoutPromise = new Promise<void>(resolve => {
              setTimeout(() => {
                console.log("[AuthContext] Timeout reached. Creating temporary profile.");
                // Criar um perfil temporário em memória
                setUserProfile({ 
                  id: session.user.id,
                  completed_modules: {},
                  purchased_modules: []
                });
                resolve();
              }, 5000); // 5 segundos de timeout
            });
            
            // Corrida entre o timeout e o fetchUserProfile
            await Promise.race([
              fetchUserProfile(session.user.id).then(() => {}),
              timeoutPromise
            ]);
            
            console.log("[AuthContext] Profile handling complete.");
          } else if (_event === 'SIGNED_OUT') {
            console.log("[AuthContext] SIGNED_OUT detected. Clearing profile.");
            setUserProfile(null);
          }
        } catch (error) {
          console.error("[AuthContext] Error during auth state change:", error);
          // Criar um perfil temporário em caso de erro
          if (session?.user) {
            setUserProfile({ 
              id: session.user.id,
              completed_modules: {},
              purchased_modules: []
            });
          }
        } finally {
          setIsLoading(false);
        }
      }
    );

    console.log("[AuthContext] Auth listener setup complete.");
    return () => subscription.unsubscribe();
  }, []);
  
  // Função para buscar o perfil do usuário
  async function fetchUserProfile(userId: string) {
    console.log(`[AuthContext] Fetching profile for user ${userId}...`);
    try {
      console.log('[AuthContext] Realizando fetch direto da tabela profiles com logging detalhado');
      
      // Criar um perfil temporário imediatamente para evitar estado indefinido
      const tempProfile = {
        id: userId,
        email: user?.email || '',
        username: user?.email ? user.email.split('@')[0] : '',
        completed_modules: {},
        purchased_modules: ['pontuacao'],
        pontuacao: false,
        interpretacao_textual: false,
        palavras_repetidas: false,
        _isLoading: true // Flag para indicar que está carregando
      };
      
      // Atualizar o estado com o perfil temporário
      setUserProfile(tempProfile);
      
      // Consulta direta com log detalhado para depuração
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      // Log da resposta bruta do Supabase
      console.log('[AuthContext] Resposta bruta do Supabase:', { data, error });
      
      if (data) {
        console.log('[AuthContext] DADOS BRUTOS DO PERFIL:');
        console.log('ID:', data.id);
        console.log('pontuacao (original):', data.pontuacao, typeof data.pontuacao);
        console.log('interpretacao_textual (original):', data.interpretacao_textual, typeof data.interpretacao_textual);
        console.log('palavras_repetidas (original):', data.palavras_repetidas, typeof data.palavras_repetidas);
        console.log('plano_completo (original):', data.plano_completo, typeof data.plano_completo);
      }
      
      if (error) {
        console.error('[AuthContext] Error fetching profile:', error);
        
        // Se for um erro indicando que o perfil não existe, tentar criar um novo
        if (error.code === 'PGRST116' || (error.message && error.message.includes('not found'))) {
          console.log('[AuthContext] Profile not found. Creating a new one...');
          await createProfile(userId);
        } else {
          // Para outros erros, definir um perfil temporário
          setUserProfile({
            id: userId,
            email: user?.email || '',
            username: user?.email ? user.email.split('@')[0] : '',
            completed_modules: {},
            purchased_modules: ['pontuacao']
          });
        }
      } else if (data) {
        console.log('[AuthContext] Profile found:', data);
        
        // Verificar se o perfil tem todos os campos necessários
        let needsUpdate = false;
        let updateData: any = {};
        
        // Verificar purchased_modules
        if (!data.purchased_modules || !Array.isArray(data.purchased_modules)) {
          data.purchased_modules = ['pontuacao'];
          updateData.purchased_modules = data.purchased_modules;
          needsUpdate = true;
        }
        
        // Verificar email
        if (!data.email && user?.email) {
          data.email = user.email;
          updateData.email = user.email;
          needsUpdate = true;
        }
        
        // Verificar username
        if (!data.username && user?.email) {
          data.username = user.email.split('@')[0];
          updateData.username = data.username;
          needsUpdate = true;
        }
        
        // Atualizar o perfil no Supabase se necessário
        if (needsUpdate) {
          console.log('[AuthContext] Updating profile with missing fields:', updateData);
          const { error: updateError } = await supabase
            .from('profiles')
            .update(updateData)
            .eq('id', userId);
          
          if (updateError) {
            console.error('[AuthContext] Error updating profile:', updateError);
          }
        }
        
        // Converter explicitamente colunas booleanas para garantir consistência
        // Forçar valores booleanos verdadeiros independentemente do formato
        const processedData = {
          ...data,
          // Forçar conversão independente do formato (string, number, boolean)
          // Valores NULL são considerados como false (módulo bloqueado)
          pontuacao: convertToBoolean(data.pontuacao),
          interpretacao_textual: convertToBoolean(data.interpretacao_textual),
          palavras_repetidas: convertToBoolean(data.palavras_repetidas),
          _isLoading: false // Marcar como carregado
        };
        
        // Log detalhado após a conversão
        console.log('[AuthContext] DADOS CONVERTIDOS DO PERFIL:');
        console.log('pontuacao (convertido):', processedData.pontuacao, typeof processedData.pontuacao);
        console.log('interpretacao_textual (convertido):', processedData.interpretacao_textual, typeof processedData.interpretacao_textual);
        console.log('palavras_repetidas (convertido):', processedData.palavras_repetidas, typeof processedData.palavras_repetidas);
        console.log('plano_completo (convertido):', processedData.plano_completo, typeof processedData.plano_completo);
        
        console.log('[AuthContext] Processed profile data:', processedData);
        setUserProfile(processedData);
      } else {
        console.log('[AuthContext] No profile found, creating a new one...');
        await createProfile(userId);
      }
      
      // Definir loading como false para garantir que a UI não fique travada
      setIsLoading(false);
      return true; // Retornar algo para indicar que terminou
    } catch (err) {
      console.error('[AuthContext] Unexpected error in fetchUserProfile:', err);
      // Definir um perfil temporário em caso de erro
      setUserProfile({
        id: userId,
        email: user?.email || '',
        username: user?.email ? user.email.split('@')[0] : '',
        completed_modules: {},
        purchased_modules: ['pontuacao']
      });
      setIsLoading(false);
    }
  };  

  // Função para criar um novo perfil
  async function createProfile(userId: string) {
    try {
      // Preparar os dados do perfil
      const profileData = {
        id: userId,
        email: user?.email || '',
        username: user?.email ? user.email.split('@')[0] : '',
        completed_modules: {},
        purchased_modules: ['pontuacao'] // Liberar o módulo de pontuação por padrão
      };

      console.log('[AuthContext] Creating new profile:', profileData);
      
      const { data, error } = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single();
        
      if (error) {
        console.error('[AuthContext] Error creating profile:', error);
        // Mesmo com erro, definir o perfil localmente
        setUserProfile(profileData);
      } else {
        console.log('[AuthContext] Profile created successfully:', data);
        setUserProfile(data);
      }
    } catch (err) {
      console.error('[AuthContext] Error in createProfile:', err);
      // Definir o perfil localmente em caso de erro
      const profileData = {
        id: userId,
        email: user?.email || '',
        username: user?.email ? user.email.split('@')[0] : '',
        completed_modules: {},
        purchased_modules: ['pontuacao']
      };
      setUserProfile(profileData);
    }
  }

  const signUp = async (email: string, password: string) => {
    const response = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (response.data.user) {
      // Create initial profile in profiles table
      await supabase.from('profiles').insert([
        { 
          id: response.data.user.id, 
          email: email,
          username: email.split('@')[0],
          purchased_modules: ['pontuacao'] // Default module
        }
      ]);
    }
    
    return response;
  };

  const signIn = async (email: string, password: string) => {
    // Primeiro fazemos o login com o Supabase Auth
    const authResponse = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    // Se o login falhar, retornar o erro imediatamente
    if (authResponse.error) {
      return authResponse;
    }
    
    // Se o login for bem-sucedido, verificar se o usuário existe na tabela profiles
    if (authResponse.data.user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authResponse.data.user.id)
        .single();
      
      // Se não encontrar o perfil ou ocorrer erro, criar o perfil
      if (error || !data) {
        console.log('[AuthContext] Perfil não encontrado, criando um novo...');
        // Cria um perfil básico para o usuário
        const { error: insertError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: authResponse.data.user.id, 
              email: email,
              username: email.split('@')[0],
              purchased_modules: ['pontuacao'] // Módulo padrão
            }
          ]);
        
        if (insertError) {
          console.error('[AuthContext] Erro ao criar perfil:', insertError);
          // Apesar do erro, permitimos o login pois a autenticação foi bem-sucedida
        }
      } else {
        console.log('[AuthContext] Perfil encontrado:', data);
      }
    }
    
    return authResponse;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // Atualiza o perfil do usuário no Supabase ou localmente se houver erro
  const updateProfile = async (userData: { 
    username?: string, 
    purchased_modules?: string[], 
    completed_modules?: Record<string, any>,
    pontuacao?: boolean,
    interpretacao_textual?: boolean,
    palavras_repetidas?: boolean,
    _isLoading?: boolean
  }) => {
    if (!user) return { error: 'Usuário não autenticado' };
    
    console.log('[AuthContext] Updating profile:', userData);
    
    try {
      // Tentar atualizar no Supabase
      const { error } = await supabase
        .from('profiles')
        .update(userData)
        .eq('id', user.id);
        
      if (error) {
        console.warn('[AuthContext] Error updating profile in Supabase:', error);
        console.log('[AuthContext] Falling back to local update only');
      } else {
        console.log('[AuthContext] Profile updated successfully in Supabase');
      }
      
      // Sempre atualizar o estado local, mesmo se houver erro no Supabase
      setUserProfile(prev => prev ? {...prev, ...userData} : {
        id: user.id,
        ...userData,
        completed_modules: (userData as any).completed_modules || {}
      });
      
      return { error: null }; // Retornar sucesso mesmo se falhar no Supabase
    } catch (err) {
      console.error('[AuthContext] Error in updateProfile:', err);
      
      // Mesmo com erro, atualizar localmente
      setUserProfile(prev => prev ? {...prev, ...userData} : {
        id: user.id,
        ...userData,
        completed_modules: (userData as any).completed_modules || {}
      });
      
      return { error: null }; // Retornar sucesso mesmo com erro
    }
  };

  // Adiciona um módulo à lista de módulos comprados/desbloqueados
  const addPurchasedModule = async (moduleId: string): Promise<void> => {
    if (!user || !userProfile) return;
    
    console.log(`[AuthContext] Adding purchased module to Supabase: ${moduleId}`);
    
    // Cria um novo array com os módulos existentes mais o novo
    const updatedModules = [
      ...(userProfile.purchased_modules || []),
      moduleId
    ].filter((value, index, self) => self.indexOf(value) === index); // Remove duplicados
    
    // Ignoramos o retorno para corresponder à assinatura Promise<void>
    await updateProfile({ purchased_modules: updatedModules });
  };
  
  // Processa a compra de um plano (básico ou completo)
  const purchasePlan = async (planType: 'basico' | 'completo'): Promise<boolean> => {
    if (!user) return false;
    
    try {
      console.log(`[AuthContext] Processing purchase for plan: ${planType}`);
      
      if (planType === 'basico') {
        // Plano básico - apenas pontuação
        await updateProfile({
          pontuacao: true
        });
      } else if (planType === 'completo') {
        // Plano completo - todos os módulos
        await updateProfile({
          pontuacao: true,
          interpretacao_textual: true, 
          palavras_repetidas: true
        });
      }
      
      return true;
    } catch (error) {
      console.error('[AuthContext] Error processing purchase:', error);
      return false;
    }
  };

  // Não há mais conceito de plano completo, portanto, esta função sempre retorna false
  const hasFullPlan = () => {
    // Plano completo foi removido da tabela, então sempre retorna false
    console.log('[AuthContext] hasFullPlan check: plano_completo não existe mais');
    return false;
  };
  
  // Verifica se o usuário tem acesso a um módulo específico
  const hasPurchasedModule = (moduleId: string) => {
    // Log inicial para debug
    console.log(`[AuthContext] hasPurchasedModule check for module: ${moduleId}`);
    
    // Se o perfil não estiver carregado, retorna false para evitar acesso indevido
    if (!userProfile) {
      console.log(`[AuthContext] No access to module ${moduleId} - userProfile not loaded`);
      return false;
    }
    
    // Se o perfil estiver marcado como carregando, retorna false para evitar flickering
    if (userProfile._isLoading === true) {
      console.log(`[AuthContext] Profile is still loading, denying access to ${moduleId} temporarily`);
      return false;
    }
    
    // Forçar verificar todos os campos manualmente para debug
    console.log(`[AuthContext] DEBUG PROFILE FIELDS:`);
    console.log('------------ INÍCIO VERIFICAÇÃO DE PERMISSÕES ------------');
    console.log('userProfile ID:', userProfile.id);
    console.log('pontuacao:', userProfile.pontuacao, typeof userProfile.pontuacao);
    console.log('interpretacao_textual:', userProfile.interpretacao_textual, typeof userProfile.interpretacao_textual);
    console.log('palavras_repetidas:', userProfile.palavras_repetidas, typeof userProfile.palavras_repetidas);
    console.log('plano_completo:', userProfile.plano_completo, typeof userProfile.plano_completo);
    console.log('------------ FIM VERIFICAÇÃO DE PERMISSÕES ------------');
    
    // Não existe mais conceito de plano completo
    // Cada módulo é liberado individualmente
    
    // Verifica se o módulo está na lista de módulos comprados (compatibilidade)
    const isInPurchasedList = userProfile.purchased_modules && 
      userProfile.purchased_modules.includes(moduleId);
      
    // Forçar verificar manualmente sem usar checkProfileField
    let hasAccess = false;
    
    // Regras de acesso baseadas nas novas colunas
    switch(moduleId) {
      case 'pontuacao':
        // Verificar a coluna pontuacao diretamente
        hasAccess = checkProfileField('pontuacao');
        console.log(`[AuthContext] Module 'pontuacao' access check: ${hasAccess}`);
        return hasAccess; // Remover isInPurchasedList que não é mais usado
               
      // Removido case para 'interpretacao-textual'
               
      case 'palavras-repetitivas':
        // Verificar a coluna palavras_repetidas diretamente
        hasAccess = checkProfileField('palavras_repetidas');
        console.log(`[AuthContext] Module 'palavras_repetidas' access check: ${hasAccess}`);
        return hasAccess; // Remover isInPurchasedList que não é mais usado
               
      case 'editor-textos':
        // O editor de textos está disponível para qualquer usuário logado
        return true;
               
      default:
        return isInPurchasedList;
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    addPurchasedModule,
    hasPurchasedModule,
    purchasePlan,
    userProfile,
    hasFullPlan
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
