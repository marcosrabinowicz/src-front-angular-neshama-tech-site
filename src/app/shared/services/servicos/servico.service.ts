import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private readonly url = 'assets/data/servicos.json';

  constructor(private http: HttpClient) {}

  getServicos(): Observable<Servico[]> {
    return this.http
      .get<Servico[]>(this.url)
      .pipe(
        map((servicos: Servico[]) =>
          [...servicos].sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0)),
        ),
      );
  }
}
