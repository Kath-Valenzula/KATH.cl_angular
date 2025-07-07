import { Component, inject } from '@angular/core';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  step = 1;
  contadorService = inject(ContadorService);
  count$ = this.contadorService.count$;

  actualizar(valor: number): void {
    this.contadorService.increment(valor);
  }
}
