
import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  text: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Silva",
      position: "Aprovada no TRT",
      text: "O módulo de pontuação foi decisivo para minha aprovação! Consegui acertar todas as questões de português graças aos exercícios práticos e explicações objetivas.",
      stars: 5
    },
    {
      name: "Carlos Mendes",
      position: "Estudante para Diplomacia",
      text: "Material direto ao ponto e muito eficaz. Em duas semanas de estudo intenso, consegui dominar as regras de pontuação que sempre me confundiam.",
      stars: 5
    },
    {
      name: "Juliana Ferreira",
      position: "Aprovada em Concurso Municipal",
      text: "O melhor custo-benefício que encontrei. Por apenas R$ 27 tive acesso a um conteúdo que valia muito mais. Recomendo fortemente!",
      stars: 5
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem Já Utilizou, Aprovou
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja o que dizem os alunos que já aplicaram nosso método
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.934l6.18 3.78-1.651-7.13L20 7.566l-7.292-.628L10 0 7.292 6.938 0 7.566l5.471 5.018L3.82 19.714 10 15.934z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
