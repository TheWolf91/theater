import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../movies/movie.model";
import {Serie} from "./serie.model";
import {PagerService} from "../pager/pager.service";
import 'rxjs/Rx';

@Injectable()
export class SerieService {
    private api_key = "b90f2062e134afc5faff86358be3902e";
    private onTheAirQuery = "https://api.themoviedb.org/3/tv/on_the_air";
    private topRatedQuery = "https://api.themoviedb.org/3/tv/top_rated";
    private mostPopularQuery = "https://api.themoviedb.org/3/tv/popular";
    private singleSerieQuery = "https://api.themoviedb.org/3/tv";

    constructor(private http: HttpClient, private pagerService: PagerService) {}

    getOnTheAir() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.onTheAirQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(series => Observable.from(series))
            .catch(err => Observable.throw(err));
    }

    getTopRated() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.topRatedQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(movies => Observable.from(movies))
            .catch(err => Observable.throw(err));
    }

    getMostPopular() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.mostPopularQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(movies => Observable.from(movies))
            .catch(err => Observable.throw(err));
    }

    getSerie(id: number) {
        const params = {
            api_key: this.api_key,
            language: 'en',
            append_to_response: 'videos,credits'
        };

        return this.http.get(`${this.singleSerieQuery}/${id}`, {params})
            .map(res => res)
            .catch(err => Observable.throw("Movie not found"));
    }

    serieFactory(item: Serie): Serie {
        return new Serie(
            item.id,
            item.name,
            item.vote_count,
            item.vote_average,
            item.original_language,
            item.poster_path,
            item.backdrop_path,
            item.created_by,
            item.episode_run_time,
            item.number_of_episodes,
            item.number_of_seasons,
            item.seasons,
            item.in_production,
            item.credits,
            item.genres,
            item.adult,
            item.overview,
            item.first_air_date,
            item.last_air_date,
            item.homepage ? item.homepage : "",
            item.videos
        );
    }

    private getToday(): string {
        let date = new Date();

        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    private getOneMonthAgo(): string {
        let date = new Date();

        return `${(date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear())}-${(date.getMonth() === 0 ? date.getMonth() + 12 : date.getMonth())}-${date.getDate()}`;
    }
}