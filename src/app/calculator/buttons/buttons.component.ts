import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() changeEvent = new EventEmitter();

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
    this.changeEvent.emit(this.display);
  }

  onNumberClick(num) {
    this.display += num.toString();
    this.changeEvent.emit(this.display);
  }

}
