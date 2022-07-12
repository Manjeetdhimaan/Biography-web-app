import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackdropComponent } from "./backdrop/backdrop.component";
import { BackToTopComponent } from "./back-to-top/back-to-top.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { LoadingComponent } from "./loading";

@NgModule({
    declarations:[
        BackdropComponent,
        BackToTopComponent,
        SpinnerComponent,
        LoadingComponent
    ],
    
imports:[
    CommonModule,
],
exports: [
    BackdropComponent,
    BackToTopComponent,
    SpinnerComponent,
    LoadingComponent
]
})
export class UIComponentsModule{}