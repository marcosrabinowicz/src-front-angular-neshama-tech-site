import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../../models/autor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private readonly url = 'assets/data/autor.json';

  constructor(private http: HttpClient) {}

  get(): Observable<Autor> {
    return this.http.get<Autor>(this.url);
  }
}
