// Test Pattern: Given/When/Then similar to AAA 
// Testing Approach: BDD 

// Given
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Group of related test specs -- TEST SUITE
describe('AppComponent', () => {
  // Given
  beforeEach(async () => { // Setting up

    // Similar to AppModule
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  // test spec #1
  it('should create the app', () => {
    // When
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;  // = const app = new AppComponent();
    //Then 
    expect(app).toBeTruthy();
  });

  // test spec #2
  it(`should have as title 'contact-manager-ng13'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact-manager-ng13');
  });

  // test spec #3
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('contact-manager-ng13 app is running!');
  });
});
