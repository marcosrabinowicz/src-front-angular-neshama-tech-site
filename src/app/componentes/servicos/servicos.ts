import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IServico } from '../../interfaces/servico.interface';
import { ServicoService } from '../../services/servicos/servico.service';

@Component({
  selector: 'app-servicos',
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss',
})
export class Servicos implements OnInit {
  servicos: IServico[] = [];

  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.servicoService.getServicos().subscribe((data: IServico[]) => {
      this.servicos = data;
    });
  }
}
