import { Component, OnInit } from '@angular/core';
import {Vali} from '../vali';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.styl']
})
export class ValidationComponent implements OnInit {
    validata = new Vali();
    name:string="";
    phone:number=0;
  constructor() { }

  ngOnInit() {
  }
  local(form:any){
    console.log(this.name);
  }
}
