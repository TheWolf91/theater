import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SeriesComponent} from "./series.component";
import {SeriesOnTheAirComponent} from "./series-on-the-air/series-on-the-air.component";
import {SeriesTopRatedComponent} from "./series-top-rated/series-top-rated.component";
import {SeriesMostPopularComponent} from "./series-most-popular/series-most-popular.component";
import {SerieSingleComponent} from "./serie-single/serie-single.component";

const seriesRoutes: Routes = [
    {
        path: '', component: SeriesComponent, children: [
            {path: '', redirectTo: 'latest', pathMatch: 'full'},
            {path: 'serie/:id', component: SerieSingleComponent},
            {path: 'on-the-air', component: SeriesOnTheAirComponent},
            {path: 'top-rated', component: SeriesTopRatedComponent},
            {path: 'most-popular', component: SeriesMostPopularComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(seriesRoutes)],
    exports: [RouterModule]
})

export class SeriesRoutingModule {
}