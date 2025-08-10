import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Home } from './componentes/home/home';
import { Sobre } from './componentes/sobre/sobre';
import { Portfolio } from './componentes/portfolio/portfolio';
import { Servicos } from './componentes/servicos/servicos';
import { Contato } from './componentes/contato/contato';

import AOS from 'aos';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    Home,
    Sobre,
    Portfolio,
    Servicos,
    Contato,
    CommonModule,
    Header,
    Footer,
  ],
})
export class App implements OnInit {
  protected readonly title = signal('neshama-tech-site');
  protected showScrollTop = false;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // anima só uma vez ao entrar
      mirror: false, // não reanima ao rolar pra cima
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
    AOS.refreshHard?.();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
