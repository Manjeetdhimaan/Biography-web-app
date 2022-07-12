import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatListModule } from '@angular/material/list';
import { UIComponentsModule } from "src/app/UI-components/ui-components.module";
import { DirectivesModule } from "src/app/directives/directives.module";
import { SearchComponent } from "./search/search.component";
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent
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
    NgxPaginationModule
],
exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
],
providers: [HomeComponent]
})

export class CoresModule{}