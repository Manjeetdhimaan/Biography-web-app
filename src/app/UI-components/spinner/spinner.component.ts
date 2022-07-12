import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }
  

  @Input('border-color') borderColor = '';
  @Input('isDarkBackground') isDarkBackground:boolean = false;

  ngOnInit() {
    
  }

}