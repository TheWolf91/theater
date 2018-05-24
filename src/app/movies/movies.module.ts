import {NgModule} from "@angular/core";
import {MovieService} from "./movie.service";
import {MoviesLatestComponent} from "./movies-latest/movies-latest.component";
import {MoviesMostVotedComponent} from "./movies-most-voted/movies-most-voted.component";
import {MoviesTopRatedComponent} from "./movies-top-rated/movies-top-rated.component";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MoviesComponent} from "./movies.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MovieSingleComponent} from "./movie-single/movie-single.component";
import {RouterModule} from "@angular/router";
import {PagerComponent} from "../pager/pager.component";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {PagerService} from "../pager/pager.service";
import {PagerModule} from "../pager/pager.module";
import {JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
    imports: [
        MoviesRoutingModule,
        RouterModule,
        CommonModule,
        PagerModule
    ],
    declarations: [
        MoviesComponent,
        MovieSingleComponent,
        MoviesLatestComponent,
        MoviesTopRatedComponent,
        MoviesMostVotedComponent,
    ],
    providers: [
        MovieService
    ]
})
export class MoviesModule {
    
}