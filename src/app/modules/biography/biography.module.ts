import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BiographyComponent } from "./biography.component";
import { CelebritiesComponent } from "./celebrities/celebrities.component";
import { CoresModule } from "../core/core.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { UIComponentsModule } from "src/app/UI-components/ui-components.module";
import { DirectivesModule } from "src/app/directives/directives.module";
import { MatListModule } from "@angular/material/list";
import { PipeModule } from "src/app/pipes/pipes-module";
import { BiographyRoutingModule } from "./biography-routing.module";
import { ViewByCategoryComponent } from "./view-by-category/view-by-category.component";

@NgModule({
    declarations:[
        BiographyComponent,
        CelebritiesComponent,
        ViewByCategoryComponent
    ],
    
imports:[
    CommonModule,
    CoresModule,
    Ng2SearchPipeModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    UIComponentsModule,
    DirectivesModule,
    PipeModule,
    BiographyRoutingModule
],
exports: [
    BiographyComponent,
    CelebritiesComponent,
    ViewByCategoryComponent
],
providers: []
})

export class BiographyModule{}