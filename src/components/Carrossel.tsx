import { ImageIcon } from 'lucide-react';

// Importação das Imagens Reais da Estrutura
import recepcaoImg from '../assets/EstruturaRecepção.png';
import fisioImg from '../assets/EstruturaFisio2.png';
import pilatesImg from '../assets/EstruturaPilates.png';
import esteticaImg from '../assets/Estética IBL.png';
import acupunturaImg from '../assets/EstruturaSaladeAcupuntura.png';

export default function Carrossel() {
  // Estrutura premium: Cada imagem real com seu respectivo SEO e legenda.
  const espacos = [
    {
      url: recepcaoImg,
      alt: "Recepção moderna e acolhedora do Instituto Bodylife no Guará",
      legenda: "Recepção Acolhedora"
    },
    {
      url: fisioImg,
      alt: "Área de fisioterapia e reabilitação com equipamentos modernos",
      legenda: "Área de Fisioterapia"
    },
    {
      url: pilatesImg,
      alt: "Estúdio de Pilates Clínico completo para reabilitação e postura",
      legenda: "Estúdio de Pilates"
    },
    {
      url: esteticaImg,
      alt: "Sala de estética avançada para procedimentos faciais e corporais",
      legenda: "Estética Avançada"
    },
    {
      url: acupunturaImg,
      alt: "Sala reservada para sessões de acupuntura e relaxamento",
      legenda: "Sala de Acupuntura"
    }
  ];

  // Duplicamos a lista para o efeito de loop infinito perfeito
  const imagensDuplicadas = [...espacos, ...espacos];

  return (
    <section aria-labelledby="titulo-espaco" className="w-full py-24 bg-white overflow-hidden flex flex-col items-center border-t border-gray-100">
      
      <div className="text-center mb-12 px-4 reveal">
        <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-2 block flex items-center justify-center gap-2">
          <ImageIcon size={16} />
          Tour Virtual
        </span>
        <h2 id="titulo-espaco" className="text-3xl md:text-5xl font-black text-bodylife-dark uppercase tracking-tighter">
          Conheça o nosso espaço
        </h2>
        <div className="h-1 w-24 bg-bodylife-red mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-500 mt-6 font-medium max-w-xl mx-auto text-lg">
          Um ambiente projetado ao detalhe para o seu conforto, privacidade e bem-estar durante todo o tratamento.
        </p>
      </div>

      <div className="w-full relative py-4 reveal delay-100">
        
        {/* Sombras laterais para o efeito de fade-out nas bordas */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Trilha animada do carrossel */}
        <div className="animate-scroll flex gap-6 px-6">
          {imagensDuplicadas.map((espaco, index) => (
            <figure 
              key={index} 
              className="group relative w-[280px] h-[220px] md:w-[450px] md:h-[320px] flex-shrink-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <img 
                src={espaco.url} 
                alt={espaco.alt} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay para leitura da legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/90 via-bodylife-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <figcaption className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-1 bg-bodylife-red mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <span className="text-white font-black text-xl md:text-2xl drop-shadow-lg tracking-tight">
                  {espaco.legenda}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}