import {Component} from "@angular/core";
import {Movie} from "../movie.model";
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";
import {PagerService} from "../../pager/pager.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-movies-latest',
    templateUrl: '../movies-list-layout.html'
})
export class MoviesLatestComponent {
    private movies: Movie[] = [];

    constructor(private movieService: MovieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page'] && param['page'] >= 1) {
                this.pagerService.page = param['page'];
                this.onLatest();
            } else {
                this.pagerService.page = 1;
                this.onLatest();
            }
        })
    }

    onLatest() {
        this.movies = [];
        this.movieService.getLatest()
            .catch (err => {
                return Observable.empty();
            })
            .subscribe((movie: Movie) => this.movies.push(this.movieService.movieFactory(movie)));
    }
}