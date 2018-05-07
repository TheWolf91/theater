import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
    {path: 'series', loadChildren: './series/series.module#SeriesModule'},
    {path: '**', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}