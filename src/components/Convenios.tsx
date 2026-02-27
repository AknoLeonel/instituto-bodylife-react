import { ShieldCheck, MessageCircle, HeartHandshake } from 'lucide-react';

export default function Convenios() {
  // Array limpo e organizado alfabeticamente
  const convenios = [
    "AFEB", "BACEN", "BNDES", "CAESAN", "CAPESESP", "CODEVASF", "CONAB", 
    "EMBRATEL/TELOS", "FASCAL", "FUSEX", "LUMINAR", "NOTRE DAME", 
    "NOVA SAÚDE", "OMINT", "PF SAÚDE", "PLAN-ASSISTE", "POSTAL SAÚDE", 
    "REAL GRANDEZA", "SAMP/AGMP", "SAÚDE CAIXA", "SIS", "SERPRO", 
    "STF-MED", "STM", "TJDFT", "TER", "TRF", "TRT", "TST", 
    "UNAFISCO", "UNIMED VTRP", "INAS-GDF"
  ].sort();

  // Divisão matemática perfeita para as duas linhas do carrossel visual
  const metade = Math.ceil(convenios.length / 2);
  const linha1 = [...convenios.slice(0, metade), ...convenios.slice(0, metade)];
  const linha2 = [...convenios.slice(metade), ...convenios.slice(metade)];

  return (
    // Tag semântica com aria-labelledby para acessibilidade máxima
    <section aria-labelledby="titulo-convenios" className="w-full py-24 bg-white overflow-hidden border-t border-gray-50">
      
      {/* Cabeçalho com Reveal */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 reveal">
        <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
          <HeartHandshake size={18} />
          Facilidade para você
        </span>
        <h2 id="titulo-convenios" className="text-4xl md:text-5xl lg:text-6xl font-black text-bodylife-dark uppercase tracking-tighter mb-6">
          Convênios Atendidos
        </h2>
        <div className="h-1.5 w-24 bg-bodylife-red mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Sua saúde não precisa esperar. Temos parceria com os principais planos de saúde para garantir o seu atendimento com comodidade e segurança.
        </p>
      </div>

      {/* TRUQUE SEO/A11Y MASTER LEVEL:
        Lista estruturada semanticamente exclusiva para Google Bots e Leitores de Tela.
        Fica invisível visualmente, mas é perfeitamente lida pelas máquinas.
      */}
      <ul className="sr-only">
        {convenios.map((convenio, index) => (
          <li key={`sr-${index}`}>{convenio}</li>
        ))}
      </ul>

      {/* Container das Faixas Visuais de Convênios (aria-hidden esconde dos leitores de tela para não duplicar áudio) */}
      <div aria-hidden="true" className="w-full relative py-10 bg-bodylife-base border-y border-gray-100 flex flex-col gap-6 lg:gap-8 reveal delay-100">
        
        {/* Sombras laterais premium (Fade Out) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bodylife-base to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bodylife-base to-transparent z-10 pointer-events-none"></div>

        {/* Linha 1 (Animação para a esquerda, forçando GPU com will-change-transform) */}
        <div className="animate-scroll flex gap-4 md:gap-6 px-4 w-max will-change-transform">
          {linha1.map((convenio, index) => (
            <div 
              key={`l1-${index}`} 
              className="flex items-center gap-3 bg-white px-6 md:px-8 py-4 rounded-2xl border border-gray-100 shadow-sm shrink-0 hover:border-bodylife-red/50 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <ShieldCheck className="text-gray-300 group-hover:text-bodylife-red transition-colors shrink-0" size={24} />
              <span className="font-bold text-gray-600 group-hover:text-bodylife-dark text-base md:text-lg transition-colors whitespace-nowrap">
                {convenio}
              </span>
            </div>
          ))}
        </div>

        {/* Linha 2 (Animação para a direita, forçando GPU) */}
        <div className="animate-scroll-reverse flex gap-4 md:gap-6 px-4 w-max will-change-transform">
          {linha2.map((convenio, index) => (
            <div 
              key={`l2-${index}`} 
              className="flex items-center gap-3 bg-white px-6 md:px-8 py-4 rounded-2xl border border-gray-100 shadow-sm shrink-0 hover:border-bodylife-red/50 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <ShieldCheck className="text-gray-300 group-hover:text-bodylife-red transition-colors shrink-0" size={24} />
              <span className="font-bold text-gray-600 group-hover:text-bodylife-dark text-base md:text-lg transition-colors whitespace-nowrap">
                {convenio}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA de Captura de Leads (Design UI Refinado) */}
      <div className="max-w-5xl mx-auto px-4 mt-20 reveal delay-200">
        <div className="bg-gradient-to-br from-bodylife-dark to-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-gray-800">
          
          {/* Efeito abstrato de luz no fundo do Card */}
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-bodylife-red/10 rotate-12 blur-3xl pointer-events-none"></div>
          
          <div className="text-center md:text-left relative z-10 space-y-3">
            <h3 className="text-3xl font-black text-white tracking-tight">Não encontrou o seu convênio?</h3>
            <p className="text-gray-400 font-medium text-lg md:text-xl max-w-xl">
              Temos soluções flexíveis! Verifique a disponibilidade, parcerias ou opções de reembolso diretamente com nossa equipe de recepção.
            </p>
          </div>
          
          <a 
            href="https://wa.me/5561998796606?text=Olá,%20gostaria%20de%20saber%20se%20vocês%20atendem%20o%20meu%20convênio." 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-bodylife-red text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-red-600 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(211,47,47,0.4)] hover:shadow-[0_0_30px_rgba(211,47,47,0.6)] relative z-10 w-full md:w-auto shrink-0"
          >
            <MessageCircle size={24} className="group-hover:animate-bounce" />
            Falar com a Recepção
          </a>
        </div>
      </div>
    </section>
  );
}