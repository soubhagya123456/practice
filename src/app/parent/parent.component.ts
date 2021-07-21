import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.styl']
})
export class ParentComponent implements OnInit {
    public youtuber = "soubhagya swain";
    public childmsg;
  constructor() { }

  ngOnInit() {
  }

}
