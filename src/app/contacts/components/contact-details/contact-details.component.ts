import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {
  
  contactData: any;
  dupContactData: any;
  isUpdated = false;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Reading URL Param
    const id = this.route.snapshot.paramMap.get('contactId');
    console.log(id);

    this.contactService.getContactById(id)
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  handleEditModalOpen(): void{
    // immutable object 
    this.dupContactData = { ...this.contactData }; // Shallow copy
  }

  handleUpdateContact(contactForm: any): void {
    console.log(contactForm); //form state
    console.log(this.dupContactData ); // submittable form data

    this.contactService.updateContactById(this.dupContactData)
      .subscribe((res: any) => {
        console.log(res);
        if(res && res.id) {
          this.isUpdated = true;
        }
      });
  }
}
