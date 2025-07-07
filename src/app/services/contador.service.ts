import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  increment(step = 1): void {
    this.count.next(this.count.value + step);
  }
}
