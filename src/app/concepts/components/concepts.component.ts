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


}
