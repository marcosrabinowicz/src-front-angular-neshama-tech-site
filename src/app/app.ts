import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Home } from './componentes/home/home';
import { Sobre } from './componentes/sobre/sobre';
import { Portfolio } from './componentes/portfolio/portfolio';
import { Servicos } from './componentes/servicos/servicos';
import { Contato } from './componentes/contato/contato';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Home, Sobre, Portfolio, Servicos, Contato, CommonModule],
})
export class App implements OnInit{
  protected readonly title = signal('neshama-tech-site');
  protected showScrollTop = false;
  protected menuAberto = false;

  ngOnInit(): void {
  AOS.init();
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
    AOS.refreshHard?.();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

}
