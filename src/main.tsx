import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * IMPORTAÇÃO DE ESTILOS
 * A ordem importa: primeiro o global (Tailwind + Reveal), depois as correções do App.
 */
import './index.css';
import './App.css';

// 1. Captura o elemento root com segurança
const rootElement = document.getElementById('root');

// 2. Verificação de Falha (Pente Fino contra erros de Infraestrutura)
if (!rootElement) {
  throw new Error(
    "Erro Crítico: O elemento de montagem 'root' não foi encontrado no DOM. " +
    "Verifique se o seu arquivo index.html possui uma <div id='root'></div>."
  );
}

// 3. Inicialização Master Level
const root = createRoot(rootElement);

/**
 * <React.StrictMode>
 * Mantemos ativado pois ele ajuda a identificar problemas de renderização
 * e garante que as animações de Scroll Reveal funcionem perfeitamente.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * NOTA PARA O LANÇAMENTO (Papo de Master Dev):
 * Lembre-se de configurar o seu index.html com as Meta Tags de SEO:
 * - <title>Instituto Bodylife | Saúde Integrada no Guará/DF</title>
 * - <meta name="description" content="Fisioterapia, Estética, Nutrição e Medicina em um só lugar.">
 * - Configurar o Open Graph (og:image) para o link aparecer bonito no WhatsApp.
 */