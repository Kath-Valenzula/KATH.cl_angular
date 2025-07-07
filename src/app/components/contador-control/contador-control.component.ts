import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador-control',
  templateUrl: './contador-control.component.html',
  styleUrls: ['./contador-control.component.css']
})
export class ContadorControlComponent {
  @Input() count = 0;
  @Output() incrementar = new EventEmitter<number>();

  inc(value: number): void {
    this.incrementar.emit(value);
  }
}
