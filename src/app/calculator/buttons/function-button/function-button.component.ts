import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})
export class FunctionButtonComponent implements OnInit {

  @Input() calcFunction;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // console.log("in onClick for function-button");
  }

}
