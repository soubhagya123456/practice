import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.styl']
})
export class ChildComponent implements OnInit {
    @Input() public parentdata;
    @Output() public child = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
  }
  senddata(){
    this.child.emit("soubhagy swain");
  }
}
