
import React from 'react';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ProductDetails from '@/components/ProductDetails';
import UpsellOptions from '@/components/UpsellOptions';
import Testimonials from '@/components/Testimonials';
import Guarantee from '@/components/Guarantee';
import CheckoutForm from '@/components/CheckoutForm';
import { Check } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-brand-blue">Pontuação Mestre</div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-brand-green" />
            <span className="text-sm font-medium">Mais de 2.500 alunos aprovados</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <ProblemSolution />
        <ProductDetails />
        <Testimonials />
        <UpsellOptions />
        <Guarantee />
        <CheckoutForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="font-bold text-xl mb-4">Pontuação Mestre</div>
            <p className="text-gray-300 text-sm mb-6">
              © {new Date().getFullYear()} Pontuação Mestre. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-white">Termos de Uso</a>
              <a href="#" className="text-gray-300 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-gray-300 hover:text-white">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
