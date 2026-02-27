import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: "Quais convênios o Instituto Bodylife atende?",
      resposta: "Atendemos uma ampla rede de convênios, incluindo BACEN, BNDES, Saúde Caixa, TRT, TST, STF-MED, entre dezenas de outros. Confira a nossa seção de 'Convênios' acima para a lista completa. Caso o seu não esteja lá, entre em contato para verificarmos opções de reembolso."
    },
    {
      pergunta: "Como funciona o agendamento de consultas?",
      resposta: "Pensando na sua comodidade, todo o nosso agendamento é feito de forma rápida e humanizada pelo nosso WhatsApp oficial. Basta clicar em qualquer botão vermelho do site, escolher sua especialidade e nossa equipe encontrará o melhor horário para você."
    },
    {
      pergunta: "A clínica possui estacionamento?",
      resposta: "Sim! Estamos localizados no Guará II (QI 08) em um ponto de fácil acesso, com facilidade para estacionar nas proximidades da clínica, garantindo tranquilidade desde a sua chegada."
    },
    {
      pergunta: "Vocês atendem pacientes de todas as idades?",
      resposta: "Com certeza. Nossa equipe multidisciplinar está preparada para cuidar de toda a sua família. Temos desde nutrição e clínica médica para a terceira idade, até tratamentos estéticos e fisioterapia esportiva."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Estamos abertos de Segunda a Sexta-feira, das 07h às 19h. Recomendamos que agende sua consulta com antecedência para garantir o horário que melhor se adapta à sua rotina."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // TRUQUE MASTER SEO: Schema Markup do Google para Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.resposta,
      },
    })),
  };

  return (
    <section aria-labelledby="titulo-faq" className="w-full py-24 bg-bodylife-base border-t border-gray-100 overflow-hidden relative">
      
      {/* Injeção do Schema SEO Invisível no Head da página */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Detalhe de fundo abstrato para tirar a monotonia do cinza */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bodylife-red/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho Animado */}
        <div className="text-center mb-16 reveal">
          <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <HelpCircle size={18} />
            Tire suas dúvidas
          </span>
          <h2 id="titulo-faq" className="text-4xl md:text-5xl lg:text-6xl font-black text-bodylife-dark uppercase tracking-tighter mb-6">
            Perguntas Frequentes
          </h2>
          <div className="h-1.5 w-24 bg-bodylife-red mx-auto rounded-full"></div>
        </div>

        {/* Lista de Perguntas (Acordeão com Acessibilidade e Performance) */}
        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Botão Acessível */}
                <button
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-bodylife-red focus-visible:ring-offset-2 rounded-2xl group"
                >
                  <span className={`font-bold text-base md:text-lg lg:text-xl pr-6 transition-colors duration-300 ${isOpen ? 'text-bodylife-red' : 'text-bodylife-dark group-hover:text-bodylife-red'}`}>
                    {faq.pergunta}
                  </span>
                  
                  <div className={`p-2 rounded-full transition-colors duration-300 shrink-0 ${isOpen ? 'bg-bodylife-red/10' : 'bg-gray-50 group-hover:bg-bodylife-red/10'}`}>
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180 text-bodylife-red' : 'text-gray-400 group-hover:text-bodylife-red'}`} 
                    />
                  </div>
                </button>
                
                {/* Resposta (Animação de Grid Perfeita com Acessibilidade) */}
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-8 pb-6 md:pb-8 text-gray-600 font-medium text-sm md:text-base leading-relaxed mt-2 border-t border-gray-50 pt-4 md:pt-6">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card de CTA Premium (Para dúvidas não respondidas) */}
        <div className="mt-16 reveal delay-300">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 text-center border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
            
            <h4 className="text-2xl font-black text-bodylife-dark mb-3">Ainda tem alguma dúvida?</h4>
            <p className="text-gray-500 mb-8 font-medium text-lg">Nossa equipe de atendimento humano está pronta para ajudar você agora mesmo.</p>
            
            <a 
              href="https://wa.me/5561998796606?text=Olá,%20estou%20no%20site%20e%20fiquei%20com%20uma%20dúvida." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-bodylife-dark text-white px-8 py-4 md:py-5 rounded-xl font-bold text-lg hover:bg-gray-800 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl group"
            >
              <MessageCircle size={24} className="text-bodylife-red group-hover:animate-bounce" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}