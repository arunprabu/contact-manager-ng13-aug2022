import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IContact } from '../models/icontact';

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
        // console.log(res);
        // 4. send the res to the comp 
        return res;
      }));
  }

  getContacts(): Observable<IContact[]>{
    console.log('Inside getContacts');
    return this.http.get<IContact[]>(this.contactsApiURL)
      .pipe( map( (res: IContact[]) => {
        // enrich, filter, sort, convert, remove
        // console.log(res);
        return res;
      }));
  }

  getContactById(id: string | null ){
    console.log('Inside getContactById');
    return this.http.get(this.contactsApiURL + '/' + id)
      .pipe( map( (res: any) => {
        // console.log(res);
        return res;
      }));
  }
  
  updateContactById(contactData: any): any {
    console.log(contactData);
    return this.http.put(this.contactsApiURL + '/' + contactData.id, contactData)
      .pipe( map( (res: any) => {
        // console.log(res);
        return res;
      }));
  }
  
}
