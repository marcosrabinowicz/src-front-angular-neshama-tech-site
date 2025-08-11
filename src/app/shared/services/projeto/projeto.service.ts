import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../../models/projeto.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private readonly url = 'assets/data/projetos.json';

  constructor(private http: HttpClient) {}

  getProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.url).pipe(
      map((projetos: Projeto[]) =>
        projetos
          .map((projeto) => ({
            titulo: projeto.titulo,
            tags: (projeto.tecnologias || '')
              .split(',')
              .map((tag) => tag.trim())
              .filter(Boolean),
            linkGithub: projeto.linkGithub,
            demo: projeto.demo,
            imagem: projeto.imagem,
            ordem: projeto.ordem,
          }))
          .sort((a, b) => (a.ordem ?? 999) - (b.ordem ?? 999)),
      ),
    );
  }
}
