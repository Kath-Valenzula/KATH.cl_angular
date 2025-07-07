import { Component, OnInit, inject } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { Usuario } from '../../models/usuario.model';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: Usuario[] = [];
  jsonService = inject(JsonService);
  registroService = inject(RegistroService);

  ngOnInit(): void {
    this.jsonService.getUsuarios().subscribe(data => {
      this.usuarios = [...data, ...this.registroService.getRegistrados()];
    });
  }
}
