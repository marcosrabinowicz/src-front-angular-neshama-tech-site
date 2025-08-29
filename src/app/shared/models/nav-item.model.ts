export type SectionId =
  | 'home'
  | 'sobre'
  | 'autor'
  | 'portfolio'
  | 'servicos'
  | 'contato';

export interface NavItem {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
  ariaLabel?: string;
}
