import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Servico } from '../../shared/models/servico.model';
import { ServicoService } from '../../shared/services/servicos/servico.service';
import { AosService } from '../../shared/services/Aos/aos.services';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrls: ['./servicos.scss'],
})
export class Servicos implements OnInit, AfterViewInit {
  servicos: Servico[] = [];
  visiveis: Servico[] = [];

  categorias: string[] = [];
  selecionada = 'Todos';

  carregando = true;
  erro = '';

  constructor(
    private servicoService: ServicoService,
    private aos: AosService,
  ) {}

  ngAfterViewInit(): void {
    this.aos.initOnce();
  }

  ngOnInit(): void {
    this.servicoService.getServicos().subscribe({
      next: (data) => {
        this.servicos = data;
        this.categorias = this.extrairCategorias(data);
        this.aplicarFiltro('Todos');
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os serviços agora.';
        this.carregando = false;
      },
    });
    setTimeout(() => this.aos.refreshHard());
  }

  aplicarFiltro(cat: string): void {
    this.selecionada = cat;
    this.visiveis =
      cat === 'Todos'
        ? this.servicos
        : this.servicos.filter((s) => (s.categorias ?? []).includes(cat));
  }

  private extrairCategorias(items: Servico[]): string[] {
    const set = new Set<string>();
    items.forEach((s) => (s.categorias ?? []).forEach((c) => set.add(c)));
    return set.size ? ['Todos', ...Array.from(set).sort()] : [];
  }

  trackByIndex = (_: number, __: Servico) => _;
}
