import { Star, Quote, BadgeCheck } from 'lucide-react';

export default function Depoimentos() {
  const reviews = [
    {
      nome: "Carlos Eduardo Silva",
      tratamento: "Fisioterapia Ortopédica",
      texto: "Cheguei na clínica com uma dor crônica no ombro que já durava meses. Na terceira sessão já senti uma diferença absurdda. Equipe nota 10, atendimento humanizado e estrutura de primeiro mundo.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      nome: "Mariana Costa",
      tratamento: "Estética Avançada",
      texto: "Profissionais extremamente qualificadas. Fiz meu preenchimento e botox e o resultado ficou super natural, exatamente como eu queria. O cuidado no pós-atendimento me ganhou como cliente.",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      nome: "Roberto Mendes",
      tratamento: "Pilates Clínico",
      texto: "Tenho hérnia de disco e o pilates clínico do Instituto devolveu minha qualidade de vida. O estúdio é moderno, os aparelhos são novos e as fisioterapeutas são muito atenciosas aos nossos limites.",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    // Tag section com aria-labelledby para acessibilidade
    <section aria-labelledby="titulo-depoimentos" className="w-full py-24 bg-bodylife-base border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 reveal">
          <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-2 block">Prova Social</span>
          <h2 id="titulo-depoimentos" className="text-4xl md:text-5xl lg:text-6xl font-black text-bodylife-dark uppercase tracking-tighter mb-4">
            O que dizem sobre nós
          </h2>
          <div className="h-1.5 w-24 bg-bodylife-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid de Cards (Garante mesma altura com h-full e flex) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <article 
              key={index} 
              // Atraso de transição direto no style previne bugs de compilação do Tailwind
              className="reveal bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full group"
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Ícone de aspas decorativo */}
              <div className="absolute top-8 right-8 text-bodylife-base group-hover:text-bodylife-red/10 transition-colors duration-500 pointer-events-none">
                <Quote size={80} className="transform rotate-180" />
              </div>

              {/* Estrelas + Badge de Verificado (Acessibilidade aplicada) */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div 
                  className="flex gap-1" 
                  aria-label="Avaliação de 5 estrelas" 
                  role="img"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                
                {/* Gatilho de Confiança */}
                <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <BadgeCheck size={14} />
                  <span>Verificado</span>
                </div>
              </div>

              {/* Texto do depoimento (flex-1 empurra o perfil para baixo, mantendo alinhamento) */}
              <blockquote className="flex-1 text-gray-600 font-medium text-lg leading-relaxed mb-8 relative z-10 italic">
                "{review.texto}"
              </blockquote>

              {/* Perfil do Paciente */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto relative z-10">
                <img 
                  src={review.foto} 
                  alt={`Foto do paciente ${review.nome}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-md group-hover:border-bodylife-red/20 transition-colors duration-300"
                />
                <div>
                  <h4 className="font-bold text-bodylife-dark text-lg leading-tight">{review.nome}</h4>
                  <p className="text-xs font-bold uppercase text-bodylife-red tracking-wider mt-1">
                    {review.tratamento}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}