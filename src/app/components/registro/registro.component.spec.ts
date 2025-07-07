import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistroComponent } from './registro.component';
import { RegistroService } from '../../services/registro.service';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [RegistroComponent],
      providers: [{ provide: RegistroService, useValue: { add: jasmine.createSpy('add') } }]
    });

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.formulario.valid).toBeFalse();
  });

  it('should be valid with correct data', () => {
    component.formulario.setValue({
      nombre: 'Juan',
      usuario: 'juan01',
      email: 'mail@test.com',
      password: 'Pass123',
      password2: 'Pass123',
      fecha: '2024-01-01',
      consent: true
    });
    expect(component.formulario.valid).toBeTrue();
  });

  it('should detect mismatched passwords', () => {
    component.formulario.setValue({
      nombre: 'Juan',
      usuario: 'juan01',
      email: 'mail@test.com',
      password: 'Pass123',
      password2: 'Pass321',
      fecha: '2024-01-01',
      consent: true
    });
    expect(component.formulario.valid).toBeFalse();
    expect(component.formulario.errors).toEqual({ noCoinciden: true });
  });
});
