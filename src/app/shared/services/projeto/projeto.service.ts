import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../../models/projeto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private readonly url = 'assets/data/projetos.json';

  constructor(private http: HttpClient) {}

  getProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.url);
  }
}
