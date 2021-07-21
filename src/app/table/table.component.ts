import { Component, OnInit } from '@angular/core';
import {SoubhagyaService} from '../Soubhagya.Service';
// import { MatTableDataSource} from '@angular/material';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import {MatDialog} from '@angular/material';
import { ServiceService } from '../service.service';
           
// export interface PeriodicElement {
//   Firstname: string;
//   Lastname: string;
//   Age: number;
  
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//    {Firstname: 'soubhgaya', Lastname: 'swain', Age:24}
// ];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [SoubhagyaService,ServiceService]
})

export class TableComponent implements OnInit {
  addFamily: FormGroup;
  displayedColumns: string[] = ['first', 'last', 'age',"phone","edit"];
  
  dataSource : [];
    
  constructor(public _biodataServices : ServiceService, public router : Router ,private fbb : FormBuilder,public dialog:MatDialog ) {
    
    console.log('coming to table component');
    //this.dataSource=this._biodataServices.serviceData;
    //this.dataSource = history.state.data;
    
    //console.log(this.dataSource);
    //  this._biodataServices.user.subscribe(data=>{
    //    this.dataSource=data;
    //  })
    
   }
  
  ngOnInit() {
   // this._biodataServices.user();
    //  this.data = this._biodataServices.work();
    // this.dataSource = this._biodataServices.getservicedata();
  }
  
  openDialog(){
    const dialogRef = this.dialog.open(DashComponent, {
      width: '450px',
      height:'380px',
    
    });

}
}
