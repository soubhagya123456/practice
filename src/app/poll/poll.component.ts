import { Component, OnInit } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray,FormControl,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.styl']
})
export class PollComponent implements OnInit {
     titel='soubhagya swain';
     fname:FormGroup;
     first:string='';
     last:string='';
     mail:string='';
  constructor(private fb:FormBuilder) {
    this.fname = fb.group({
       fname:['',Validators.required],
       lname:['',Validators.required],
       email:['',[Validators.required,Validators.email]]
    })
   }

  ngOnInit() {
  }
   sub(){
     this.first =this.fname.get("fname").value;
     console.log(this.first);
   }
   resetform(){
     this.fname.reset();
   }
}
