import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-decsription',
  templateUrl: './news-decsription.component.html',
  styleUrls: ['./news-decsription.component.css', '../../biography/celebrities/celebrities.component.css']
})
export class NewsDecsriptionComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  news: any;
  newsArray: any; imgUrl: any = 'assets/images/no-preview.png';
  moreNews: any;
  latestNews: any;
  subscription: Subscription;

  constructor(private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta) {

    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          // this.recentPost = this.newsService.getnewsArray().slice(-8).reverse();
          // this.newsArray = this.newsService.getNews();
          activatedRoute.params.subscribe((param: Params) => {
            this.newsService.getNews().map((a: any) => {
              if (param.newsTitle.toLowerCase() == a.title.toLowerCase().split(' ').join('-')) {
                this.news = a;
                // this.dobOfnews = this.news.dob.year;
                // this.relatedPostArray = [];
                let newsArray = this.newsService.getNews().slice();
                let suffledArray = newsArray.sort(() => 0.5 - Math.random());
                // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
                this.isLoading = false;
              }
            })
          })

        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    // this.recentPost = this.newsService.getNews().slice(-8).reverse();
    this.newsArray = this.newsService.getNews();
    this.latestNews = this.newsService.newsArray.reverse().slice(0, 8);
    this.newsService.getNews().map((a: any) => {
      if (this.router.url.toLowerCase() == "/news/" + a.title.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.news = a;
        // this.dobOfnews = this.news.dob.year;
        // this.relatedPostArray = [];
        let celebrities = this.newsService.getNews().slice(-10).reverse();
        this.moreNews = celebrities.sort(() => 0.5 - Math.random());
        // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
        this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/news/${a.title.toLowerCase().split(' ').join('-')}` });
        this.isLoading = false;
      }
    })
    if (this.router.url.toLowerCase() !== "/news/" + this.news?.title.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/404notfound']);
      this.isLoading = false;
    }

    this.subscription = this.newsService.getSearchedNews
      .subscribe(
        (selectedNews: {}) => {
          this.news = selectedNews;
        }
      );
  }

  onNavigate(selected: any) {
    this.isLoading = true;
    this.news = selected;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const celebrityName = selected.title.toLowerCase().split(' ');
    const celebrityNameJion = celebrityName.join('-');
    this.router.navigate(['news/', celebrityNameJion]);
    this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/news/${selected.title.toLowerCase().split(' ').join('-')}` });
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("name='description'");
    this.subscription.unsubscribe();
  }
}
