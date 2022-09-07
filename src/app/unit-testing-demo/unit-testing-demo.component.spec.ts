import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  // setting up 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestingDemoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has heading with Unit Testing Demo', ()=> {
    const unitTestingDemoHTML = fixture.nativeElement as HTMLElement;
    expect(unitTestingDemoHTML.querySelector('h1')?.textContent).toEqual('Unit Testing Demo')
  });
  
});
