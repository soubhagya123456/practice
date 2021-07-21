import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray} from '@angular/forms';
import {userc} from './Userc';
import {Injectable} from '@angular/core';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent  {
       regi :FormsModule;
       first:string='';
       last:string='';
       email:string='';
       phone:number=0;
  constructor(private fb : FormBuilder) {

    this.regi = fb.group({
        'first':[null,Validators.required],
        'last':[null,Validators.required],
        'email':[null,Validators.compose([Validators.required,Validators.email])],
       

        'phone':[null,Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/)])]
    });
   }

  ngOnInit() {
      
      // this.regi.get('first').ValueChanges.subscribe(
      //   uname=>{
      //       console.log('first changed:'+uname);
      //   }
      // )

      // this.regi.ValueChanges.subscribe((uname:userc)=>(
      //   console.log('first changed:'+uname.first),
      //   console.log('last changed:'+uname.last),
      //   console.log('email changed:'+uname.email),
      //   console.log('phone changed:'+uname.phone)
      // )
      // );

      // this.regi.get('first').statusChanges.subscribe(
      //   status => {
      //   console.log('first: '+ status);
      
      // }
      // ); 

      
      // this.regi.statusChanges.subscribe(
      //   status => {
      //   console.log('form: '+ status);
      
      // }
      // ); 
      
  }

  onform(form:NgForm){
    console.log(form);
  }
  // filldata(){
  //   this.regi.setValue({
  //    "first":"soubhagya",
  //    "last":"swain",
  //    "email":"soubhagya@gmail.com",
  //    "phone":"9876543210"
  //   })
  // }

  // filldata(){
  //   this.regi.patchValue({
  //    "first":"soubhagya",
  //    "last":"swain",
  //    "email":"soubhagya@gmail.com",
  //    "phone":"9876543210"
  //   })
  // }

}
