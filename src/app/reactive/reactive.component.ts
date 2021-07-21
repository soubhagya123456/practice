import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.styl']
})
export class ReactiveComponent implements OnInit {
     
  app = new FormGroup({
  first: new FormControl(''),
  last: new FormControl(''),
  adress:new FormGroup({
    city: new FormControl(''),
    pin: new FormControl(''),   
  }),
  });

      
  constructor( private fb :FormBuilder) { }

  ngOnInit() {
  }
   submit(){
     console.warn(this.app.value);
   }
}
