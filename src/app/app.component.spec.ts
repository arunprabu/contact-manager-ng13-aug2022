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
  it(`should have as title 'Contact Manager App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // we are taking up app comp ts  for testing
    expect(app.title).toEqual('Contact Manager App!');
  });

});
