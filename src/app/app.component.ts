import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CelebritiesService } from './services/celebrities.service';
import { NewsService } from './services/news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// # HTTPS forced

// <IfModule mod_rewrite.c>

// RewriteEngine On

// RewriteCond %{HTTPS} off
// ErrorDocument 404 /index.html

// RewriteRule ^(.*)$ https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]
// Header always set Content-Security-Policy "upgrade-insecure-requests;"

// </IfModule>
export class AppComponent implements OnInit {
  title = 'Newsfarmers';
  constructor(private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private celebrityService: CelebritiesService, private metaService: Meta, private newsService: NewsService) { }

  isCelebrityUrl: boolean = false;
  isNewsUrl: boolean = false;
  isCategoryComponent: boolean = false;

  capitalizeFirstLetter(string: String) {
    window.localStorage.setItem
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  ngOnInit() {
    var activatedUrl: any;
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          this.celebrityService.celebrities.map((a: any) => {
            a.category.map((n: any) => {
              if (this.router.url == "/category/" + n.toLowerCase().split(' ').join('-') || this.router.url == "/category/biographies") {
                this.isCategoryComponent = true;
              }
            })
            if (this.router.url.toLowerCase() === "/" + a.name.toLowerCase().split(' ').join('-')) {
              this.router.url.toLowerCase();
              this.isCelebrityUrl = true;
            }
          })
          this.newsService.newsArray.map((news: any) => {
            if (this.router.url.toLowerCase() === "/news/" + news.title.toLowerCase().split(' ').join('-')) {
              this.router.url.toLowerCase();
              this.isNewsUrl = true;
              activatedUrl = news.title;
            }
          })
          //getting name from url 
          let routerUrl_split = this.router.url.slice(1).split("-")
          let result = []
          for (let i = 0; i < routerUrl_split.length; i++) {
            result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1))
          }
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data['title']) {
            if (this.isCategoryComponent == true) {
              this.isCategoryComponent = false;
              child.snapshot.data['title'] = this.capitalizeFirstLetter(this.router.url.slice(10).split('-').join(' ')) + ' - Newsfarmers';
              this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(10).split('-').join(' ')) });
              return child.snapshot.data['title'];
            }
            if (this.isNewsUrl == true) {
              this.isNewsUrl = false;
              child.snapshot.data['title'] = activatedUrl + ' - Newsfarmers';
              this.metaService.updateTag({ name: 'description', content: activatedUrl });
              return child.snapshot.data['title'];
            }
            if (this.isCelebrityUrl == true) {
              this.isCelebrityUrl = false;
              this.metaService.updateTag({ name: 'description', content: result.join(" ") + '\'s Height, Weight, Age, Family, Affairs, Biography & More' });
              child.snapshot.data['title'] = result.join(" ") + ' Height, Weight, Age, Family, Affairs, Biography & More' + ' - Newsfarmers';
              return child.snapshot.data['title'];
            }
            else {
              return child.snapshot.data['title'] as string;
            }
          }
          return appTitle;
        })

      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

  scrollToContact(fragment: string) {
    try {
      document.querySelector('#' + fragment)?.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      console.log(e)
    }
  }

}
