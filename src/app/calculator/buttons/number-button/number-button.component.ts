import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent implements OnInit {

  @Input() calcNumber;

  constructor() { }

  ngOnInit() {
  }

}
