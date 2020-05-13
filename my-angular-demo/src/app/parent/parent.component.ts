import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  num:number = 0;
  obj = [];

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.num++;
    this.obj.push({
      time: this.num
    })
  }

  refresh(){
    this.num = 0;
  }

}
