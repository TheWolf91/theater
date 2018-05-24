import {Component, Input} from "@angular/core";
import {Movie} from "../movie.model";
import {MovieService} from "../movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgTemplateOutlet} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-movie-single',
    templateUrl: './movie-single.component.html'
})
export class MovieSingleComponent {
    movie: Movie;
    inLikes: boolean = false;
    inFavourites: boolean = false;
    @Input() trailer: any;
    closeResult: string;
    error: boolean = false;
    message: string;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer
    ) {
        this.route.params.subscribe(param => {
            if (param['id']) {
                this.movieService.getMovie(param['id'])
                    .catch(err => {
                        router.navigate(['/latest']);
                        return Observable.empty();
                    })
                    .subscribe(item => {
                        this.movie = this.movieService.movieFactory(item);
                        this.isInLikes();
                        this.isInFavourites();
                    });
            }
        });
    }

    isInLikes() {
        this.movieService.getLike(this.movie)
            .catch(err => Observable.empty())
            .subscribe((res: boolean) => this.inLikes = res);
    }

    isInFavourites() {
        this.movieService.getFavourite(this.movie)
            .catch(err => Observable.empty())
            .subscribe((res: boolean) => this.inFavourites = res);
    }

    onFavourite() {
        this.movieService.setFavourite(this.movie)
            .catch(err => {
                this.message = err['error']['error'];
                this.error = true;
                setTimeout(() => {
                    this.message = null;
                    this.error = false;
                }, 4000);
                return Observable.empty();
            })
            .subscribe(res => {
                this.message = res['title'];
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            });
    }

    onLike() {
        this.movieService.setLike(this.movie)
            .catch(err => {
                this.message = err['error']['error'];
                this.error = true;
                setTimeout(() => {
                    this.message = null;
                    this.error = false;
                }, 4000);
                return Observable.empty();
            })
            .subscribe(res => {
                this.message = res['title'];
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            });
    }

    openVerticallyCentered(content: NgTemplateOutlet) {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.movie.videos['results'][0]['key']}`);
        this.modalService.open(content, {centered: true, size: "lg"});
    }
}