import { MessageCircle, HeartHandshake } from 'lucide-react';

export default function Convenios() {
  // Lista de convênios preservada com as exatas imagens e extensões que você configurou
  const convenios = [
    { nome: "AFEB", logo: "/convenios/afeb.png" },
    { nome: "BACEN", logo: "/convenios/banco.webp" },
    { nome: "BNDES", logo: "/convenios/bndes.jpg" },
    { nome: "CAESAN", logo: "/convenios/caesan.webp" },
    { nome: "CAPESESP", logo: "/convenios/capesesp.png" },
    { nome: "CODEVASF", logo: "/convenios/codes.webp" },
    { nome: "CONAB", logo: "/convenios/conab.png" },
    { nome: "EMBRATEL/TELOS", logo: "/convenios/embratel.png" },
    { nome: "FASCAL", logo: "/convenios/fascal.webp" },
    { nome: "FUSEX", logo: "/convenios/fusex.webp" },
    { nome: "INAS-GDF", logo: "/convenios/inas.jpg" },
    { nome: "LUMINAR", logo: "/convenios/luminar.png" },
    { nome: "NOTRE DAME", logo: "/convenios/notre.webp" },
    { nome: "NOVA SAÚDE", logo: "/convenios/nova.png" },
    { nome: "OMINT", logo: "/convenios/omint.png" },
    { nome: "PF SAÚDE", logo: "/convenios/pf.webp" },
    { nome: "PLAN-ASSISTE", logo: "/convenios/plan.png" },
    { nome: "POSTAL SAÚDE", logo: "/convenios/postal.png" },
    { nome: "REAL GRANDEZA", logo: "/convenios/real.png" },
    { nome: "SAMP/AGMP", logo: "/convenios/samp.jpeg" },
    { nome: "SAÚDE CAIXA", logo: "/convenios/saude.webp" },
    { nome: "SERPRO", logo: "/convenios/serpro.webp" },
    { nome: "SIS", logo: "/convenios/sis.webp" },
    { nome: "STF-MED", logo: "/convenios/stf.jpg" },
    { nome: "STM", logo: "/convenios/stm.png" },
    { nome: "TRE", logo: "/convenios/tre.webp" }, // Corrigido de TER para TRE
    { nome: "TJDFT", logo: "/convenios/tjdft.png" },
    { nome: "TRF", logo: "/convenios/trf.webp" },
    { nome: "TRT", logo: "/convenios/trt.png" },
    { nome: "TST", logo: "/convenios/tst.webp" },
    { nome: "UNAFISCO", logo: "/convenios/saude.webp" },
    { nome: "UNIMED VTRP", logo: "/convenios/unimed.webp" }
  ];

  return (
    <section id="convenios" aria-labelledby="titulo-convenios" className="w-full py-24 bg-white overflow-hidden border-t border-gray-50">
      
      {/* Cabeçalho com Reveal */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 reveal">
        <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
          <HeartHandshake size={18} />
          Facilidade para você
        </span>
        <h2 id="titulo-convenios" className="text-4xl md:text-5xl lg:text-6xl font-bold text-bodylife-dark uppercase tracking-tighter mb-6">
          Convênios Atendidos
        </h2>
        <div className="h-1.5 w-24 bg-bodylife-red mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Sua saúde não precisa esperar. Temos parceria com os principais planos de saúde para garantir o seu atendimento com comodidade e segurança.
        </p>
      </div>

      {/* TRUQUE SEO/A11Y MASTER LEVEL */}
      <ul className="sr-only">
        {convenios.map((convenio, index) => (
          <li key={`sr-${index}`}>{convenio.nome}</li>
        ))}
      </ul>

      {/* Grid Estático e Alinhado de Convênios */}
      <div aria-hidden="true" className="w-full relative py-12 bg-bodylife-base border-y border-gray-100 reveal delay-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {convenios.map((convenio, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-24 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-bodylife-red/50 hover:shadow-lg transition-all duration-300 group"
                title={convenio.nome}
              >
                <img 
                  src={convenio.logo} 
                  alt={`Logo ${convenio.nome}`}
                  loading="lazy"
                  decoding="async" 
                  className="max-w-full max-h-[80%] object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="hidden font-bold text-gray-600 text-sm text-center">
                  {convenio.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA de Captura de Leads (Design UI Refinado) */}
      <div className="max-w-5xl mx-auto px-4 mt-20 reveal delay-200">
        <div className="bg-gradient-to-br from-bodylife-dark to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-gray-700">
          
          {/* Efeito abstrato de luz no fundo do Card */}
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-bodylife-red/10 rotate-12 blur-3xl pointer-events-none"></div>
          
          <div className="text-center md:text-left relative z-10 space-y-3">
            <h3 className="text-3xl font-bold text-white tracking-tight">Não encontrou o seu convênio?</h3>
            <p className="text-gray-300 font-bold text-lg md:text-xl max-w-xl">
              Temos soluções flexíveis! Verifique a disponibilidade com nossa equipe de recepção.
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