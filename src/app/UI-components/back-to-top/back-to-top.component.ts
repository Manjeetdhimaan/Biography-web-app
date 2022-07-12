import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
  animations: [
    trigger('appearInOut', [
      state('in', style({
        'visibility': 'visible',
        'opacity': '1',
        'transform': 'translateY(0px)'
      })),
      state('out', style({
        'visibility': 'hidden',
        'opacity': '0',
        'transform': 'translateY(150px)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BackToTopComponent implements OnInit {
  @ViewChild('top') top: ElementRef;

  constructor() { }


  animationState = 'out';
  private timerID: any = null;
  currentPosition = window.pageYOffset;

  // Button will appear when user scrolls Y to this position, must be >=0
  @Input() scrollDistance = 50;

  // If true, scrolling to top will be animated
  @Input() animate = false;

  // Animated scrolling speed, must be >=1
  @Input() speed = 80;

  // Acceleration coefficient, added to speed when using animated scroll, must be >=0
  @Input() acceleration = 0;


  ngOnInit() {
    this.validateInputs();
  }

  private validateInputs() {
    const errorMessagePrefix = 'BackToTopComponent component input validation error: ';

    if (this.scrollDistance < 0) {
      throw Error(errorMessagePrefix + '\'scrollDistance\' parameter must be greater or equal to 0');
    }

    if (this.speed < 1) {
      throw Error(errorMessagePrefix + '\'speed\' parameter must be a positive number');
    }

    if (this.acceleration < 0) {
      throw Error(errorMessagePrefix + '\'acceleration\' parameter must be greater or equal to 0');
    }
  }

  /**
   * Listens to window scroll and animates the button
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // this.scrollFunction();
    if (this.isBrowser()) {
      
      let scroll = window.pageYOffset;
      if (scroll > this.currentPosition) {
        this.animationState = 'out';
      } else {
        this.animationState = this.getCurrentScrollTop() > this.scrollDistance / 2 ? 'in' : 'out';
      }
      this.currentPosition = scroll;

      
    }
  }

  /**
   * Scrolls window to top
   * @param event
   */

  
  // scrollTop(event: any) {
  //   if (!this.isBrowser()) {
  //     return;
  //   }

  //   event.preventDefault();
  //   if (this.animate) {
  //     this.animateScrollTop();
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }
  scrollTop(event: any) {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
    // scroll to bottom
    // window.scrollTo({
    //   top: document.body.scrollHeight || document.documentElement.scrollHeight,
    //   behavior:'smooth'
    // });
  }

  /**
   * Performs the animated scroll to top
   */
  animateScrollTop() {
    if (this.timerID !== null) {
      return;
    }

    let initialSpeed = this.speed;
    const that = this;
    this.timerID = setInterval(function () {
      window.scrollBy(0, -initialSpeed);
      initialSpeed = initialSpeed + that.acceleration;
      if (that.getCurrentScrollTop() === 0) {
        clearInterval(that.timerID);
        that.timerID = null;
      }
    }, 15);
  }

  /**
   * Get current Y scroll position
   * @returns {number}
   */
  getCurrentScrollTop() {
    if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
      return window.scrollY;
    }

    if (typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0) {
      return window.pageYOffset;
    }

    if (typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0) {
      return document.body.scrollTop;
    }

    if (typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0) {
      return document.documentElement.scrollTop;
    }

    return 0;
  }

  /**
   * This check will prevent 'window' logic to be executed
   * while executing the server rendering
   * @returns {boolean}
   */
  isBrowser(): boolean {
    return typeof (window) !== 'undefined';
  }
  scrollFunction() {
    if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
      this.top.nativeElement.style.display = "block";
    } else {
      this.top.nativeElement.style.display = "none";
    }
  }


  // onContentScrolled(){
  //   let scroll = window.pageYOffset;
  //   if (scroll > this.currentPosition) {
  //     this.animationState = 'out';
  //   } else {
  //     this.animationState = 'in';
  //   }
  //   this.currentPosition = scroll;
  // }
}
