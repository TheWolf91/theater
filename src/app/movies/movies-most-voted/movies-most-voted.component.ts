import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../movie.model";
import {MovieService} from "../movie.service";
import {PagerService} from "../../pager/pager.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-movies-most-voted',
    templateUrl: '../movies-list-layout.html'
})
export class MoviesMostVotedComponent {
    private movies: Movie[] = [];

    constructor(private movieService: MovieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page'] && param['page'] >= 1) {
                this.pagerService.page = param['page'];
                this.onMostVoted();
            } else {
                this.pagerService.page = 1;
                this.onMostVoted();
            }
        })
    }

    onMostVoted() {
        this.movies = [];
        this.movieService.getMostVoted()
            .catch(err => {
                return Observable.empty();
            })
            .subscribe((movie: Movie) => this.movies.push(this.movieService.movieFactory(movie)));
    }
}