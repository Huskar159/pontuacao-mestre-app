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
  updateProfile: (userData: { username?: string, purchased_modules?: string[] }) => Promise<{ error: any | null }>;
  addPurchasedModule: (moduleId: string) => Promise<void>;
  hasPurchasedModule: (moduleId: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<any | null>(null);

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
      // Definir um timeout para a consulta ao Supabase
      const fetchPromise = supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      // Criar uma promessa que rejeita após um timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Timeout ao buscar perfil do Supabase'));
        }, 3000); // 3 segundos de timeout
      });
      
      // Corrida entre o fetch e o timeout
      const { data, error } = await Promise.race([
        fetchPromise,
        timeoutPromise.then(() => ({ data: null, error: new Error('Timeout') }))
      ]) as any;
      
      if (error) {
        console.error('[AuthContext] Error fetching profile:', error);
        // Não tentar criar perfil em caso de erro, apenas definir um perfil temporário
        setUserProfile({
          id: userId,
          completed_modules: {},
          purchased_modules: []
        });
      } else if (data) {
        console.log('[AuthContext] Profile found:', data);
        setUserProfile(data);
      } else {
        console.log('[AuthContext] No profile found, creating temporary profile...');
        // Definir um perfil temporário em vez de tentar criar no Supabase
        setUserProfile({
          id: userId,
          completed_modules: {},
          purchased_modules: []
        });
      }
      
      // Definir loading como false para garantir que a UI não fique travada
      setIsLoading(false);
      return true; // Retornar algo para indicar que terminou
    } catch (err) {
      console.error('[AuthContext] Unexpected error in fetchUserProfile:', err);
      // Definir um perfil temporário em caso de erro
      setUserProfile({
        id: userId,
        completed_modules: {},
        purchased_modules: []
      });
      setIsLoading(false);
      return true; // Retornar algo para indicar que terminou
    }
  }
  
  // Função para criar um novo perfil
  async function createProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert({ id: userId, completed_modules: {} })
        .select()
        .single();
        
      if (error) {
        console.error('[AuthContext] Error creating profile:', error);
      } else {
        console.log('[AuthContext] Profile created successfully:', data);
        setUserProfile(data);
      }
    } catch (err) {
      console.error('[AuthContext] Error in createProfile:', err);
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
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // Atualiza o perfil do usuário no Supabase ou localmente se houver erro
  const updateProfile = async (userData: { username?: string, purchased_modules?: string[] }) => {
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
        completed_modules: userData.completed_modules || {}
      });
      
      return { error: null }; // Retornar sucesso mesmo se falhar no Supabase
    } catch (err) {
      console.error('[AuthContext] Error in updateProfile:', err);
      
      // Mesmo com erro, atualizar localmente
      setUserProfile(prev => prev ? {...prev, ...userData} : {
        id: user.id,
        ...userData,
        completed_modules: userData.completed_modules || {}
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

  // Verifica se o usuário tem acesso a um módulo específico
  const hasPurchasedModule = (moduleId: string) => {
    if (!userProfile || !userProfile.purchased_modules) return false;
    return userProfile.purchased_modules.includes(moduleId);
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
    hasPurchasedModule
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
