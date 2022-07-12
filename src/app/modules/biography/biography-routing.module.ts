import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography.component';
import { ViewByCategoryComponent } from './view-by-category/view-by-category.component';

const routes: Routes = [
  {
    path: 'biographies',
    component: BiographyComponent, data: {title: 'Biographies - Newsfarmers'}, pathMatch: 'full'
  },
  { path: ':view', component: ViewByCategoryComponent , data: {title: 'Categories - Newsfarmers'},  pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiographyRoutingModule {}