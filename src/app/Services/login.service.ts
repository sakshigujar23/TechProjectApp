import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login/login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:3000/login"
  constructor(private http:HttpClient) { }

  addUser(l:Login){
    return this.http.post(this.url,l)

  }

  
}
