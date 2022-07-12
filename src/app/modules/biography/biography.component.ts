import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { CelebritiesService } from 'src/app/services/celebrities.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css', './celebrities/celebrities.component.css']
})
export class BiographyComponent implements OnInit {
  constructor(private celebritiesService: CelebritiesService,
    private router: Router, private meta: Meta
    ) { }
  celebrities: any[] = [];
  randomCelebrity: any
  selectedCelebrity: any;
  shuffled: any
  selected: any
  moreCelebrities: any
  recentPost: any
  isLoading = false;
  borderColor="black";

  ngOnInit(): void {
    this.isLoading=true;
    this.recentPost = this.celebritiesService.getCelebrities().slice(-6).reverse();
    this.celebrities = this.celebritiesService.getCelebrities();
    this.randomCelebrity = this.celebritiesService.getCelebrities()[Math.floor((Math.random() * this.celebritiesService.getCelebrities().length))];
    this.shuffled = this.celebritiesService.getCelebrities().sort(() => 0.5 - Math.random());
    this.selected = this.shuffled.slice(0, 4);
    this.moreCelebrities = this.shuffled.slice(5, 17);
      this.isLoading=false;
      this.meta.updateTag({ name: 'description', content: 'Biography Categories'});
  }

  onNavigate(selected: any) {
    this.isLoading=true;
    window.scrollTo(0,0)
    const celebrityName = selected.name.toLowerCase().split(' ')
    const celebrityNameJion = celebrityName.join('-');
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/`, celebrityNameJion])
    // );
    // window.open(url, '_blank');

    // this.router.navigate([`/${celebrityNameJion}`])
    this.router.navigate(['/', celebrityNameJion]); 
    this.isLoading=false
  }

  onHoverCelebrity(selected: any) {
    this.selectedCelebrity = this.celebritiesService.selectedCelebrity(selected);
   }
}
