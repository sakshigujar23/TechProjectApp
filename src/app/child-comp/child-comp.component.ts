import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit , OnDestroy,OnChanges{
  
  constructor(){
    console.log('Child Component Constructor Called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child ngOnchanges invoked");
  }
  ngOnDestroy(): void {
    console.log("child ngDestroy invoked");
  }
  ngOnInit(): void {
      this.eventemitter.emit('Hello from child');
    }

    
    //to receive msg from parent
    @Input() msgfromparent='';
  
    @Output() eventemitter=new EventEmitter<string>();

}
