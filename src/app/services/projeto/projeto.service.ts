import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjeto } from '../../interfaces/projeto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private url = 'assets/data/projetos.json';

  constructor(private http: HttpClient) {}

  getProjetos(): Observable<IProjeto[]> {
    return this.http.get<IProjeto[]>(this.url);
  }
}
