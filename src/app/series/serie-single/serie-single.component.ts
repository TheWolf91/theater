import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Serie} from "../serie.model";
import {SerieService} from "../serie.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgTemplateOutlet} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-serie-single',
    templateUrl: './serie-single.component.html'
})
export class SerieSingleComponent {
    serie: Serie;
    inLikes: boolean = false;
    inFavourites: boolean = false;
    @Input() trailer: any;
    closeResult: string;
    error: boolean = false;
    message: string;

    constructor(
        private serieService: SerieService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer
    ) {
        this.route.params.subscribe(param => {
            if (param['id']) {
                this.serieService.getSerie(param['id'])
                    .catch(err => {
                        router.navigate(['/on-the-air']);
                        return Observable.empty();
                    })
                    .subscribe(item => {
                        this.serie = this.serieService.serieFactory(item);
                        this.isInLikes();
                        this.isInFavourites();
                    });
            }
        })
    }

    isInLikes() {
        this.serieService.getLike(this.serie)
            .catch(err => Observable.empty())
            .subscribe((res: boolean) => this.inLikes = res);
    }

    isInFavourites() {
        this.serieService.getFavourite(this.serie)
            .catch(err => Observable.empty())
            .subscribe((res: boolean) => this.inFavourites = res);
    }

    onFavourite() {
        this.serieService.setFavourite(this.serie)
            .catch(err => {
                if (err['error'] === 'Unauthorized') {
                    this.router.navigate(['user', 'signin']);
                }
                this.message = err['error']['error'];
                this.error = true;
                setTimeout(() => {
                    this.message = null;
                    this.error = false;
                }, 4000);
                return Observable.empty();
            })
            .subscribe(res => {
                this.inFavourites = true;
                this.message = res['title'];
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            });
    }

    onLike() {
        this.serieService.setLike(this.serie)
            .catch(err => {
                if (err['error'] === 'Unauthorized') {
                    this.router.navigate(['user', 'signin']);
                }
                this.message = err['error']['error'];
                this.error = true;
                setTimeout(() => {
                    this.message = null;
                    this.error = false;
                }, 4000);
                return Observable.empty();
            })
            .subscribe(res => {
                this.inLikes = true;
                this.message = res['title'];
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            });
    }

    onRemoveFavourite() {
        this.serieService.removeFavourite(this.serie)
            .catch(err => {
                if (err['error'] === 'Unauthorized') {
                    this.router.navigate(['user', 'signin']);
                }
                return Observable.empty();
            })
            .subscribe(res => {
                this.message = res['title'];
                this.inFavourites = false;
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            }
        );
    }

    onRemoveLike() {
        this.serieService.removeLike(this.serie)
            .catch(err => {
                if (err['error'] === 'Unauthorized') {
                    this.router.navigate(['user', 'signin']);
                }
                return Observable.empty();
            })
            .subscribe(res => {
                this.message = res['title'];
                this.inLikes = false;
                setTimeout(() => {
                    this.message = null;
                }, 4000);
            }
        );
    }

    openVerticallyCentered(content: NgTemplateOutlet) {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.serie.videos['results'][0]['key']}`);
        this.modalService.open(content, {centered: true, size: "lg"});
    }
}