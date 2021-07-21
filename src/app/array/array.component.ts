import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray,FormControl,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.styl']
})
export class ArrayComponent implements OnInit {
      FormGroup:FormGroup;
      app:any;
  constructor() { }

  // ngOnInit():void {
  //   this.app = new FormGroup({
  //     Arrayname:new FormArray([
  //       new FormControl(''),
  //        new FormControl(''),
  //        new FormControl(''),
  //        new FormControl('')
  //     ]),
  //   });
  // }


  ngOnInit():void {
    this.app = new FormGroup({
      Arrayname:new FormArray([
       new FormControl(''),
      ]),
    });
  }
    
  add(){
    this.app.get('Arrayname').push(new FormControl());
  }

  delete(index:number){
   let control = <FormArray>this.FormGroup.controls['Arrayname'];
   if(control !=null){
     this.app = control.value.length;
   }
   if(this.app >1){
     control.removeAt(index);
   }
  }
}

