import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number1 = "";
  number2 = "";
  currentNumber = "";

  numberClicked = function(evt, num) {
    // console.log testing.
    console.log(num);
    // let numberString = this.currentNumber + String(num);

    this.currentNumber += String(num);
    console.log(this.currentNumber);

    // This is NOT the proper way to introduce elements using Angular. This
    // MUST be changed after the prototype is complete.
    // document.getElementById("primary-input").value = this.currentNumber;
  } // end numberClicked()




  equals = function() {

  }
}
