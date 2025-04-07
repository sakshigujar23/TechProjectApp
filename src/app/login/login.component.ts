import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { Login } from './login.dto';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myform!:FormGroup;
  ls:LoginService=inject(LoginService);
  lobj!:Login;
  l_list!:Login[];


  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.myform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]]
    })
  }

  get email(){
    return this.myform.get('email');
  }
  get pass(){
    return this.myform.get('pass');
  }

  saveUser() {
    this.lobj = {
      email: this.myform.value.email,
      pass: this.myform.value.pass
    };
  
    this.ls.addUser(this.lobj).subscribe(result => {
      alert("User Added");
    });
  }
  

 
}
