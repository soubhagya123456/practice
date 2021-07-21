import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.styl']
})
export class FunComponent implements OnInit {
     titel = "krupajal"
    firstname:string="soubhagya swain";
  constructor() { }

  ngOnInit() {
  }

}
