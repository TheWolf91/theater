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
    @Input() trailer: any;
    closeResult: string;

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
                    .subscribe(item => this.serie = this.serieService.serieFactory(item));
            }
        })
    }

    openVerticallyCentered(content: NgTemplateOutlet) {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.serie.videos['results'][0]['key']}`);
        this.modalService.open(content, {centered: true, size: "lg"});
    }
}