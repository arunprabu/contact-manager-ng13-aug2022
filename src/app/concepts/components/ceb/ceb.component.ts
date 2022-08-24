import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button (click)="handleSendDataToParent()">Send Data To Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Let's have the data 
  profileInfo = {
    name: 'John',
    city: 'Sydney'
  }

  // Step2: Let's create custom event 
  // Step 2.1 Have an object for EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // Step 2.2 Let's make it a custom event - @Output()

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent(){
    console.log('Before sending data to Parent');
    // Step 3: Let's Trigger/Emit the custom event  -- send the data as well
    this.profileLoaded.emit(this.profileInfo);
    // Refer concepts.comp.html for Step 4 of CEB
  }
}
