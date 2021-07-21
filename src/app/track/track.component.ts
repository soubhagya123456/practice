import { Component, OnInit } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.styl']
})
export class TrackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usermodel = new User("soubhagya","swain","mmms");
}
