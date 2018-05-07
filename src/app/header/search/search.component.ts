import {Component, EventEmitter, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {SearchService} from "./search.service";
import {of} from "rxjs/observable/of";
import 'rxjs/Rx';
import {Result} from "./result.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    results: Result[] = [];
    model: any;
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private http: HttpClient, private searchService: SearchService, private router: Router) {}

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
                this.searchService.search(term)
                    .do(() => this.searchFailed = false)
                    .catch(() => {
                        this.searchFailed = true;
                        return Observable.of([]);
                    }))
            .do(() => this.searching = false);

    onSelect($event: any) {
        $event.preventDefault();
        if ($event.item.media_type == 'movie') {
            this.router.navigate(['/movies', 'movie', $event.item.id]);
        } else {
            this.router.navigate(['/series', 'serie', $event.item.id]);
        }
    }
}