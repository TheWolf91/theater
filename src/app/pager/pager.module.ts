import {NgModule} from "@angular/core";
import {PagerComponent} from "./pager.component";
import {PagerService} from "./pager.service";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule
    ],
    exports: [
        PagerComponent
    ],
    declarations: [
        PagerComponent
    ],
    providers: [
        PagerService
    ]
})
export class PagerModule {

}