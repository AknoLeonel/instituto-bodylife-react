import { CalendarCheck, Star, Users, ArrowRight } from 'lucide-react';

// Importação da Imagem Real da Fachada (Pente Fino)
import fachadaImg from '../assets/EstruturaFachada2.png';

export default function Hero() {
  return (
    <section id="inicio" aria-label="Seção Inicial" className="relative w-full min-h-screen flex items-center bg-bodylife-base pt-20 overflow-hidden">
      
      {/* Elementos decorativos de fundo abstratos (Efeito Premium) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bodylife-red/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bodylife-dark/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10 py-12 lg:py-0">
        
        {/* COLUNA DA ESQUERDA: Textos e Botões */}
        <div className="space-y-8 animate-fade-in">
          
          {/* Badge Chamativo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mt-4 lg:mt-0">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bodylife-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bodylife-red"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-bodylife-dark uppercase tracking-widest">
              Centro de Referência no Guará
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-bodylife-dark leading-[1.05] tracking-tight">
            Sua saúde em <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bodylife-red to-red-700 drop-shadow-sm">
              Movimento.
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-lg leading-relaxed">
            Mais do que tratar sintomas, cuidamos de você por completo. Fisioterapia, Estética, Nutrição e Medicina integradas em um só lugar.
          </p>
          
          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/5561998796606?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta!" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-bodylife-red text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(211,47,47,0.3)] hover:shadow-[0_15px_40px_rgba(211,47,47,0.5)] group"
            >
              <CalendarCheck size={24} className="group-hover:-rotate-12 transition-transform duration-300" />
              AGENDAR CONSULTA
            </a>
            <a 
              href="#especialidades" 
              className="flex items-center justify-center gap-2 bg-white text-bodylife-dark border-2 border-gray-100 px-8 py-4 md:py-5 rounded-2xl font-bold text-lg hover:border-bodylife-red/30 hover:bg-gray-50 active:scale-95 transition-all duration-300 group"
            >
              Ver Tratamentos
              <ArrowRight size={20} className="text-bodylife-red group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Prova Social */}
          <div className="flex items-center gap-4 pt-8 border-t border-gray-200/60">
            <div className="flex -space-x-3 shrink-0" aria-hidden="true">
              <img className="w-12 h-12 rounded-full border-4 border-bodylife-base object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar Paciente 1" loading="lazy" />
              <img className="w-12 h-12 rounded-full border-4 border-bodylife-base object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar Paciente 2" loading="lazy" />
              <img className="w-12 h-12 rounded-full border-4 border-bodylife-base object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Avatar Paciente 3" loading="lazy" />
              <div className="w-12 h-12 rounded-full border-4 border-bodylife-base bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                +1k
              </div>
            </div>
            <div role="img" aria-label="Avaliação de 5 estrelas por mais de mil pacientes">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={18} fill="currentColor" aria-hidden="true" />
                <Star size={18} fill="currentColor" aria-hidden="true" />
                <Star size={18} fill="currentColor" aria-hidden="true" />
                <Star size={18} fill="currentColor" aria-hidden="true" />
                <Star size={18} fill="currentColor" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold text-bodylife-dark mt-0.5">Pacientes satisfeitos</p>
            </div>
          </div>
        </div>
        
        {/* COLUNA DA DIREITA: Imagem Real e Cards Flutuantes */}
        <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl group mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
          
          <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/80 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          {/* Fachada Real do Instituto Bodylife */}
          <img 
            src={fachadaImg} 
            alt="Fachada do Instituto Bodylife no Guará" 
            fetchPriority="high"
            loading="eager" 
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
          />
          
          <div 
            className="absolute bottom-8 left-6 md:left-8 z-20 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-2xl border border-white/40"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-bodylife-red/10 p-3 rounded-full text-bodylife-red shrink-0">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-0.5">Equipe</p>
                <p className="text-base md:text-lg font-black text-bodylife-dark leading-none">Multidisciplinar</p>
              </div>
            </div>
          </div>

          <div 
            className="absolute top-8 right-6 md:right-8 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-2xl border border-white/40 flex items-center gap-3"
            style={{ animation: 'float 5s ease-in-out infinite reverse' }}
          >
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-bold text-bodylife-dark text-xs md:text-sm uppercase tracking-wider">Atendimento Imediato</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}