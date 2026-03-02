import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Mail, Instagram, Navigation } from 'lucide-react';
import logoImg from '../assets/logosemfun.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'O Instituto', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Convênios', href: '#convenios' },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 h-20'
          : 'bg-transparent h-24'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        <a href="#inicio" className="flex items-center gap-3 z-50 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-bodylife-red rounded-sm">
          {/* LOGO BLINDADA */}
          <img 
            src={logoImg} 
            alt="Logo Instituto Bodylife" 
            className={`object-contain shrink-0 transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-14 h-14'}`}
          />
        </a>

        {/* Menu Central Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-sm font-bold text-gray-600 hover:text-bodylife-red transition-colors py-2 group focus:outline-none focus-visible:text-bodylife-red"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bodylife-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="mailto:selecao@institutobodylife.com.br"
            className="flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-bodylife-red transition-colors py-2 group"
          >
            <Mail size={16} className="text-gray-400 group-hover:text-bodylife-red transition-colors" />
            Trabalhe Conosco
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bodylife-red transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Container da Direita: Apps e Hambúrguer */}
        <div className="flex items-center gap-5 z-50">
          
          {/* Ícones Substituindo o Botão (Desktop) */}
          <div className="hidden md:flex items-center gap-5 pr-2">
            <a 
              href="https://wa.me/5561998796606" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bodylife-red transition-colors group"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://instagram.com/institutobodylife" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bodylife-red transition-colors group"
              aria-label="Acessar Instagram"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://waze.com/ul?q=Instituto+Bodylife+Guara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bodylife-red transition-colors group"
              aria-label="Como chegar pelo Waze"
            >
              <Navigation size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <button
            className="lg:hidden text-bodylife-dark p-2 hover:bg-bodylife-red/10 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bodylife-red"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
          >
            {isOpen ? <X size={30} className="text-bodylife-red" /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-[100dvh] bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col items-center justify-start pt-28 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center gap-2 p-6 w-full max-w-sm mx-auto overflow-y-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0
              }}
              className="text-2xl font-black text-bodylife-dark hover:text-bodylife-red transition-all duration-300 w-full text-center py-4 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}

          <a
            href="mailto:selecao@institutobodylife.com.br"
            onClick={closeMenu}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
            className="flex items-center justify-center gap-3 text-xl font-black text-bodylife-dark hover:text-bodylife-red transition-all duration-300 w-full text-center py-5 border-b border-gray-100"
          >
            <Mail size={22} className="text-bodylife-red" />
            Trabalhe Conosco
          </a>

          {/* Redes Sociais Mobile (Agora com Waze também) */}
          <div 
            style={{
              transitionDelay: isOpen ? `${(navLinks.length + 1) * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
            className="flex gap-8 mt-4 mb-2"
          >
            <a href="https://instagram.com/institutobodylife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodylife-red">
              <Instagram size={28} />
            </a>
            <a href="https://waze.com/ul?q=Instituto+Bodylife+Guara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodylife-red">
              <Navigation size={28} />
            </a>
          </div>

          <a
            href="https://wa.me/5561998796606?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            style={{
              transitionDelay: isOpen ? `${(navLinks.length + 2) * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
            className="flex items-center justify-center gap-3 bg-bodylife-red text-white w-full py-5 rounded-2xl font-black text-xl mt-4 shadow-[0_10px_30px_rgba(211,47,47,0.3)] active:scale-95 transition-all duration-300"
          >
            <MessageCircle size={26} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}