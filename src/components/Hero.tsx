import { CalendarCheck, ArrowRight } from 'lucide-react';

import fachadaImg from '../assets/EstruturaFachada2.png';
import logoImg from '../assets/logo.png';

export default function Hero() {
  return (
    <section id="inicio" aria-label="Seção Inicial" className="relative w-full min-h-screen flex items-center bg-bodylife-base pt-20 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bodylife-red/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bodylife-dark/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10 py-12 lg:py-0">
        
        <div className="space-y-8 animate-fade-in">
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bodylife-dark leading-[1.05] tracking-tight">
            Saúde e <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bodylife-red to-red-700 drop-shadow-sm font-bold">
              Bem-estar.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-bold max-w-lg leading-relaxed">
            Mais do que tratar sintomas, cuidamos de você por completo. Fisioterapia, Estética, Nutrição e Medicina integradas em um só lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/5561998796606?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta!" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-bodylife-red text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(211,47,47,0.3)] hover:shadow-[0_15px_40px_rgba(211,47,47,0.5)] group"
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

          {/* Assinatura de Autoridade com a Logo BLINDADA (Tamanho rígido) */}
          <div className="flex items-center gap-4 pt-8 border-t border-gray-200/60">
            <img 
              src={logoImg} 
              alt="Instituto Bodylife" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm shrink-0" 
            />
            <div>
              <p className="text-sm font-bold text-bodylife-dark">Cuidado Integrado</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-0.5">Sua melhor versão começa aqui</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl group mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/80 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <img 
            src={fachadaImg} 
            alt="Fachada do Instituto Bodylife no Guará" 
            fetchPriority="high"
            loading="eager" 
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
          />
        </div>

      </div>
    </section>
  );
}