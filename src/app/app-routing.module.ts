import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CelebritiesComponent } from './modules/biography/celebrities/celebrities.component';
import { HomeComponent } from './modules/core/home/home.component';
import { SearchComponent } from './modules/core/search/search.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: {title : 'Newsfarmers'} },
  { path: '404notfound', component: PagenotfoundComponent, data: { title: 'Page not Found - Newsfarmers' } },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news-module').then(m => m.NewsModule),
    data: { title: 'News Headlines - Newsfarmers' }
  },
  { path: 'search', component: SearchComponent, data: { title: 'Search - Newsfarmers' } },

  {
    path: 'category',
    loadChildren: () => import('./modules/biography/biography.module').then(m => m.BiographyModule),
    data: { title: 'Biographies - Newsfarmers' }
  },
  {
    path: ':celebrity', component: CelebritiesComponent, data: {
      title: 'Celebrities - Newsfarmers', metatags: {
        'og:description': `biography`,
        'twitter:description': `biography`,
        keywords: `your keywords here`
      }
    }
  },
  { path: '**', pathMatch: 'full', redirectTo: '404notfound' },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
