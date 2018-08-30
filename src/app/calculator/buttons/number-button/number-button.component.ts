import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent implements OnInit {

  @Input() calcNumber;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // console.log("In onClick()");
    this.clickEvent.emit(this.calcNumber);
  }

}
