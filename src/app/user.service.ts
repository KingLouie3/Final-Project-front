import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
firstName = '';
isLoggedIn ;
  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"

  constructor(private _http: HttpClient) { }

  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}
