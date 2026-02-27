import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Importação dos componentes refinados no Pente Fino
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Especialidades from "./components/Especialidades";
import Carrossel from "./components/Carrossel";
import Convenios from "./components/Convenios";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  // Ativa o Intersection Observer de alta performance
  useScrollReveal();

  const [scrollProgress, setScrollProgress] = useState(0);

  // Lógica de Scroll Progress otimizada com requestAnimationFrame
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
      
      {/* 1. BARRA DE PROGRESSO PREMIUM (Com brilho e gradiente) */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-bodylife-red to-red-500 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(211,47,47,0.5)]" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. ELEMENTOS DE FUNDO (A "Vida" do site - Blobs orgânicos) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob superior esquerdo */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-bodylife-red/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        {/* Blob central direito (Hemoglobina) */}
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-bodylife-red/3 rounded-full blur-[100px]" />
        {/* Blob inferior esquerdo */}
        <div className="absolute bottom-[-5%] left-[-10%] w-[30%] h-[30%] bg-bodylife-dark/5 rounded-full blur-[100px]" />
      </div>

      {/* 3. ESTRUTURA DO SITE (O Orquestrador) */}
      <Navbar />
      
      {/* Seção Hero: Impacto imediato */}
      <Hero />
      
      {/* Funil de Conversão: Sobre -> Especialidades -> Prova Social -> FAQ */}
      <article className="w-full relative z-10">
        <div className="reveal"><Sobre /></div>
        
        <div className="w-full bg-white/40 backdrop-blur-sm reveal">
          <Especialidades />
        </div>

        <div className="reveal"><Carrossel /></div>
        
        <div className="reveal"><Convenios /></div>
        
        <div className="reveal"><Depoimentos /></div>
        
        <div className="reveal"><FAQ /></div>
      </article>

      <Footer />

      {/* 4. BOTÃO WHATSAPP PREMIUM (Blindado e com Tooltip Dinâmico) */}
      <a 
        href="https://wa.me/5561998796606?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta!" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group active:scale-90 transition-all duration-300"
        aria-label="Agendar consulta no WhatsApp"
      >
        {/* Anel de pulso externo */}
        <span className="absolute inset-[-8px] bg-green-500 rounded-full animate-pulse opacity-20 pointer-events-none"></span>
        
        {/* Botão principal */}
        <div className="bg-green-500 text-white p-4 rounded-2xl shadow-[0_10px_25px_rgba(34,197,94,0.4)] relative hover:bg-green-600 transition-colors flex items-center justify-center">
          <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
          
          {/* Badge de "Online" sutil */}
          <span className="absolute top-3 right-3 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        
        {/* Tooltip Master level */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 bg-bodylife-dark text-white rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300 shadow-2xl translate-x-4 group-hover:translate-x-0 pointer-events-none">
          Precisa de ajuda? **Fale conosco**
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 bg-bodylife-dark rotate-45 -translate-x-1/2"></div>
        </div>
      </a>

    </main>
  );
}

export default App;