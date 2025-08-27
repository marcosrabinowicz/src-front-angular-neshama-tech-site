import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollSpyService } from '../../services/scroll-spy/scroll-spy.service';
import type { NavItem, SectionId } from '../../models/nav-item.model';
import { NAV_ITEMS_DEFAULT } from '../../constants/nav.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  protected readonly nav: NavItem[] = [...NAV_ITEMS_DEFAULT];
  protected activeId: SectionId = 'home';
  protected menuOpen  = false;
  protected scrolled = false;
  private sub?: Subscription;

  constructor(private spy: ScrollSpyService) {}

  ngOnInit(): void {
    setTimeout(() => this.spy.init(this.nav.map(n => n.id)));
    this.sub = this.spy.active$.subscribe(id => (this.activeId = id as SectionId));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 8;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  onLinkClick(e: Event, href: string): void {
    e.preventDefault();
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEsc() { this.closeMenu(); }
}

