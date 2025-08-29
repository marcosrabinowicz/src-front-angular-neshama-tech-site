import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Portfolio } from './components/portfolio/portfolio';
import { Servicos } from './components/servicos/servicos';
import { Contato } from './components/contato/contato';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { AosService } from './shared/services/Aos/aos.services';

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
export class App {
  protected readonly title = signal('neshama-tech-site');
  protected showScrollTop = false;

  constructor(private aos: AosService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
    this.aos.refreshHard?.();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
