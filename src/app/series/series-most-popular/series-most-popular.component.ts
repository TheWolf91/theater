import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PagerService} from "../../pager/pager.service";
import {SerieService} from "../serie.service";
import {Serie} from "../serie.model";

@Component({
    selector: 'app-series-most-popular',
    templateUrl: '../series-list-layout.html'
})
export class SeriesMostPopularComponent {
    private series: Serie[] = [];

    constructor(private serieService: SerieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page']) {
                this.pagerService.page = param['page'];
                this.onMostPopular();
            } else {
                this.pagerService.page = 1;
                this.onMostPopular();
            }
        })
    }

    onMostPopular() {
        this.series = [];
        this.serieService.getMostPopular()
            .subscribe((serie: Serie) => this.series.push(this.serieService.serieFactory(serie)));
        console.log(this.series);
    }
}