import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}
