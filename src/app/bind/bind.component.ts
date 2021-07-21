import { Component, OnInit } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.styl']
})
export class BindComponent implements OnInit {

  // constructor(
  //   public first :string,
  //   public classes :string,
  //   public school :string
  // ) { }

  ngOnInit() {
  }
    usermodel = new User("soubhagya","swain","mmms");

}
