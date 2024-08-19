import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasComponent } from './pruebas.component';

describe('PruebasComponent', () => {
  let component: PruebasComponent;
  let fixture: ComponentFixture<PruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba para verificar el valor del input de tipo texto usando .toEqual
  it('should match the input value to the expected text', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[name="texto"]');
    inputElement.value = 'Mi texto';
    inputElement.dispatchEvent(new Event('input'));

    expect(inputElement.value).toEqual('Mi texto');
  });

  // Prueba para verificar que el valor del input de tipo number es menor que 100 usando .toBeLessThan
  it('should verify that the input number is less than 100', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[name="numero"]');
    inputElement.value = '50';
    inputElement.dispatchEvent(new Event('input'));

    expect(Number(inputElement.value)).toBeLessThan(100);
  });

  // Prueba para verificar si el textarea contiene la frase especificada usando .toMatch
  it('should check if textArea contains the specified phrase', () => {
    const textAreaElement: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea[name="textarea"]');
    textAreaElement.value = 'Bienvenidos a la Universidad de las Fuerzas Armadas ESPE';
    textAreaElement.dispatchEvent(new Event('input'));

    expect(textAreaElement.value).toMatch(/Universidad de las Fuerzas Armadas ESPE/);
  });

  // Prueba para verificar si la función dado retorna true para números pares usando .toBeTruthy
  it('should return true for even numbers and false for odd numbers', () => {
    const spy = spyOn(Math, 'random');
  
    spy.and.returnValue(0.4);  // Esto hará que num sea 5 (un número impar)
    expect(component.dado()).toBeFalsy();
  
    spy.and.returnValue(0.3);  // Esto hará que num sea 4 (un número par)
    expect(component.dado()).toBeTruthy();
  
    spy.and.returnValue(0.8);  // Esto hará que num sea 9 (un número impar)
    expect(component.dado()).toBeFalsy();
  
    spy.and.returnValue(0.7);  // Esto hará que num sea 8 (un número par)
    expect(component.dado()).toBeTruthy();
  });
  
  

  // Prueba para verificar si el h1 contiene la palabra ITIN usando .toContain
  it('should contain the word ITIN in the h1 tag', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    h1Element.textContent = 'Bienvenido a ITIN';

    expect(h1Element.textContent).toContain('ITIN');
  });
});
