import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PagerService} from "./pager.service";

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.css']
})
export class PagerComponent {
    @Input() currentPage: number;
    @Input() totalPages: number;

    constructor(private pagerService: PagerService, private route: ActivatedRoute, private router: Router) {
    }

    setPage(page: number) {
        this.pagerService.page = page;
        this.router.navigate([{ page: page }], {relativeTo: this.route})
            .catch(err => console.error(err));
    }
}