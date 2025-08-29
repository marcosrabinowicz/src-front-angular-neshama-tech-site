import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AutorService } from '../../shared/services/autor/autor';
import { AosService } from '../../shared/services/Aos/aos.services';
import { Autor as AutorModel } from '../../shared/models/autor.model';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autor.html',
  styleUrl: './autor.scss',
})
export class Autor implements AfterViewInit {
  protected dados?: AutorModel;
  protected expandido = false;

  constructor(
    private api: AutorService,
    private aos: AosService,
  ) {}

  ngAfterViewInit(): void {
    this.aos.initOnce({ duration: 700 });
    this.api.get().subscribe((d) => {
      this.dados = d;
      setTimeout(() => this.aos.refresh());
    });
  }

  toggle(e: Event): void {
    e.preventDefault();
    this.expandido = !this.expandido;
    setTimeout(() => this.aos.refresh());
  }
}
