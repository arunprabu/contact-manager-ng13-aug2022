import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <div>
      <h2 style="background-color: #ff0000">Calc</h2>
      <p>
        Counter Value: 
        <span class="counter">{{counter}}</span>
      </p>

      <p class='info'>{{counterInfo}}</p>

      <button (click)="handleIncrement()" class="incrementBtn">Increment</button>
      <button (click)="handleDecrement()" class="decrementBtn">Decrement</button>
    </div>
  `,
  styles: [
  ]
})
export class CalcComponent implements OnInit {

  counter = 0;
  counterInfo = '';

  constructor() { 
  }

  ngOnInit(): void {
  }

  add(a: number, b: number): number{
    return a + b; 
  }

  handleIncrement(){
    if(this.counter < 10){
      this.counter += 1;
      this.counterInfo = '';
    }else{
      this.counterInfo = 'Max Reached';
    }
  }

  handleDecrement(){
    if(this.counter > 0){
      this.counter -= 1;
      this.counterInfo = '';
    }else{
      this.counterInfo = 'Min Reached';
    }
  }
}
