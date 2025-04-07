import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-comp',
  imports: [FormsModule,CommonModule],
  templateUrl: './test-comp.component.html',
  styleUrl: './test-comp.component.css'
})
export class TestCompComponent {
  num!:number;
  color:string="green";

  changeColor(){
    if(this.num%2==0){
      this.color='red';
    }
    else if(this.num%3==0){
      this.color='blue';
    
  }
  else if(this.num%5==0){
    this.color='yellow';
  }
  else{
    this.color='green';
  }

}
}
