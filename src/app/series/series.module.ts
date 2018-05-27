import {NgModule} from "@angular/core";
import {SerieService} from "./serie.service";
import {SeriesComponent} from "./series.component";
import {SeriesOnTheAirComponent} from "./series-on-the-air/series-on-the-air.component";
import {SeriesTopRatedComponent} from "./series-top-rated/series-top-rated.component";
import {SeriesMostPopularComponent} from "./series-most-popular/series-most-popular.component";
import {SeriesRoutingModule} from "./series-routing.module";
import {SerieSingleComponent} from "./serie-single/serie-single.component";
import {CommonModule} from "@angular/common";
import {PagerModule} from "../pager/pager.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SeriesRoutingModule,
        RouterModule,
        CommonModule,
        PagerModule
    ],
    declarations: [
        SeriesComponent,
        SerieSingleComponent,
        SeriesOnTheAirComponent,
        SeriesTopRatedComponent,
        SeriesMostPopularComponent
    ],
    providers: [
        SerieService
    ]
})
export class SeriesModule {

}