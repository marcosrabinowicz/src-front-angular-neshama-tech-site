import { Component, signal } from '@angular/core';
import { Home } from './componentes/home/home';
import { Sobre } from './componentes/sobre/sobre';
import { Portfolio } from './componentes/portfolio/portfolio';
import { Servicos } from './componentes/servicos/servicos';
import { Contato } from './componentes/contato/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Home, Sobre, Portfolio, Servicos, Contato],
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
