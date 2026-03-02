import { Target, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

// Importação da Imagem Real da Estrutura
import recepcaoImg from '../assets/EstruturaNome.png';

export default function Sobre() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="w-full py-24 lg:py-32 bg-white overflow-hidden relative">
      
      {/* Detalhe de fundo muito sutil para quebrar o branco absoluto */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* ========================================= */}
        {/* LADO ESQUERDO: Imagem Premium com Offset */}
        {/* ========================================= */}
        <div className="relative group reveal">
          
          <div className="absolute inset-0 bg-bodylife-red/5 rounded-[2.5rem] transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute inset-0 border-2 border-bodylife-red/10 rounded-[2.5rem] transform -translate-x-4 -translate-y-4 lg:-translate-x-6 lg:-translate-y-6 -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <img 
              src={recepcaoImg} 
              alt="Recepção acolhedora do Instituto Bodylife" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out"
            />
          </div>
          
          <div 
            className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-80 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/60 z-20"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
             <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-bodylife-red/20 to-bodylife-red/5 p-4 rounded-full text-bodylife-red shrink-0 shadow-inner">
                  <Heart size={32} className="fill-bodylife-red/20" />
                </div>
                <div>
                  <p className="text-bodylife-dark font-bold text-lg sm:text-xl leading-tight tracking-tight">Cuidado Humanizado</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 font-bold leading-snug">Sua qualidade de vida é a nossa maior prioridade.</p>
                </div>
             </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* LADO DIREITO: Textos e Diferenciais */}
        {/* ========================================= */}
        <div className="space-y-10 pt-8 lg:pt-0">
          
          {/* Cabeçalho do Texto */}
          <div className="reveal delay-100">
            {/* O "O Instituto" que ficava aqui foi removido conforme solicitado */}
            <h2 id="titulo-sobre" className="text-4xl md:text-5xl lg:text-6xl font-bold text-bodylife-dark tracking-tighter leading-[1.05]">
              Cuidado Completo e <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bodylife-red to-red-600 drop-shadow-sm font-bold">
                Integrado.
              </span>
            </h2>
          </div>

          {/* Novos Parágrafos Descritivos (Com negritos estratégicos) */}
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed reveal delay-200">
            <p>
              O <strong className="text-bodylife-dark font-bold">Instituto BodyLife</strong> nasceu de uma lacuna clara: a falta de um espaço verdadeiramente integrado em saúde. Idealizado por profissionais de diferentes áreas, o instituto foi criado para reunir, em um único lugar, diversas especialidades que se complementam — tornando o cuidado mais <strong className="text-bodylife-dark font-bold">eficiente, acessível e contínuo</strong>.
            </p>
            <p>
              Localizado no <strong className="text-bodylife-dark font-bold">Guará 1</strong>, o Instituto BodyLife surge como uma solução para quem busca praticidade sem abrir mão de qualidade. Aqui, o paciente deixa de percorrer vários caminhos e passa a ter um acompanhamento completo, com uma <strong className="text-bodylife-dark font-bold">visão global da sua saúde</strong>.
            </p>
            <p className="text-bodylife-red font-bold text-xl">
              Mais do que atender, nosso propósito é integrar, otimizar e transformar a forma como você cuida de si.
            </p>
          </div>

          {/* Grid de Diferenciais (Ícones) */}
          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100 reveal delay-300">
            
            <div className="flex gap-4 group cursor-default">
              <div className="bg-bodylife-base p-3.5 rounded-2xl h-fit group-hover:bg-bodylife-red transition-colors duration-300 shadow-sm border border-gray-100">
                <ShieldCheck className="text-bodylife-red group-hover:text-white transition-colors duration-300 shrink-0" size={26} />
              </div>
              <div>
                <h4 className="font-bold text-bodylife-dark text-lg group-hover:text-bodylife-red transition-colors duration-300">Excelência Médica</h4>
                <p className="text-sm text-gray-500 mt-1.5 leading-snug font-bold">Equipe multidisciplinar e altamente capacitada.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-default">
              <div className="bg-bodylife-base p-3.5 rounded-2xl h-fit group-hover:bg-bodylife-red transition-colors duration-300 shadow-sm border border-gray-100">
                <Target className="text-bodylife-red group-hover:text-white transition-colors duration-300 shrink-0" size={26} />
              </div>
              <div>
                <h4 className="font-bold text-bodylife-dark text-lg group-hover:text-bodylife-red transition-colors duration-300">Visão Global</h4>
                <p className="text-sm text-gray-500 mt-1.5 leading-snug font-bold">Acompanhamento completo e 100% integrado para você.</p>
              </div>
            </div>

          </div>

          {/* Link de Ação Suave (Soft CTA) */}
          <div className="pt-4 reveal delay-300">
            <a 
              href="#especialidades" 
              className="inline-flex items-center gap-2.5 font-bold text-bodylife-red hover:text-red-800 transition-all duration-300 group text-lg bg-bodylife-red/5 hover:bg-bodylife-red/10 px-6 py-3 rounded-xl"
            >
              Conheça nosso corpo clínico
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}