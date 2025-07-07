import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private jsonUrl = 'assets/personas.json';
  private http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.jsonUrl);
  }
}
