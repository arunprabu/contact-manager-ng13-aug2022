import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  userList: any[] = [];
  isLoading = true;
  isError = false;

  constructor(private contactService: ContactService) {
    console.log('Inside constructor');
  }

  // lifecycle hook
  ngOnInit(): void { 
    console.log('Inside ngOnInit');
    // will be exec'd whenever the comp comes into view 
    // ideal place for you send async calls 
    this.contactService.getContacts()
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.length> 0){
          this.isLoading = false;
          this.userList = res;
        }else{
          this.isError = true;
        }
      })
  }

}
