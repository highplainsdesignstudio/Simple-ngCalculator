import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ScreenComponent } from './calculator/screen/screen.component';
import { ButtonsComponent } from './calculator/buttons/buttons.component';
import { NumberButtonComponent } from './calculator/buttons/number-button/number-button.component';
import { FunctionButtonComponent } from './calculator/buttons/function-button/function-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ScreenComponent,
    ButtonsComponent,
    NumberButtonComponent,
    FunctionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
