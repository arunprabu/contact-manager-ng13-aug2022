import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add two numbers properly', () => {
    // sometime multiple expectations are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 2)).toEqual(7);
  });

  // testing inline style
  it('should have red bg color in h2 element', ()=>{
    const calcCompHTML = fixture.nativeElement as HTMLElement;
    const bgColor = calcCompHTML.querySelector('h2')?.style.backgroundColor;
    // expect(bgColor).toBe('red'); // Not recommended if you have colors in hexadecimal/rgb format
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  // TODO: Learn about testing element with css class 'redText' 
  
  it('has counter with initial value 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should increment and decrement', () => {
    component.counter = 0;
    component.handleIncrement();
    component.handleIncrement();

    expect(component.counter).toBe(2);

    component.handleDecrement();
    component.handleDecrement();
    expect(component.counter).toBe(0);
  });

  it('should increment counter via html button', () => {
    // find a button element with .incrementBtn class 
    const incrementBtn = debugElement.query(By.css('.incrementBtn'));
    
    // will click the button-- triggering the event thru pgm
    incrementBtn.triggerEventHandler('click', null);
    
    fixture.detectChanges(); // Do not forget 

    // Approach #1
    // const calcCompHTML = fixture.nativeElement as HTMLElement;
    // expect(calcCompHTML.querySelector('span')?.textContent).toBe('1');

    // Approach #2
    const value =  debugElement.query(By.css('span.counter')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  // TODO: should decrement counter via html button

  it('should stop at 10 and should show Max Reached upon increment', () => {
    component.counter = 10;

    const incrementBtn = debugElement.query(By.css('.incrementBtn'));
    
    // will click the button-- triggering the event thru pgm
    incrementBtn.triggerEventHandler('click', null);

    expect(component.counter).toEqual(10);

    fixture.detectChanges(); 
    const infoText =  debugElement.query(By.css('.info')).nativeElement.innerText;
    expect(infoText).toBe('Max Reached');
  });

  // TODO: should stop at 0 and should show Min Reached upon decrement

});
