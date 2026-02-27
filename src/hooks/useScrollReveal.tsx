import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // 1. Configuração do Observer (A mágica da performance)
    const observerOptions = {
      root: null, // Usa a própria tela (viewport) como base
      rootMargin: '0px',
      threshold: 0.15, // Dispara quando 15% do elemento aparece na tela
    };

    // 2. O que acontece quando o elemento entra na tela
    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        // Se o elemento cruzou a tela (está visível)
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Dispara a animação CSS
          
          // OTIMIZAÇÃO MASTER: Para de observar depois que apareceu.
          // Isso evita que o celular do usuário fique calculando coisas 
          // quando ele rola o site para cima e para baixo repetidamente.
          observer.unobserve(entry.target); 
        }
      });
    };

    // 3. Cria o "Observador"
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 4. Manda o observador vigiar todos os elementos com a classe .reveal
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => observer.observe(element));

    // 5. Limpeza de memória (Cleanup) quando o componente for destruído
    return () => observer.disconnect();
  }, []); // Array vazio garante que esse código rode apenas uma vez quando o App carrega
}