import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { AnimateDirective } from './animate.directive';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';

@NgModule({
    declarations: [
        AnimateDirective,
        BlockCopyPasteDirective
    ],
    exports: [
        AnimateDirective,
        BlockCopyPasteDirective
    ],

    imports: [
        CommonModule
    ],
    providers: [],
    bootstrap: []
})

export class DirectivesModule {
}
