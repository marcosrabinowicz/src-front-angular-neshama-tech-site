export interface AutorLink {
  label: string;
  href: string;
  icon?: string;
}

export interface AutorDestaque {
  icon?: string;
  label: string;
  value?: string;
}

export interface Autor {
  nome: string;
  titulo?: string;
  local?: string;
  tagline?: string;
  foto?: string;
  bio_curta: string;
  bio_longa?: string[];
  destaques?: AutorDestaque[];
  links?: AutorLink[];
}
