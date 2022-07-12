import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CelebritiesService } from 'src/app/services/celebrities.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css'],
})

export class CelebritiesComponent implements OnInit, OnDestroy {
  imgUrl: any = 'assets/images/no-preview.png';
  celebrities: any[] = [];
  celebrity: any;
  currentYear: number = new Date().getFullYear();
  dobOfCelebrity: any;
  dodOfCelebrity: any;
  exactDOB:any;
  relatedPostArray: any[] = [];
  searchText: any;
  recentPost: any;
  isLoading = false;
  next: any;
  previous: any;
  borderColor = "black"
  subscription: Subscription;

  constructor(private celebritiesService: CelebritiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta) {
    // this.meta.addTag({ name: 'description', content: 'biography' });
    // this.meta.addTag({ name: 'description', content: 'biography' },true);
    // this.meta.addTag({ name: 'author', content: 'newsfarmers' });
    // this.meta.addTag({ name: 'author', content: 'newsfarmers' });
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          this.recentPost = this.celebritiesService.getCelebrities().slice(-8).reverse();
          this.celebrities = this.celebritiesService.getCelebrities();
          activatedRoute.params.subscribe((param: Params) => {
            this.celebritiesService.getCelebrities().map((a: any) => {
              if (param.celebrity.toLowerCase() == a.name.toLowerCase().split(' ').join('-')) {
                this.celebrity = a;
                this.dobOfCelebrity = this.celebrity.dob.year;
                this.dodOfCelebrity = this.celebrity.dod?.year;
                this.relatedPostArray = [];
                const celebrities = this.celebritiesService.getCelebrities().slice();
                const suffledArray = celebrities.sort(() => 0.5 - Math.random());
                // this.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === this.celebrity.categoryId.toLowerCase());
                const selectedCelebrity = this.celebrity.categoryId.map((a: any) => a.toLowerCase());
                suffledArray.filter((celebrity: any) => {
                  let randomCelebrity = celebrity.categoryId.map((a: any) => a.toLowerCase());
                  if ((randomCelebrity.filter((n: any) => { return selectedCelebrity.indexOf(n) >= 0; }).length >= 1)) {
                    this.relatedPostArray.push(celebrity);
                  }
                });
                // this.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === this.celebrity.categoryId.toLowerCase());
                this.isLoading = false;
              }
            })
          })
        }
      });
  }


  // getArraysIntersection(a1: any, a2: any) {
  //   return a1.filter((n: any) => { return a2.indexOf(n) !== -1; });
  // }
  
  ngOnInit(): void {
    // alert( "JanFebMarAprMayJunjulAugSepOctNovDec".indexOf("jul") / 3 + 1 );
    const domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    this.isLoading = true;
    this.recentPost = this.celebritiesService.getCelebrities().slice(-8).reverse();
    this.celebrities = this.celebritiesService.getCelebrities();
    this.celebritiesService.getCelebrities().map((a: any) => {
      if (this.router.url.toLowerCase() == "/" + a.name.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.celebrity = a;
        this.dobOfCelebrity = this.celebrity.dob.year;
        this.dodOfCelebrity = this.celebrity.dod?.year;
        this.exactDOB= this.celebrity.dob.year+'-'+this.celebrity.month+'-'+this.celebrity.date;
        this.relatedPostArray = [];
        const celebrities = this.celebritiesService.getCelebrities().slice();
        const suffledArray = celebrities.sort(() => 0.5 - Math.random());
        // this.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === this.celebrity.categoryId.toLowerCase());
        const selectedCelebrity = this.celebrity.categoryId.map((a: any) => a.toLowerCase());
        suffledArray.filter((celebrity: any) => {
          let randomCelebrity = celebrity.categoryId.map((a: any) => a.toLowerCase());
          if ((randomCelebrity.filter((n: any) => { return selectedCelebrity.indexOf(n) >= 0; }).length >= 1)) {
            this.relatedPostArray.push(celebrity);
          }
        });
        this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/${a.name.toLowerCase().split(' ').join('-')}` });
        setTimeout(() => {
          this.isLoading = false
        }, 0);
      }
    })
    if (this.router.url.toLowerCase() !== "/" + this.celebrity?.name.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/404notfound']);
      this.isLoading = false;
    }

    this.subscription = this.celebritiesService.getSearchedCelebrity
      .subscribe(
        (selectedCelebrity: any) => {
          this.isLoading = true;
          this.relatedPostArray = []
          this.celebrity = selectedCelebrity;
          this.dobOfCelebrity = selectedCelebrity.dob.year;

          this.dodOfCelebrity = this.celebrity.dod?.year;
          let celebrities = this.celebritiesService.celebrities.slice();
          const suffledArray = celebrities.sort(() => 0.5 - Math.random());
          const targetedCelebrity = this.celebrity.categoryId.map((a: any) => a.toLowerCase());
          suffledArray.filter((celebrity: any) => {
            let randomCelebrity = celebrity.categoryId.map((a: any) => a.toLowerCase());
            if ((randomCelebrity.filter((n: any) => { return targetedCelebrity.indexOf(n) >= 0; }).length >= 1)) {
              this.relatedPostArray.push(celebrity);
            }
          });
          // this.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === this.celebrity.categoryId.toLowerCase());
          this.isLoading = false;
        }
      );

  
  }

  onNavigate(selected: any) {
    this.isLoading = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.relatedPostArray = [];
    this.celebrity = selected;
    this.dobOfCelebrity = selected.dob.year;
    this.dodOfCelebrity = selected.dod?.year;
    this.celebrities = this.celebritiesService.getCelebrities();
    const celebrities = this.celebritiesService.getCelebrities().slice();
    const suffledArray = celebrities.sort(() => 0.5 - Math.random());
    const selectedCelebrity = this.celebrity.categoryId.map((a: any) => a.toLowerCase());
    suffledArray.filter((celebrity: any) => {
      let randomCelebrity = celebrity.categoryId.map((a: any) => a.toLowerCase());
      if ((randomCelebrity.filter((n: any) => { return selectedCelebrity.indexOf(n) >= 0; }).length >= 1)) {
        this.relatedPostArray.push(celebrity);
      }
    });
    // this.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === selected.categoryId.toLowerCase());
    this.recentPost = this.celebritiesService.getCelebrities().slice(-8).reverse();
    this.router.navigate(['/', selected.name.toLowerCase().split(' ').join('-')]);
    this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/${selected.name.toLowerCase().split(' ').join('-')}` });
    this.isLoading = false;


  }

  getAge() {
      return this.dobOfCelebrity ? this.currentYear - this.dobOfCelebrity : 'NA'
  }

  getAgeAtTimeOfDeath() {
      return this.dodOfCelebrity ? this.dodOfCelebrity - this.dobOfCelebrity : 'NA';
  }

  selectedCelebrity: string | any;
  onGetSelectedCelebrity(selected: any) {
    this.selectedCelebrity = this.celebritiesService.selectedCelebrity(selected);
  }

   getExactAge(dateString: string) {
     debugger;
    const ageInMilliseconds = +new Date() - +new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }
//  console.log(getAge('1997-04-23'));

  ngOnDestroy(): void {
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("name='description'");
    this.subscription.unsubscribe();
  }
}
