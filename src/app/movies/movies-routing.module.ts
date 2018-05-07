import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./movies.component";
import {MoviesLatestComponent} from "./movies-latest/movies-latest.component";
import {MoviesTopRatedComponent} from "./movies-top-rated/movies-top-rated.component";
import {MoviesMostVotedComponent} from "./movies-most-voted/movies-most-voted.component";
import {MovieSingleComponent} from "./movie-single/movie-single.component";

const moviesRoutes: Routes = [
    {
        path: '', component: MoviesComponent, children: [
            {path: '', redirectTo: 'latest', pathMatch: 'full'},
            {path: 'movie/:id', component: MovieSingleComponent},
            {path: 'latest', component: MoviesLatestComponent},
            {path: 'top-rated', component: MoviesTopRatedComponent},
            {path: 'most-voted', component: MoviesMostVotedComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(moviesRoutes)],
    exports: [RouterModule]
})

export class MoviesRoutingModule {
}