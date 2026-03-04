// Importação de todas as Imagens Reais da Estrutura
import fachadaImg from '../assets/EstruturaFachada2.png';
import entradaImg from '../assets/EstruturaEntrada.png';
import recepcaoImg from '../assets/EstruturaRecepção2.png';
import esperaImg from '../assets/EstruturaSaladeEspera.png';
import pilatesImg from '../assets/EstruturaPilates.png';
import fisioImg from '../assets/EstruturaFisioterapia.png';
import fisioImg2 from '../assets/EstruturaFisio2.png';
import acupunturaImg from '../assets/EstruturaSaladeAcupuntura.png';
import auriculoterapiaImg from '../assets/EstruturaFisio2.png';

export default function Carrossel() {
  const espacos = [
    {
      url: fachadaImg,
      alt: "Fachada moderna do Instituto Bodylife no Guará"
    },
    {
      url: entradaImg,
      alt: "Entrada do Instituto Bodylife"
    },
    {
      url: recepcaoImg,
      alt: "Recepção moderna e acolhedora do Instituto Bodylife"
    },
    {
      url: esperaImg,
      alt: "Sala de espera confortável e climatizada"
    },
    {
      url: pilatesImg,
      alt: "Estúdio de Pilates completo para reabilitação"
    },
    {
      url: fisioImg,
      alt: "Área de fisioterapia"
    },
    {
      url: fisioImg2,
      alt: "Equipamentos de reabilitação e fisioterapia"
    },
    {
      url: acupunturaImg,
      alt: "Sala reservada para Acupuntura"
    },
    {
      url: auriculoterapiaImg,
      alt: "Sala para Auriculoterapia"
    }
  ];

  return (
    <section aria-labelledby="titulo-espaco" className="w-full py-24 bg-white overflow-hidden flex flex-col items-center border-t border-gray-100">
      
      <div className="text-center mb-12 px-4 reveal">
        <h2 id="titulo-espaco" className="text-3xl md:text-5xl font-bold text-bodylife-dark uppercase tracking-tighter">
          Conheça o nosso espaço
        </h2>
        <div className="h-1 w-24 bg-bodylife-red mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-500 mt-6 font-bold max-w-xl mx-auto text-lg">
          Um ambiente projetado ao detalhe para o seu conforto, privacidade e bem-estar durante todo o tratamento.
        </p>
      </div>

      <div className="w-full relative py-4 reveal delay-100">
        
        {/* Bordas com fade branco para efeito infinito */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div 
          className="flex w-max animate-scroll hover:[animation-play-state:paused]" 
          style={{ animationDuration: '35s' }} // Mais tempo pois agora temos mais fotos
        >
          {/* BLOCO 1 (Original) */}
          <div className="flex gap-6 pr-6">
            {espacos.map((espaco, index) => (
              <figure 
                key={`orig-${index}`} 
                className="group relative w-[280px] h-[220px] md:w-[450px] md:h-[320px] flex-shrink-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <img 
                  src={espaco.url} 
                  alt={espaco.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </figure>
            ))}
          </div>

          {/* BLOCO 2 (Clone Exato para o Loop Invisível) */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {espacos.map((espaco, index) => (
              <figure 
                key={`clone-${index}`} 
                className="group relative w-[280px] h-[220px] md:w-[450px] md:h-[320px] flex-shrink-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <img 
                  src={espaco.url} 
                  alt={espaco.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}