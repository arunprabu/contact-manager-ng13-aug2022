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

  // pipes related
  randomTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur erat lacus';

  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related 
  handleClickMe( event: any){
    console.log(event); // event object
    alert('clicked');

    event.target.innerText = 'Clicked';
    // TODO: disable the button
    // TODO: change the button label to 'Clicked'
  }


  // Step 5: Listener for the emitted custom event
  handleProfileLoaded(event: any){
    this.dataFromChildComponent = event;// For Step 6-- Refer concepts.comp.html
  }

}
