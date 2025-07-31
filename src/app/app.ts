import { Component, signal } from '@angular/core';
import { Home } from './sections/home/home';
import { Sobre } from './sections/sobre/sobre';
import { Servicos } from './sections/servicos/servicos';
import { Portfolio } from './sections/portfolio/portfolio';
import { Contato } from './sections/contato/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Home, Sobre, Servicos, Portfolio, Contato],
})
export class App {
  protected readonly title = signal('neshama-tech-site');
  protected menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}
