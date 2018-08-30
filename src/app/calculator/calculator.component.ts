import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display: string = "0";
  
  constructor() { }

  ngOnInit() {
  }

  onButtonsChange(y) {
    this.display = y;
  }

}
