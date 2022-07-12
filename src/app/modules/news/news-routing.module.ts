import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDecsriptionComponent } from './news-decsription/news-decsription.component';
import { NewsHeadlineComponent } from './news-headline/news-headline.component';

const routes: Routes = [
    { path: '', component: NewsHeadlineComponent},
    { path: ':newsTitle', component: NewsDecsriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}