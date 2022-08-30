import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private contactsApiURL = environment.CONTACTS_API_URL;

  constructor( private http: HttpClient) { }

  createContact(formData: any){ // 1. get the form data from the comp 
    console.log(formData);
    
    // 2. send the form data to the REST API
      // 2.1 What's the REST API endpoint? 'https://jsonplaceholder.typicode.com/users'
      // 2.2 What is the Http Method? POST 
      // 2.3 What's the REST API Client Tool? HttpClient 
    return this.http.post(this.contactsApiURL, formData)
      .pipe( map((res:any) => { // 3. get the res from the rest api 
        console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  getContacts(){
    console.log('Inside getContacts');
    return this.http.get(this.contactsApiURL)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getContactById(id: string | null ){
    console.log('Inside getContactById');
    return this.http.get(this.contactsApiURL + '/' + id)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
  
  
}
