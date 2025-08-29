export type SectionId = 'home' | 'sobre' | 'servicos' | 'portfolio' | 'contato';

export interface NavItem {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
  ariaLabel?: string;
}
