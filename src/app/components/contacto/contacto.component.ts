import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../../services/json.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  usuarios: Usuario[] = [];
  formulario: FormGroup;
  enviado = false;
  fb = inject(FormBuilder);
  jsonService = inject(JsonService);

  constructor() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  ngOnInit(): void {
    this.jsonService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  enviar() {
    this.enviado = true;
    if (this.formulario.invalid) {
      return;
    }
    // Aquí se podrían procesar los datos del formulario
    this.formulario.reset();
    this.enviado = false;
  }
}

