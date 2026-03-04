import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Importação dos componentes refinados
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Especialidades from "./components/Especialidades";
import Carrossel from "./components/Carrossel";
import Convenios from "./components/Convenios";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  useScrollReveal();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let requestRunning = false;

    const handleScroll = () => {
      if (!requestRunning) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);
          requestRunning = false;
        });
        requestRunning = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-x-hidden bg-bodylife-base selection:bg-bodylife-red/20 selection:text-bodylife-red">
      
      {/* 1. BARRA DE PROGRESSO */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-bodylife-red to-red-500 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(211,47,47,0.5)]" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. ELEMENTOS DE FUNDO */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-bodylife-red/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-bodylife-red/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[30%] h-[30%] bg-bodylife-dark/5 rounded-full blur-[100px]" />
      </div>

      {/* 3. ESTRUTURA DO SITE */}
      <Navbar />
      
      <Hero />
      
      <article className="w-full relative z-10">
        {/* O Instituto */}
        <div className="reveal"><Sobre /></div>
        
        {/* Corpo Clínico e Especialidades */}
        <div className="w-full bg-white/40 backdrop-blur-sm reveal">
          <Especialidades />
        </div>

        {/* Tour Virtual */}
        <div className="reveal"><Carrossel /></div>
        
        {/* Planos de Saúde */}
        <div className="reveal"><Convenios /></div>
        
        {/* NOVO: Integração / Automação com Instagram */}
        <section className="w-full py-20 bg-white border-t border-gray-100 reveal">
          <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            <div className="bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 p-4 rounded-full text-white mb-6 shadow-lg shadow-pink-500/30">
              <Instagram size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-bodylife-dark tracking-tighter mb-4">
              Acompanhe nosso dia a dia
            </h2>
            <p className="text-gray-500 text-lg font-bold mb-8 max-w-2xl">
              Siga nosso Instagram para dicas exclusivas de saúde, novidades sobre tratamentos e os bastidores do Instituto Bodylife.
            </p>
            <a 
              href="https://instagram.com/institutobodylife" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-bodylife-red text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all shadow-xl"
            >
              @institutobodylife
            </a>
          </div>
        </section>

        {/* Dúvidas Frequentes */}
        <div className="reveal"><FAQ /></div>
      </article>

      <Footer />

    </main>
  );
}

export default App;