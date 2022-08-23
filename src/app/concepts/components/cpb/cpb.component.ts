import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <p>Age is {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Create a variable 
  @Input() age = 20; // Step2: Make it a Custom Property

  // Step 3: Refer concepts.comp.html 

  constructor() { }

  ngOnInit(): void {
  }

}
