import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServico } from '../../interfaces/servico.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private readonly url = 'assets/data/servicos.json';

  constructor(private http: HttpClient) {}

  getServicos(): Observable<IServico[]> {
    return this.http.get<IServico[]>(this.url);
  }
}
