import { useState } from 'react';
import { MessageCircle, CheckCircle2, ChevronRight, ChevronDown, Activity } from 'lucide-react';

// Importação das Imagens Reais (Pente Fino)
import fisioImg from '../assets/FisioterapiaIBL.png';
import esteticaImg from '../assets/EstéticaIBL.png';
import pilatesImg from '../assets/PilatesIBL.png';
import acupunturaImg from '../assets/AcupunturaIBL.png';
import injetaveisImg from '../assets/InjetáveisIBL.png';
import nutricaoImg from '../assets/Nutrição IBL.png';
import clinicaImg from '../assets/MedicinaIBL.png'; 
import psicologiaImg from '../assets/PsicologiaIBL.png';
import enfermagemImg from '../assets/EnfermagemIBL.png';

export default function Especialidades() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  // Array limpo, focando apenas no que vai aparecer na tela (Performance)
  const especialidades = [
    { 
      titulo: "Fisioterapia", 
      itens: [
        "Pélvica (Uroginecológica)", 
        "Traumato-ortopédica",
        "Cardiorespiratória", 
        "Vestibular"
      ],
      imagem: fisioImg,
      alt: "Sessão de fisioterapia especializada no Instituto Bodylife"
    },
    { 
      titulo: "Estética", 
      itens: [
        "Botox",
        "Preenchimento", 
        "Fios de PDO",
        "Bioestimuladores (Sculptra, Radiesse, Diamond, Elleva)", 
        "Ultraforme MPT", 
        "Lavieen ou Pisom", 
        "Skimbooster", 
        "Limpeza de pele"
      ],
      imagem: esteticaImg,
      alt: "Tratamento de estética avançada facial"
    },
    { 
      titulo: "Pilates", 
      itens: ["Pilates Clínico", "Reabilitação", "Condicionamento Físico", "Correção Postural"],
      imagem: pilatesImg,
      alt: "Aula de Pilates focada em reabilitação"
    },
    { 
      titulo: "Acupuntura", 
      itens: ["Tratamento de Dores", "Ansiedade e Estresse", "Equilíbrio Sistêmico", "Ventosaterapia"],
      imagem: acupunturaImg,
      alt: "Sessão de acupuntura para alívio de tensões"
    },
    { 
      titulo: "Injetáveis", 
      itens: ["Soroterapia", "Reposição Vitamínica", "Foco e Imunidade", "Acompanhamento Metabólico"],
      imagem: injetaveisImg,
      alt: "Aplicação de soroterapia e terapias injetáveis"
    },
    { 
      titulo: "Nutrição", 
      itens: ["Nutrição Esportiva", "Funcional", "Nutrição Clínica", "Terceira idade"],
      imagem: nutricaoImg,
      alt: "Acompanhamento com nutricionista especializada"
    },
    { 
      titulo: "Clínica Médica", 
      itens: ["Consultas de Rotina", "Check-up", "Acompanhamento Preventivo"],
      imagem: clinicaImg,
      alt: "Consulta médica preventiva no Instituto Bodylife"
    },
    { 
      titulo: "Enfermagem", 
      itens: ["Triagem e Acolhimento", "Curativos Especiais", "Administração de Terapias", "Suporte Clínico"],
      imagem: enfermagemImg,
      alt: "Atendimento e suporte de enfermagem acolhedor"
    },
    { 
      titulo: "Psicologia", 
      itens: ["Terapia Individual", "Gestão de Estresse", "Desenvolvimento Pessoal"],
      imagem: psicologiaImg,
      alt: "Atendimento psicológico acolhedor"
    },
  ];

  const activeEspecialidade = activeTab !== null ? especialidades[activeTab] : especialidades[0];

  return (
    <section id="especialidades" aria-labelledby="titulo-especialidades" className="w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16 reveal">
          <span className="text-bodylife-red font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center gap-2">
            <Activity size={18} />
            Abordagem Completa
          </span>
          <h2 id="titulo-especialidades" className="text-4xl md:text-5xl lg:text-6xl font-bold text-bodylife-dark uppercase tracking-tighter leading-tight">
            Nossas Especialidades
          </h2>
          <div className="h-1.5 w-24 bg-bodylife-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ========================================= */}
        {/* VERSÃO MOBILE                             */}
        {/* ========================================= */}
        <div className="lg:hidden flex flex-col gap-4 reveal delay-100" role="tablist">
          {especialidades.map((esp, index) => {
            const isActive = activeTab === index;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
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

                <div 
                  id={`panel-${index}`}
                  role="tabpanel"
                  className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 md:p-6 bg-white border-t border-gray-50">
                      
                      <div className="w-full h-64 md:h-80 bg-bodylife-base rounded-xl mb-6 overflow-hidden">
                        <img 
                          src={esp.imagem} 
                          alt={esp.alt} 
                          loading="lazy" 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Especialidades
                      </h4>

                      <div className="space-y-3 mb-8">
                        {esp.itens.map((item, i) => (
                          <div key={i} className="flex items-start text-sm md:text-base font-bold text-bodylife-dark bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <CheckCircle2 className="w-5 h-5 text-bodylife-red mr-3 shrink-0 mt-0.5" />
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={`https://wa.me/5561998796606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação%20para%20${esp.titulo}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-full gap-2 bg-bodylife-red text-white py-4 md:py-5 rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-red-500/20 hover:bg-red-700"
                      >
                        <MessageCircle size={22} className="group-hover:animate-bounce" />
                        Agendar Avaliação
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================= */}
        {/* VERSÃO DESKTOP                            */}
        {/* ========================================= */}
        <div className="hidden lg:flex flex-row gap-12 reveal delay-100">
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
                  className={`group flex items-center justify-between text-left w-full px-6 py-4 xl:py-5 rounded-2xl transition-all duration-300 border focus:outline-none ${
                    isActive 
                      ? 'bg-bodylife-red text-white border-bodylife-red shadow-[0_8px_30px_rgb(211,47,47,0.3)] scale-[1.02] translate-x-2' 
                      : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50 hover:text-bodylife-dark hover:border-gray-300'
                  }`}
                >
                  <span className={`font-bold text-base xl:text-lg tracking-tight transition-colors ${isActive ? 'text-white' : 'text-bodylife-dark group-hover:text-bodylife-red'}`}>
                    {esp.titulo}
                  </span>
                  <ChevronRight size={20} className={`transition-all duration-300 ${isActive ? 'translate-x-1 text-white opacity-100' : 'text-gray-300 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-bodylife-red'}`} />
                </button>
              );
            })}
          </div>

          <div className="w-2/3">
            <div 
              id="vitrine-painel"
              role="tabpanel"
              key={activeTab}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full animate-fade-in group"
            >
              <div className="relative h-[450px] w-full shrink-0 overflow-hidden bg-bodylife-base border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-bodylife-dark/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                
                {/* Imagem Desktop SEM ZOOM e com Object Contain */}
                <img 
                  src={activeEspecialidade.imagem} 
                  alt={activeEspecialidade.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain" 
                />
                
                <div className="absolute bottom-6 left-8 z-20 flex flex-col items-start gap-2">
                  <h3 className="text-4xl font-bold text-bodylife-dark tracking-tight drop-shadow-sm bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/50">
                    {activeEspecialidade.titulo}
                  </h3>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Especialidades
                </h4>
                
                {/* Grid adaptado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {activeEspecialidade.itens.map((item, i) => (
                    <div key={i} className="flex items-center bg-bodylife-base p-4 rounded-xl border border-gray-100 hover:border-bodylife-red/30 transition-colors">
                      <div className="bg-white p-1 rounded-full mr-3 shadow-sm shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-bodylife-red" />
                      </div>
                      <span className="text-bodylife-dark font-bold text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/5561998796606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação%20para%20${activeEspecialidade.titulo}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-3 bg-bodylife-red text-white py-5 xl:py-6 rounded-2xl font-bold text-lg hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(211,47,47,0.3)] hover:shadow-[0_15px_50px_rgba(211,47,47,0.5)] group/btn"
                  >
                    <MessageCircle size={26} className="group-hover/btn:animate-bounce" />
                    AGENDAR AVALIAÇÃO
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