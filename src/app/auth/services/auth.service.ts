import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  login(formData: any){
    return this.http.post(this.authURL, formData)
      .pipe( map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuth(){
    if(localStorage.getItem('authToken')){
      return true;
    }else{
      return false;
    }
  }
}
