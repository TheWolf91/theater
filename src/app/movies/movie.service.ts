import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Movie} from "./movie.model";
import {Observable} from "rxjs/Observable";
import {PagerService} from "../pager/pager.service";

@Injectable()
export class MovieService {
    private api_key = "b90f2062e134afc5faff86358be3902e";
    private discoverQuery = "https://api.themoviedb.org/3/discover/movie";
    private singleMovieQuery = "https://api.themoviedb.org/3/movie";

    constructor(private http: HttpClient, private pagerService: PagerService) {
    }

    getLatest() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'popularity.desc',
            include_adult: 'false',
            include_video: 'false',
            'primary_release_date.lte': this.getToday(),
            'primary_release_date.gte': this.getOneMonthAgo(),
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.discoverQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(movies => Observable.from(movies))
            .catch(err => Observable.throw(err));
    }

    getTopRated() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'vote_average.desc',
            include_adult: 'false',
            include_video: 'false',
            'vote_average.gte': '6',
            'vote_count.gte': '1500',
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.discoverQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(movies => Observable.from(movies))
            .catch(err => Observable.throw(err));
    }

    getMostVoted() {
        const params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'vote_count.desc',
            include_adult: 'false',
            include_video: 'false',
            page: this.pagerService.page.toString()
        };

        return this.http.get(this.discoverQuery, {params})
            .map(res => {
                this.pagerService.totalPages = res['total_pages'];
                return res['results'];
            })
            .switchMap(movies => Observable.from(movies))
            .catch(err => Observable.throw(err));
    }

    getMovie(id: number) {
        const params = {
            api_key: this.api_key,
            language: 'en',
            append_to_response: 'videos,credits'
        };

        return this.http.get(`${this.singleMovieQuery}/${id}`, {params})
            .map(res => res)
            .catch(err => Observable.throw("Movie not found"));
    }

    getLike(movie: Movie) {
        return this.http.post('http://localhost:3000/api/library/alreadyliked',
            {
                mediaId: movie.id.toString(),
                mediaType: 'movie'
            }
        );
    }

    getFavourite(movie: Movie) {
        return this.http.post('http://localhost:3000/api/library/alreadyfavourite',
            {
                mediaId: movie.id.toString(),
                mediaType: 'movie'
            }
        );
    }

    setFavourite(movie: Movie) {
        return this.http.post('http://localhost:3000/api/library/favourites', {
            mediaId: movie.id.toString(),
            mediaType: 'movie',
            title: movie.title,
            poster: movie.poster_path
        });
    }

    setLike(movie: Movie) {
        return this.http.post('http://localhost:3000/api/library/likes', {
            mediaId: movie.id.toString(),
            mediaType: 'movie',
            title: movie.title,
            poster: movie.poster_path
        });
    }

    movieFactory(item: Movie): Movie {
        return new Movie(
            item.id,
            item.title,
            item.vote_count,
            item.vote_average,
            item.original_language,
            item.poster_path,
            item.backdrop_path,
            item.runtime,
            item.credits,
            item.genres,
            item.adult,
            item.overview,
            item.release_date,
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