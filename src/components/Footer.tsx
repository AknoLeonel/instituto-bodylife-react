import { MapPin, Phone, Clock, Mail, Navigation, Instagram, Facebook, Heart } from 'lucide-react';
import logoImg from '../assets/logosemfun.png';

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-gray-50 text-bodylife-dark pt-24 pb-8 border-t-[6px] border-bodylife-red relative overflow-hidden">
      
      {/* Detalhe visual de fundo adaptado para o tema claro */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-bodylife-red rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Grid Principal com Reveal em Cascata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="space-y-6 reveal">
            {/* Logo que funciona como botão Voltar ao Topo */}
            <a href="#inicio" aria-label="Voltar ao início do site" className="flex flex-col w-max group">
              <img src={logoImg} alt="Logo do Instituto BodyLife" className="w-16 h-16 object-contain mb-2" />
              <span className="text-bodylife-red font-bold text-xl leading-none group-hover:text-red-400 transition-colors">INSTITUTO</span>
              <span className="text-bodylife-dark font-black text-3xl tracking-tighter leading-none group-hover:text-gray-700 transition-colors">BODYLIFE</span>
            </a>
            <p className="text-gray-600 font-bold leading-relaxed text-sm pr-4">
              Centro de Saúde Integrada focado em promover movimento, recuperação e qualidade de vida através de tratamentos modernos.
            </p>
            {/* Redes Sociais com Acessibilidade (aria-label) */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com/institutobodylife" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acesse nosso Instagram"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Acesse nossa página no Facebook"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Contatos Rápidos */}
          <div className="space-y-6 reveal delay-100">
            <h4 className="text-lg font-bold text-bodylife-dark uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-1 bg-bodylife-red rounded-full"></span>
              Fale Conosco
            </h4>
            
            <address className="space-y-5 not-italic">
              <a 
                href="https://wa.me/5561998796606" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Chamar na Recepção pelo WhatsApp"
                className="flex items-start gap-3 group"
              >
                <div className="bg-white border border-gray-100 p-2.5 rounded-xl text-bodylife-red group-hover:bg-bodylife-red group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp / Recepção</p>
                  <p className="text-bodylife-dark font-bold group-hover:text-bodylife-red transition-colors mt-0.5 text-lg">(61) 99879-6606</p>
                </div>
              </a>

              <div className="flex items-start gap-3 group">
                <div className="bg-white border border-gray-100 p-2.5 rounded-xl text-gray-400 group-hover:text-bodylife-red transition-colors shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Telefone Fixo</p>
                  <p className="text-bodylife-dark font-bold mt-0.5 text-lg">(61) 3055-2192</p>
                </div>
              </div>
            </address>
          </div>

          {/* Coluna 3: Localização e Horário */}
          <div className="space-y-6 reveal delay-200">
            <h4 className="text-lg font-bold text-bodylife-dark uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-1 bg-bodylife-red rounded-full"></span>
              Visite-nos
            </h4>
            
            <address className="space-y-5 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bodylife-red shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-bodylife-dark text-lg">Unidade Guará</p>
                  <p className="text-sm text-gray-600 font-bold mt-1.5 leading-relaxed">
                    QI 08 cj I LT 74 <br/> 
                    Guará - Brasília/DF <br/>
                    CEP: 71020-098
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-bodylife-red shrink-0" />
                <p className="text-sm font-bold">Seg a Sex: <span className="text-bodylife-dark font-bold ml-1">7h às 19h</span></p>
              </div>

              <a 
                href="https://waze.com/ul?q=Instituto+Bodylife+Guara" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Abrir rota no Waze"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-bodylife-red hover:border-bodylife-red hover:text-white transition-all duration-300 group shadow-sm"
              >
                <Navigation className="w-4 h-4 text-bodylife-red group-hover:text-white group-hover:animate-bounce" />
                Como chegar (Waze)
              </a>
            </address>
          </div>

          {/* Coluna 4: Responsabilidade Técnica & Carreiras */}
          <div className="space-y-6 reveal delay-300">
            <h4 className="text-lg font-bold text-bodylife-dark uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-1 bg-bodylife-red rounded-full"></span>
              Institucional
            </h4>
            
            {/* Box Elegante de Responsabilidade Técnica para Tema Claro */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 space-y-4 hover:shadow-md transition-all">
              <div>
                <p className="text-[11px] text-bodylife-red font-black uppercase tracking-widest mb-1">Responsável Técnica</p>
                <p className="text-sm text-bodylife-dark font-bold">Dra. Nádyla Braz <span className="text-gray-500 font-medium ml-1 text-xs">CRM 30042</span></p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              <div>
                <p className="text-[11px] text-bodylife-red font-black uppercase tracking-widest mb-1">Enfermeira RT</p>
                <p className="text-sm text-bodylife-dark font-bold">Luana Cristina <span className="text-gray-500 font-medium ml-1 text-xs">COREN 759.394</span></p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Faça parte da equipe</p>
              <a 
                href="mailto:selecao@institutobodylife.com.br" 
                aria-label="Enviar e-mail para o Trabalhe Conosco"
                className="group flex items-center gap-2.5 text-sm font-bold text-gray-600 hover:text-bodylife-red transition-colors"
              >
                <div className="bg-white border border-gray-100 shadow-sm p-2 rounded-lg group-hover:bg-bodylife-red transition-colors">
                  <Mail className="w-4 h-4 text-bodylife-red group-hover:text-white" />
                </div>
                <span className="border-b border-transparent group-hover:border-bodylife-red transition-colors pb-0.5">
                  selecao@institutobodylife.com.br
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Base (Copyright) */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-gray-500 reveal delay-300">
          <p>© {new Date().getFullYear()} Instituto Bodylife. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart size={14} className="text-bodylife-red animate-pulse" fill="currentColor" /> e excelência.
          </p>
        </div>
        
      </div>
    </footer>
  );
}