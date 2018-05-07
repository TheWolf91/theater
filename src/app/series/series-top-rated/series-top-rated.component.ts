import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PagerService} from "../../pager/pager.service";
import {SerieService} from "../serie.service";
import {Serie} from "../serie.model";

@Component({
    selector: 'app-series-top-rated',
    templateUrl: '../series-list-layout.html'
})
export class SeriesTopRatedComponent {
    private series: Serie[] = [];

    constructor(private serieService: SerieService, private pagerService: PagerService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['page']) {
                this.pagerService.page = param['page'];
                this.onTopRated();
            } else {
                this.pagerService.page = 1;
                this.onTopRated();
            }
        })
    }

    onTopRated() {
        this.series = [];
        this.serieService.getTopRated()
            .subscribe((serie: Serie) => this.series.push(this.serieService.serieFactory(serie)));
        console.log(this.series);
    }
}