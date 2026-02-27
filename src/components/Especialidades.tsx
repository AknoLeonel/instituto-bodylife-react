import { useState } from 'react';
import { MessageCircle, CheckCircle2, ChevronRight, ChevronDown, Activity } from 'lucide-react';

export default function Especialidades() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  // Textos impecáveis e tags ALT otimizadas para o Google (SEO)
  const especialidades = [
    { 
      titulo: "Fisioterapia", 
      descricao: "Retome o controle do seu corpo. Abordagem especializada para restaurar a mobilidade, aliviar a dor crônica e prevenir lesões com tecnologia de ponta.",
      itens: ["Pélvica (Uroginecológica)", "Cardiorrespiratória", "Vestibular", "Traumato-ortopédica"],
      imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
      alt: "Sessão de fisioterapia especializada no Instituto Bodylife"
    },
    { 
      titulo: "Estética", 
      descricao: "Sua beleza, sua identidade. Procedimentos minimamente invasivos de última geração para realçar suas características naturais e rejuvenescer com segurança e sutileza.",
      itens: ["Botox e Preenchimento", "Bioestimuladores", "Fios de PDO", "Ultraforme MPT", "Lavieen ou Pisom", "Limpeza de pele"],
      imagem: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
      alt: "Tratamento de estética avançada facial"
    },
    { 
      titulo: "Pilates Clínico", 
      descricao: "Fortaleça seu núcleo e liberte sua postura. O equilíbrio perfeito entre força, flexibilidade e consciência corporal sob supervisão de especialistas clínicos.",
      itens: ["Pilates Clínico", "Reabilitação", "Condicionamento Físico", "Correção Postural"],
      imagem: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
      alt: "Aula de Pilates Clínico focada em reabilitação"
    },
    { 
      titulo: "Acupuntura", 
      descricao: "Harmonia milenar para a vida moderna. Alívio de dores, redução de ansiedade e restauração do equilíbrio energético através de protocolos clínicos precisos.",
      itens: ["Tratamento de Dores", "Ansiedade e Estresse", "Equilíbrio Sistêmico", "Ventosaterapia"],
      imagem: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200",
      alt: "Sessão de acupuntura para alívio de tensões"
    },
    { 
      titulo: "Injetáveis", 
      descricao: "Otimize sua saúde de dentro para fora. Terapias endovenosas personalizadas para máxima absorção de nutrientes, energia, imunidade e performance esportiva.",
      itens: ["Soroterapia", "Reposição Vitamínica", "Foco e Imunidade", "Acompanhamento Metabólico"],
      imagem: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1200",
      alt: "Aplicação de soroterapia e terapias injetáveis"
    },
    { 
      titulo: "Nutrição", 
      descricao: "Abasteça seu corpo com inteligência. Planos nutricionais baseados em evidências científicas para emagrecimento, performance esportiva e longevidade.",
      itens: ["Nutrição Esportiva", "Funcional", "Nutrição Clínica", "Terceira idade"],
      imagem: "https://images.unsplash.com/photo-1490645935967-10de6baeddc6?auto=format&fit=crop&q=80&w=1200",
      alt: "Acompanhamento com nutricionista especializada"
    },
    { 
      titulo: "Clínica Médica", 
      descricao: "Sua saúde sob coordenação integral. Diagnósticos precisos, medicina preventiva e acompanhamento contínuo por médicos focados na sua qualidade de vida.",
      itens: ["Consultas de Rotina", "Check-up", "Acompanhamento Preventivo"],
      imagem: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1200",
      alt: "Consulta médica preventiva no Instituto Bodylife"
    },
    { 
      titulo: "Psicologia", 
      descricao: "Invista na sua maior força: sua mente. Um espaço acolhedor e confidencial para desenvolver inteligência emocional, superar desafios e viver com clareza.",
      itens: ["Terapia Individual", "Gestão de Estresse", "Desenvolvimento Pessoal"],
      imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
      alt: "Atendimento psicológico acolhedor"
    },
  ];

  const activeEspecialidade = activeTab !== null ? especialidades[activeTab] : especialidades[0];

  return (
    <section id="especialidades" aria-labelledby="titulo-especialidades" className="w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 reveal">
          <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center gap-2">
            <Activity size={18} />
            Abordagem Completa
          </span>
          <h2 id="titulo-especialidades" className="text-4xl md:text-5xl lg:text-6xl font-black text-bodylife-dark uppercase tracking-tighter leading-tight">
            Nossas Especialidades
          </h2>
          <div className="h-1.5 w-24 bg-bodylife-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ========================================= */}
        {/* VERSÃO MOBILE (Acordeão de Alta Performance)*/}
        {/* ========================================= */}
        <div className="lg:hidden flex flex-col gap-4 reveal delay-100" role="tablist">
          {especialidades.map((esp, index) => {
            const isActive = activeTab === index;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                
                {/* Botão do Acordeão (Acessibilidade Aplicada) */}
                <button 
                  role="tab"
                  aria-expanded={isActive}
                  aria-controls={`panel-${index}`}
                  onClick={() => setActiveTab(isActive ? null : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 transition-colors duration-300 focus:outline-none ${isActive ? 'bg-bodylife-red text-white' : 'bg-white text-bodylife-dark hover:bg-gray-50'}`}
                >
                  <span className="font-bold text-lg">{esp.titulo}</span>
                  <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-white/20' : 'bg-bodylife-red/10'}`}>
                    <ChevronDown className={`transition-transform duration-500 ease-in-out ${isActive ? 'rotate-180 text-white' : 'text-bodylife-red'}`} size={22} />
                  </div>
                </button>

                {/* Conteúdo Expandido (Animação de Grid Perfeita em CSS puro) */}
                <div 
                  id={`panel-${index}`}
                  role="tabpanel"
                  className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 md:p-6 bg-white border-t border-gray-50">
                      <img 
                        src={esp.imagem} 
                        alt={esp.alt} 
                        loading="lazy" 
                        className="w-full h-48 md:h-56 object-cover rounded-xl mb-6 shadow-md" 
                      />
                      <p className="text-gray-600 font-medium text-sm md:text-base mb-6 leading-relaxed">
                        {esp.descricao}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {esp.itens.map((item, i) => (
                          <div key={i} className="flex items-start text-sm md:text-base font-semibold text-bodylife-dark bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <CheckCircle2 className="w-5 h-5 text-bodylife-red mr-3 shrink-0 mt-0.5" />
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={`https://wa.me/5561998796606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20${esp.titulo}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-full gap-2 bg-bodylife-red text-white py-4 md:py-5 rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-red-500/20 hover:bg-red-700"
                      >
                        <MessageCircle size={22} className="group-hover:animate-bounce" />
                        Agendar {esp.titulo}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>


        {/* ========================================= */}
        {/* VERSÃO DESKTOP (Vitrine Interativa Premium) */}
        {/* ========================================= */}
        <div className="hidden lg:flex flex-row gap-12 reveal delay-100">
          
          {/* Menu Lateral de Abas */}
          <div className="w-1/3 flex flex-col gap-3" role="tablist" aria-orientation="vertical">
            {especialidades.map((esp, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="vitrine-painel"
                  onClick={() => setActiveTab(index)}
                  className={`group flex items-center justify-between text-left w-full px-6 py-5 rounded-2xl transition-all duration-300 border focus:outline-none ${
                    isActive 
                      ? 'bg-bodylife-red text-white border-bodylife-red shadow-[0_8px_30px_rgb(211,47,47,0.3)] scale-[1.02] translate-x-2' 
                      : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50 hover:text-bodylife-dark hover:border-gray-300'
                  }`}
                >
                  <span className={`font-black text-lg tracking-tight transition-colors ${isActive ? 'text-white' : 'text-bodylife-dark group-hover:text-bodylife-red'}`}>
                    {esp.titulo}
                  </span>
                  <ChevronRight size={22} className={`transition-all duration-300 ${isActive ? 'translate-x-1 text-white opacity-100' : 'text-gray-300 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-bodylife-red'}`} />
                </button>
              );
            })}
          </div>

          {/* Painel da Vitrine */}
          <div className="w-2/3">
            <div 
              id="vitrine-painel"
              role="tabpanel"
              key={activeTab} // O React recria a div, disparando a animação de fade
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full animate-fade-in group"
            >
              
              {/* Header da Vitrine (Imagem) */}
              <div className="relative h-80 w-full shrink-0 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark via-bodylife-dark/40 to-transparent z-10 opacity-90"></div>
                <img 
                  src={activeEspecialidade.imagem} 
                  alt={activeEspecialidade.alt} 
                  loading="lazy"
                  decoding="async"
                  // Efeito Ken Burns: a imagem cresce super devagar enquanto o usuário lê
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out" 
                />
                <div className="absolute bottom-8 left-10 z-20">
                  <span className="bg-bodylife-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block shadow-lg">
                    Especialidade
                  </span>
                  <h3 className="text-5xl font-black text-white tracking-tight drop-shadow-xl">
                    {activeEspecialidade.titulo}
                  </h3>
                </div>
              </div>

              {/* Corpo da Vitrine (Textos e CTA) */}
              <div className="p-10 flex flex-col flex-1">
                <p className="text-gray-600 text-xl leading-relaxed font-medium mb-10">
                  {activeEspecialidade.descricao}
                </p>
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Tratamentos & Procedimentos Inclusos:
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {activeEspecialidade.itens.map((item, i) => (
                    <div key={i} className="flex items-center bg-bodylife-base p-4 rounded-xl border border-gray-100 hover:border-bodylife-red/30 transition-colors">
                      <div className="bg-white p-1 rounded-full mr-3 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-bodylife-red" />
                      </div>
                      <span className="text-bodylife-dark font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Botão Fixo na Base */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/5561998796606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20ou%20saber%20mais%20sobre%20${activeEspecialidade.titulo}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-3 bg-bodylife-red text-white py-6 rounded-2xl font-black text-lg hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(211,47,47,0.3)] hover:shadow-[0_15px_50px_rgba(211,47,47,0.5)] group/btn"
                  >
                    <MessageCircle size={26} className="group-hover/btn:animate-bounce" />
                    AGENDAR CONSULTA DE {activeEspecialidade.titulo.toUpperCase()}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}