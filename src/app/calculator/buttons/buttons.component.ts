import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5,6,7,8,9,0];
  functions: string[] = ['.','*','/','+','-','C','='];

  display = "";

  constructor() { }

  ngOnInit() {
  }

  onFunctionClick(funct) {
    if(funct === ".") {
      this.display += funct;
    } else if(funct === "C") {
      this.display = "";
    } else if(funct === "=") {
      var y = eval(this.display);
      this.display = y.toString();
    } else {
      this.display = this.display + " " + funct + " ";
    }
    console.log(this.display);
  }

  onNumberClick(num) {
    this.display += num.toString();
    console.log(this.display);
  }

}
