import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactoComponent } from './contacto.component';
import { JsonService } from '../../services/json.service';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ContactoComponent],
      providers: [JsonService]
    });

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.formulario.valid).toBeFalse();
  });

  it('form should be valid with required fields', () => {
    component.formulario.setValue({
      nombre: 'Ana',
      email: 'ana@test.com',
      mensaje: 'Hola'
    });
    expect(component.formulario.valid).toBeTrue();
  });
});
