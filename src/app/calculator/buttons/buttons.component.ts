import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5,6,7,8,9,0];
  functions: string[] = ['.','*','/','+','-','C','='];

  constructor() { }

  ngOnInit() {
  }

  onFunctionClick(funct) {
    console.log(funct);
  }

  onNumberClick(num) {
    console.log(num.toString());
  }

}
