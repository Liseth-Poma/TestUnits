import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba2Component } from './prueba2.component';

describe('Prueba2Component', () => {
  let component: Prueba2Component;
  let fixture: ComponentFixture<Prueba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba con .toEqual para un h1 dentro de un contenedor con clase "destacado"
  it('should have the word EUR-ACE in the h1 tag within a container with class "destacado"', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('.destacado span h1');
    expect(h1Element.textContent).toEqual('EUR-ACE');
  });

  // Prueba con .toBeGreaterThanOrEqual para un input de tipo number
  it('should verify that the input number is greater than or equal to 10', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[name="numero"]');
    inputElement.value = '15';
    inputElement.dispatchEvent(new Event('input'));

    expect(Number(inputElement.value)).toBeGreaterThanOrEqual(10);
  });

  // Prueba con .toMatch para un textarea
  it('should check if textArea contains the specified phrase "Resultado de aprendizaje"', () => {
    const textAreaElement: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea[name="textarea"]');
    textAreaElement.value = 'El Resultado de aprendizaje es positivo';
    textAreaElement.dispatchEvent(new Event('input'));

    expect(textAreaElement.value).toMatch(/Resultado de aprendizaje/);
  });

  // Prueba con .toBeTruthy para la función dado
  it('should return true for odd numbers and false for even numbers', () => {
    const spy = spyOn(Math, 'random');

    spy.and.returnValue(0.1);  // num = 1 (impar)
    expect(component.dado()).toBeTruthy();

    spy.and.returnValue(0.5);  // num = 4 (par)
    expect(component.dado()).toBeFalsy();
  });

  // Prueba con .toContain para un input de tipo texto
  it('should contain the text "Angular" in the input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input[name="texto"]');
    inputElement.value = 'Angular';
    inputElement.dispatchEvent(new Event('input'));

    expect(inputElement.value).toContain('Angular');
  });
});
