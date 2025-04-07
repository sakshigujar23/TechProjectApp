<<<<<<< HEAD
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildCompComponent } from "./child-comp/child-comp.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildCompComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'lifecylebookApp';

  datafromchild!:string;
  isChildInvoked:boolean=false

  msg2:string=""

  constructor(){
    console.log("Parent constructor called");
  }
  /*ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnchanges invoked");
  }*/
  ngOnInit(): void {
    console.log("Parent ngOnInit called");
  }

  getDataFromChild(e:string){
    this.datafromchild=e;
  }

  OnToggleChild(){
    this.isChildInvoked=!this.isChildInvoked
  }
=======
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { TestCompComponent } from "./test-comp/test-comp.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, LoginComponent, TestCompComponent, CreateProjectComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectApp';
>>>>>>> 2a58cbc (first commit)
}
