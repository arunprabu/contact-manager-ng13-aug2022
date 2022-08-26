import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Also Learn about FormBuilder
  // Step1: let's have form tag equivalent in ts 
  addContactForm!: FormGroup;
  isSaved = false;

  constructor( private contactService: ContactService) { // 1. connect with the service using dep inj
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // life cycle hook 
    this.addContactForm = new FormGroup({ // Step 1 continues... 
      // Step 2: LEt's have the input equivalents in ts
      // For Step 3 and 4 refer add-contact.comp.html
      name: new FormControl('john', Validators.required), // Step 5: Let's work on validations
      phone: new FormControl('201321424', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
  }

  handleAddContact(): void{
    console.log(this.addContactForm.value);

    // 2. send the above form data to service
    this.contactService.createContact(this.addContactForm.value)
      .subscribe( (res: any) => { // 3. get the res from the service 
        console.log(res);
        if(res && res.id) {
          this.isSaved = true;
        }
      });
    
  }

}
