import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonService } from '../../services/json.service';
import { RegistroService } from '../../services/registro.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  enviado = false;
  error = '';
  fb = inject(FormBuilder);
  jsonService = inject(JsonService);
  registroService = inject(RegistroService);
  router = inject(Router);

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.enviado = true;
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.value;
    this.jsonService.getUsuarios().subscribe(data => {
      const usuarios: Usuario[] = [...data, ...this.registroService.getRegistrados()];
      const existe = usuarios.find(u => u.email === email && u.password === password);
      if (existe) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Credenciales inválidas';
      }
    });
  }
}
