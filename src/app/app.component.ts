import { Component, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  // // <input> variables for display and tracking
  // tmpNumberString = "";
  // tmpOutputString = "";  
  // eoe = false; // end of equation (eoe);


  // // The clear function clears the displayed input as well as the memory 
  // // of the current equation.
  // clear = function(evt) {
  //   this.tmpNumberString = "";
  //   this.tmpOutputString = "";
  //   this.eoe = false;
  // } // end clear()

  // equals = function(evt, equal) {
  //   // first check if equation ends with a mathFunction.
  //   // This should be done with regex.
  //   var filterRegex = /[*/+-]\s$/;
  //   var matches = this.tmpOutputString.match(filterRegex);
  //   if (matches) {
  //     var value = eval(this.tmpOutputString.slice(0, matches.index));
  //     this.tmpOutputString = String(value);
  //     this.tmpNumberString = "";
  //     this.eoe = true;
  //   } else {
  //     var value = eval(this.tmpOutputString);
  //     this.tmpOutputString = String(value);
  //     this.tmpNumberString = "";
  //     this.eoe = true;
  //   }
  // } // end equals()

  // // mathFunction is called when buttons / * + - = are clicked.
  // mathFunction = function(evt, operator) {
  //   if (this.tmpNumberString !== "") {
  //     this.tmpNumberString = "";
  //     this.tmpOutputString += " " + operator + " ";
  //   }

  //   if (this.eoe) {
  //     this.tmpNumberString = this.tmpOutputString;
  //     this.tmpOutputString += " " + operator + " ";
  //     this.eoe = false;
  //   }
  // }

  // // numberClicked is the function called when buttons 0-9 are clicked. 
  // // The decimal button "." also calls this function.
  // numberClicked = function(evt, num) {
  //   // if num isNan(), then it is "." that has been entered.
  //   if (isNaN(num)) {
  //     if (Number.isInteger(Number(this.tmpNumberString)) && this.tmpNumberString !== "") {
  //       this.tmpNumberString += num;
  //       this.tmpOutputString += num;
  //     }
  //     if(this.tmpNumberString === "") {
  //       this.tmpNumberString = "0" + num;
  //       this.tmpOutputString = this.tmpNumberString;
  //     }
  //   } else {
  //     this.tmpNumberString += String(num);
  //     if (this.tmpOutputString === "" || this.eoe) {
  //       this.tmpOutputString = this.tmpNumberString;
  //       this.eoe = false;
  //     } else {
  //       this.tmpOutputString += String(num);
  //     }
  //   } 
  // } // end numberClicked()

  
}
