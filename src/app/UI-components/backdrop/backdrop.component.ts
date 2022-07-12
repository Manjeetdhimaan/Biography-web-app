import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  constructor() { }

  borderColor: string;
  showed: boolean;
  @Input() imgSrc: string = '';
  @Output() event = new EventEmitter();
  @Input() isLoading: boolean = false;
  @Input() isImg: boolean = false;
  ngOnInit() {
    this.borderColor = 'black';
    this.showed = true;
  }

  hideBackdrop() {
    this.showed = false;
  }

  preventOnClick() {
    this.event.emit(null);
  }
}

