import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProjeto } from '../../interfaces/projeto.interface';
import { ProjetoService } from '../../services/projeto/projeto.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projetos: IProjeto[] = [];

  constructor(private projetoService: ProjetoService) {}

  ngOnInit(): void {
    this.projetoService.getProjetos().subscribe((data: IProjeto[]) => {
      this.projetos = data;
    });
  }
}
