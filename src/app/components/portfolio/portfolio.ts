import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Projeto } from '../../shared/models/projeto.model';
import { ProjetoService } from '../../shared/services/projeto/projeto.service';
import { AosService } from '../../shared/services/Aos/aos.services';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit, AfterViewInit {
  projetos: Projeto[] = [];
  visiveis: Projeto[] = [];
  tags: string[] = [];

  selecionada = 'Todos';
  carregando = true;
  erro = '';

  constructor(
    private projetoService: ProjetoService,
    private aos: AosService,
  ) {}

  ngAfterViewInit(): void {
    this.aos.initOnce({ duration: 700 });
  }

  ngOnInit(): void {
    this.projetoService.getProjetos().subscribe({
      next: (data: Projeto[]) => {
        this.projetos = data;
        this.tags = this.extrairTags(data);
        this.aplicarFiltro('Todos');
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os projetos.';
        this.carregando = false;
      },
    });
  }

  aplicarFiltro(tag: string): void {
    this.selecionada = tag;
    this.visiveis =
      tag === 'Todos'
        ? this.projetos
        : this.projetos.filter((p) => p.tags.includes(tag));
    setTimeout(() => this.aos.refreshHard());
  }

  private extrairTags(items: Projeto[]): string[] {
    const set = new Set<string>();
    items.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return set.size
      ? ['Todos', ...Array.from(set).sort((a, b) => a.localeCompare(b))]
      : [];
  }

  trackByIndex = (i: number) => i;
}
