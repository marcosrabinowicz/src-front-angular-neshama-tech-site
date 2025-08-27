import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AosService } from '../../shared/services/Aos/aos.services';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato implements AfterViewInit {
  protected readonly destino = 'contato@neshamatech.com.br';
  protected nome = '';
  protected email = '';
  protected mensagem = '';

  constructor(private aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.initOnce({ duration: 700 });
    setTimeout(() => this.aos.refresh());
  }

  enviar(e: Event) {
    e.preventDefault();
    
    const assunto = `[Site] Novo contato - ${this.nome || 'Interessado(a)'}`;
    
    const corpo = [
      `Nome: ${this.nome}`,
      `Email: ${this.email}`,
      '',
      this.mensagem
    ].join('%0D%0A');

    const href = `mailto:${this.destino}?subject=${encodeURIComponent(assunto)}&body=${corpo}`;

    window.location.href = href;
  }
}
