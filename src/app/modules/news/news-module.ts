import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatListModule } from '@angular/material/list';
import { UIComponentsModule } from "src/app/UI-components/ui-components.module";
import { DirectivesModule } from "src/app/directives/directives.module";
import { NewsHeadlineComponent } from "./news-headline/news-headline.component";
import { NewsDecsriptionComponent } from "./news-decsription/news-decsription.component";
import { PipeModule } from "src/app/pipes/pipes-module";
import { CoresModule } from "../core/core.module";
import { NewsRoutingModule } from "./news-routing.module";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations:[
        NewsHeadlineComponent,
        NewsDecsriptionComponent,
    ],
    
imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    UIComponentsModule,
    DirectivesModule,
    PipeModule,
    CoresModule,
    NewsRoutingModule,
    NgxPaginationModule
],
exports: [
    NewsHeadlineComponent,
    NewsDecsriptionComponent,
],
providers: []
})

export class NewsModule{}