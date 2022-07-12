import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news-headline',
  templateUrl: './news-headline.component.html',
  styleUrls: ['./news-headline.component.css']
})
export class NewsHeadlineComponent implements OnInit {

  constructor(private newsService: NewsService, private router: Router, private meta: Meta) { }

  newsArray:any;
  isLoading = false;
  borderColor = "black";
  hoveredNews:any;
//pagination properties
  p:any;
  responsive:boolean = true;
  

  ngOnInit(): void {
    this.isLoading= true;
    this.newsArray = this.newsService.getNews().reverse();
    this.meta.updateTag({ name: 'description', content: 'News Headlines'});
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }

  onNavigate(news:any) {
    window.scrollTo(0,0);
    const selectedNews = news.title.toLowerCase().split(' ').join('-');
    this.router.navigate(['/news', selectedNews]);
  }

  onHoverSelectedNews(news:any){
    this.hoveredNews = this.newsService.hoverSelectedNews(news);
  }
}