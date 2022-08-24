import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables 
  // interpolation related
  appName = 'Contact Manager App!';

  // prop binding related
  companyName = 'Cognizant Technologies';

  // two way binding 
  courseName = 'Angular';

  // custom prop binding related
  myAge = 50;

  dataFromChildComponent = {
    name: '',
    city: ''
  };

  // directives related
  isLoggedIn = false;
  skills = ['js', 'ng', 'node', 'react'];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related 
  handleClickMe( event: Event ){
    console.log(event); // event object
    alert('clicked');

    // TODO: disable the button
    // TODO: change the button label to 'Clicked'
  }


  // Step 5: Listener for the emitted custom event
  handleProfileLoaded(event: any){
    console.log(event);
    this.dataFromChildComponent = event;// For Step 6-- Refer concepts.comp.html
  }

}
