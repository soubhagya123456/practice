import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regi :FormsModule;
  first:string='';
  last:string='';
  email:string='';
  phone:number=0;
  date:number=0;
  constructor(private fb : FormBuilder) {
    this.regi = fb.group({
      'first':[null,Validators.required],
      'last':[null,Validators.required],
      'email':[null,Validators.compose([Validators.required,Validators.email])],
     

      'phone':[null,Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/)])],
	                                                                 

      'date':[null,Validators.required]
  });
   }

  ngOnInit() {
  }
  onform(form:NgForm){
    console.log(form);
  }
}
