import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  //@Input()clickTime;
  private _time;
  @Input()
  set clickTime(time: string) {
    console.log(time)
    this._time = (time && time.trim()) || '<no name set>';
  }
 
  get clickTime(): string { return this._time; }

  constructor() { }

  ngOnInit() {
  }

}
