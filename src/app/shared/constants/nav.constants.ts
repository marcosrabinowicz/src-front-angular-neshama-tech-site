import type { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS_DEFAULT = [
  { id: 'home',      label: 'Início',    href: '#home' },
  { id: 'servicos',  label: 'Serviços',  href: '#servicos' },
  { id: 'portfolio', label: 'Portfólio', href: '#portfolio' },
  { id: 'contato',   label: 'Contato',   href: '#contato' }
] as const satisfies ReadonlyArray<NavItem>;
