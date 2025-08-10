import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../shared/models/projeto.model';
import { ProjetoService } from '../../shared/services/projeto/projeto.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService) {}

  ngOnInit(): void {
    this.projetoService.getProjetos().subscribe((data: Projeto[]) => {
      this.projetos = data;
    });
  }
}
