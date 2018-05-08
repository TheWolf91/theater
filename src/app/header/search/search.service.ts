import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchService {
    private api_key = "b90f2062e134afc5faff86358be3902e";
    private searchQuery: string = "https://api.themoviedb.org/3/search/multi";

    constructor(private http: HttpClient) {}

    search(term: string): Observable<any> {
        const params = {
            api_key: this.api_key,
            include_adult: 'false',
            language: 'en',
            query: term
        };

        if (term === '') {
            return of([]);
        }

        return this.http
            .get(this.searchQuery, {params})
            .map(response => response['results'].slice(0, 8));
    }

}