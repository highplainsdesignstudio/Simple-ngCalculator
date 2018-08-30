import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})
export class FunctionButtonComponent implements OnInit {

  @Input() calcFunction;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // console.log("in onClick for function-button");
    this.clickEvent.emit(this.calcFunction);
  }

}
