# Padrões de Animação (AOS)

- Inicialização única via `AosService.initOnce({ duration: 700, easing: 'ease-out', once: true })`
- Listas dinâmicas: chamar `refreshHard()` após renderização
- Cascata: usar classe `.aos-stagger` e CSS `transition-delay: calc(var(--i,0) * 80ms)`
- Redução de movimento: respeitar `prefers-reduced-motion: reduce`
