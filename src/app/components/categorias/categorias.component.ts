import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias = [
    {
      id: 'estrategia',
      nombre: 'Estrategia',
      descripcion: 'Juegos que desafían tu mente: ajedrez, Catan y más.',
      img: 'assets/img/estrategia.jpg'
    },
    {
      id: 'familiar',
      nombre: 'Familiar',
      descripcion: 'Diversión para todas las edades con clásicos inolvidables.',
      img: 'assets/img/familiar.jpg'
    },
    {
      id: 'cartas',
      nombre: 'Cartas',
      descripcion: 'Partidas rápidas y emocionantes con barajas icónicas.',
      img: 'assets/img/cartas.jpg'
    },
    {
      id: 'fiesta',
      nombre: 'Fiesta',
      descripcion: 'Risas garantizadas en tus reuniones con juegos dinámicos.',
      img: 'assets/img/fiesta.jpg'
    }
  ];
}
