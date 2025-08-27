# Portfólio — Estrutura de Dados

Exemplo (`assets/data/projetos.json`):

```json
[
  {
    "titulo": "Neshama Tech Site",
    "descricao": "Angular + AOS + acessibilidade.",
    "tecnologias": "Angular, SCSS",
    "demo": "https://...",
    "linkGithub": "https://github.com/...",
    "imagem": "assets/img/portfolio/neshama-site.jpg",
    "ordem": 1
  }
]
```

- tecnologias: string com vírgulas → vira chips (tags)

- demo/linkGithub: viram botões no card

- imagem: opcional; quando presente, exibimos capa com overlay

- ordem: menor = aparece antes