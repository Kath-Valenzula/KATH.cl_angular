import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registrados: Usuario[] = [];

  add(usuario: Usuario): void {
    this.registrados.push(usuario);
  }

  getRegistrados(): Usuario[] {
    return this.registrados;
  }
}
