import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba3Component } from './prueba3.component';

describe('Prueba3Component', () => {
  let component: Prueba3Component;
  let fixture: ComponentFixture<Prueba3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueba3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // Prueba con .toEqual para un campo input de tipo texto
   it('should match the text input value to the expected text', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[name="texto"]');
    inputElement.value = 'Mi texto';
    inputElement.dispatchEvent(new Event('input'));

    expect(inputElement.value).toEqual('Mi texto');
  });

  // Prueba con .toBeLessThan para comparar dos inputs de tipo number
  it('should verify that the first number input is less than the second number input', () => {
    const numberInput1: HTMLInputElement = fixture.nativeElement.querySelector('input[name="numero1"]');
    const numberInput2: HTMLInputElement = fixture.nativeElement.querySelector('input[name="numero2"]');

    numberInput1.value = '5';
    numberInput2.value = '10';

    numberInput1.dispatchEvent(new Event('input'));
    numberInput2.dispatchEvent(new Event('input'));

    expect(Number(numberInput1.value)).toBeLessThan(Number(numberInput2.value));
  });

  // Prueba con .toMatch para un textarea
  it('should check if textArea contains the specified phrase "Universidad de las Fuerzas Armadas ESPE sede Santo Domingo de los Tsáchilas"', () => {
    const textAreaElement: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea[name="textarea"]');
    textAreaElement.value = 'Universidad de las Fuerzas Armadas ESPE sede Santo Domingo de los Tsáchilas';
    textAreaElement.dispatchEvent(new Event('input'));

    expect(textAreaElement.value).toMatch(/Universidad de las Fuerzas Armadas ESPE sede Santo Domingo de los Tsáchilas/);
  });

  // Prueba con .toBeTruthy para la función dado
  it('should return true for even numbers and false for odd numbers', () => {
    const spy = spyOn(Math, 'random');

    spy.and.returnValue(0.1);  // Esto hará que num sea 1 (impar)
    expect(component.dado()).toBeFalsy();

    spy.and.returnValue(0.5);  // Esto hará que num sea 4 (par)
    expect(component.dado()).toBeTruthy();
  });

  // Prueba con .toContain para un h1
  it('should contain the phrase "Evaluación parcial 3" in the h1 tag', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toContain('Evaluación parcial 3');
  });
});
