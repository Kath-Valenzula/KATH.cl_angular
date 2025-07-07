import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formulario: FormGroup;
  enviado = false;
  exito = '';
  fb = inject(FormBuilder);
  registroService = inject(RegistroService);
  router = inject(Router);

  constructor() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).+$')
      ]],
      password2: ['', Validators.required],
      fecha: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    }, { validators: this.passwordsIguales });
  }

  passwordsIguales(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('password2')?.value;
    return pass === confirm ? null : { noCoinciden: true };
  }

  onSubmit() {
    this.enviado = true;
    if (this.formulario.invalid) {
      return;
    }
    const { password2, ...usuario } = this.formulario.value;
    void password2;
    this.registroService.add(usuario);
    this.exito = '¡Registro exitoso!';
    this.formulario.reset();
    this.enviado = false;
    this.router.navigate(['/']);
  }
}


