import {Component} from "@angular/core";
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";
import {ActivatedRoute} from "@angular/router";
import {PagerService} from "../../pager/pager.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-movies-top-rated',
    templateUrl: '../movies-list-layout.html'
})
export class MoviesTopRatedComponent {
    private movies: Movie[] = [];

    constructor(private movieService: MovieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page'] && param['page'] >= 1) {
                this.pagerService.page = param['page'];
                this.onTopRated();
            } else {
                this.pagerService.page = 1;
                this.onTopRated();
            }
        })
    }

    onTopRated() {
        this.movies = [];
        this.movieService.getTopRated()
            .catch(err => {
                return Observable.empty();
            })
            .subscribe((movie: Movie) => this.movies.push(this.movieService.movieFactory(movie)));
    }
}