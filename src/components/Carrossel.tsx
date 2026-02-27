import { ImageIcon } from 'lucide-react';

export default function Carrossel() {
  // Estrutura premium: Agora cada imagem tem um alt focado em SEO e uma legenda visível.
  const espacos = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      alt: "Recepção moderna e acolhedora do Instituto Bodylife no Guará",
      legenda: "Recepção Acolhedora"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      alt: "Consultório médico equipado com tecnologia de ponta",
      legenda: "Consultórios Modernos"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      alt: "Estúdio de Pilates Clínico com equipamentos novos",
      legenda: "Estúdio de Pilates"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      alt: "Sala de tratamentos estéticos e relaxamento",
      legenda: "Estética Avançada"
    },
    {
      url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
      alt: "Espaço dedicado para sessões de fisioterapia e reabilitação",
      legenda: "Área de Reabilitação"
    }
  ];

  // Duplicamos a lista para o efeito de loop infinito perfeito
  const imagensDuplicadas = [...espacos, ...espacos];

  return (
    // Adicionamos a tag semântica aria-labelledby para Leitores de Tela (Acessibilidade Nível Máximo)
    <section aria-labelledby="titulo-espaco" className="w-full py-24 bg-white overflow-hidden flex flex-col items-center border-t border-gray-100">
      
      {/* Adicionado a classe 'reveal' para surgir suavemente no scroll */}
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

      {/* Container do Carrossel */}
      <div className="w-full relative py-4 reveal delay-100">
        
        {/* Sombras laterais maiores e mais suaves para um "fade" perfeito */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Trilha que se movimenta. Removemos o hover falso e garantimos a pausa ao focar */}
        <div className="animate-scroll flex gap-6 px-6">
          {imagensDuplicadas.map((espaco, index) => (
            <figure 
              key={index} 
              // Uso do 'group' para controlar as animações internas da imagem
              className="group relative w-[280px] h-[220px] md:w-[450px] md:h-[320px] flex-shrink-0 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Otimização de SEO: loading="lazy" */}
              <img 
                src={espaco.url} 
                alt={espaco.alt} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay Premium (Degradê escuro que sobe de baixo) */}
              <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/90 via-bodylife-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Legenda Elegante */}
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