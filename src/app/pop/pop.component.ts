import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray,FormControl} from '@angular/forms';
// import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css'],
  providers :[ServiceService]

})
export class PopComponent implements OnInit {
  private s:BehaviorSubject<any>;
  
  // addFamily: FormGroup;
 
  // data : any;
  // FormGroup:FormGroup;
  // app:any;
  familyData :any;

 orderForm: FormGroup;
 items: FormArray;
  constructor(private fb:FormBuilder,public _biodataServices : ServiceService, public router : Router) { 
    
    this.orderForm=new FormGroup({
      items:new FormArray([])
    });
   
   
  }

  ngOnInit(){
   this.addItem();
  }
  
  onSubmit(){
    debugger;
    // alert("test");
    this.familyData=this.orderForm.value;
    //console.log(this.familyData);
    // console.log('order form', this.orderForm.value)
    // console.log('family data', this.familyData)
    this._biodataServices.user(this.orderForm.value["items"][0]["first"],this.orderForm.value["items"][0]["last"],this.orderForm.value["items"][0]["age"],this.orderForm.value["items"][0]["phone"]);
    this.s.next(this.familyData);
    this._biodataServices.userdata.next(this.familyData);
    //this._biodataServices.getservicedata();
    // alert(this._biodataServices.serviceData);
   // console.log(this._biodataServices.serviceData);
    // this.router.navigateByUrl('/table');
     //this.router.navigateByUrl('/table', {state : { data: this._biodataServices.serviceData } });
    // this.router.navigateByUrl('/table');    

  }

createItem():FormGroup{
  return this.fb.group({
   first:'',
   last:'',
   phone:'',
   age:'',
  });
}

addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}
 

}
