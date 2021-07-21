import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public usersubject:BehaviorSubject<any>;
    serviceData : any=[
      // {"first":"sss","last":"swain","age":23,"phone":12344}
    ];
    arr=[];
  constructor() {
    
   }
  user(first:string,last:string,age:string,phone:string){
    debugger;
   console.log(first);
  }
  // getservicedata(): any[] {
  //   return this.serviceData;
  // }
//  debugger;
   userdata = new Subject<any>();
  dataflow(){
   // this.arr=this.familydata;
  }
  
}
