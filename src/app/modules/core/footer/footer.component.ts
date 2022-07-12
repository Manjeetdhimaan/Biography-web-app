import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onNavigateHome(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
    this.router.navigate(['/']);
  }
 
}
