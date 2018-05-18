(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./src/app/pager/pager.component.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/app/pager/pager.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination {\r\n    margin-top: 20px;\r\n}\r\n\r\n.pagination > li > a {\r\n    background-color: #534b4e !important;\r\n}\r\n\r\n.page-item {\r\n    border-radius: 20%;\r\n}\r\n\r\n.page-item > a {\r\n    background-color: #393134;\r\n    color: #9c9195;\r\n}\r\n\r\n.page-item > a:hover {\r\n    color: white;\r\n}\r\n\r\n.page-link {\r\n    border: unset;\r\n\r\n}\r\n\r\n.page-link:focus {\r\n    box-shadow: unset;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./src/app/pager/pager.component.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./src/app/pager/pager.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./pager.component.css */ "./node_modules/css-loader/index.js!./src/app/pager/pager.component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/app/movies/movie-single/movie-single.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movie-single/movie-single.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"single-container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n                <div class=\"poster-image sticky\">\r\n                    <img src=\"{{movie?.poster_path? 'https://image.tmdb.org/t/p/w342/' + movie.poster_path : 'http://via.placeholder.com/342x513?text=No%20Poster%20Image'}}\"\r\n                         alt=\"Poster\">\r\n                </div>\r\n                <div class=\"poster-buttons\" *ngIf=\"movie?.videos['results'].length != 0\">\r\n                    <div class=\"btn-transform transform-vertical red\">\r\n                        <div (click)=\"openVerticallyCentered(content)\" class=\"youtube item item-1 redbtn\">Watch Trailer</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n                <div class=\"main-content\">\r\n                    <h1 class=\"title\">{{movie?.title}}</h1>\r\n\r\n                    <div class=\"social-btn\">\r\n                        <a href=\"#\" class=\"parent-btn\"><i class=\"fa fa-heart\"></i>&nbsp;Add to Favorite</a>\r\n                        <a href=\"#\" class=\"parent-btn\"><i class=\"fa fa-thumbs-up\"></i>&nbsp;Like</a>\r\n                    </div>\r\n\r\n                    <div class=\"rating-single\">\r\n                        <div class=\"rate\">\r\n                            <i class=\"fa fa-star\"></i>\r\n                            <p><span>{{movie?.vote_average}}</span> /10<br>\r\n                                <span class=\"avrg\">{{movie?.vote_count}} Votes</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"info\">\r\n                        <div class=\"content\">\r\n                            <div class=\"overview\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Overview</h4>\r\n                                        </div>\r\n                                        <p>{{movie?.overview}}</p>\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Cast</h4>\r\n                                        </div>\r\n                                        <div class=\"cast-item\" *ngFor=\"let cast of movie?.credits['cast'] | slice:0:7\">\r\n                                            <div class=\"cast-it\">\r\n                                                <div class=\"cast-left\">\r\n                                                    <img src=\"{{cast['profile_path']? 'https://image.tmdb.org/t/p/w45' + cast['profile_path'] : 'http://via.placeholder.com/45x45?text=No%20Profile%20Image'}}\"\r\n                                                         alt=\"Actor picture\">\r\n                                                    <p class=\"actor\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                                                       title=\"{{cast['name']}}\">&nbsp;{{cast['name'].length > 20 ? (cast['name'] | slice:0:20) + '...' : cast['name']}}</p>\r\n                                                </div>\r\n                                                <p class=\"character\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{cast['character']}}\"> as {{cast['character'].length > 20 ? (cast['character'].indexOf('/') > 0 ? cast['character'].substring(0, cast['character'].indexOf('/')) : (cast['character'] | slice:0:20) + '...') : cast['character']}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 col-xs-12 col-sm-12\">\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Info</h4>\r\n                                        </div>\r\n                                        <div class=\"sb-it\" *ngIf=\"movie?.homepage != null\">\r\n                                            <p>\r\n                                                <a href=\"{{movie.homepage}}\">Homepage</a>\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Director: </h6>\r\n                                            <p>{{movie?.credits['crew'][1]['name']}}</p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Genres:</h6>\r\n                                            <p><span *ngFor=\"let genre of movie?.genres; let i = index\">\r\n                                                {{genre['name']}}<span *ngIf=\"i < movie.genres.length - 1\">, </span>\r\n                                            </span></p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Release</h6>\r\n                                            <p>{{movie?.release_date}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Trailer</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <iframe width=\"100%\" height=\"315\" [src]=\"trailer\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>";

/***/ }),

/***/ "./src/app/movies/movie-single/movie-single.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/movies/movie-single/movie-single.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__(/*! ../movie.service */ "./src/app/movies/movie.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var MovieSingleComponent = /** @class */ (function () {
    function MovieSingleComponent(movieService, route, router, modalService, sanitizer) {
        var _this = this;
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.route.params.subscribe(function (param) {
            if (param['id']) {
                _this.movieService.getMovie(param['id'])
                    .catch(function (err) {
                    router.navigate(['/latest']);
                    return Observable_1.Observable.empty();
                })
                    .subscribe(function (item) { return _this.movie = _this.movieService.movieFactory(item); });
            }
        });
    }
    MovieSingleComponent.prototype.openVerticallyCentered = function (content) {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.movie.videos['results'][0]['key']);
        this.modalService.open(content, { centered: true, size: "lg" });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MovieSingleComponent.prototype, "trailer", void 0);
    MovieSingleComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-single',
            template: __webpack_require__(/*! ./movie-single.component.html */ "./src/app/movies/movie-single/movie-single.component.html")
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.ActivatedRoute,
            router_1.Router,
            ng_bootstrap_1.NgbModal,
            platform_browser_1.DomSanitizer])
    ], MovieSingleComponent);
    return MovieSingleComponent;
}());
exports.MovieSingleComponent = MovieSingleComponent;


/***/ }),

/***/ "./src/app/movies/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/movies/movie.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Movie = /** @class */ (function () {
    function Movie(id, title, vote_count, vote_average, original_language, poster_path, backdrop_path, runtime, credits, genres, adult, overview, release_date, homepage, videos) {
        this.id = id;
        this.title = title;
        this.vote_count = vote_count;
        this.vote_average = vote_average;
        this.original_language = original_language;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.runtime = runtime;
        this.credits = credits;
        this.genres = genres;
        this.adult = adult;
        this.overview = overview;
        this.release_date = release_date;
        this.homepage = homepage;
        this.videos = videos;
    }
    return Movie;
}());
exports.Movie = Movie;


/***/ }),

/***/ "./src/app/movies/movie.service.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movie.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
__webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
var movie_model_1 = __webpack_require__(/*! ./movie.model */ "./src/app/movies/movie.model.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var pager_service_1 = __webpack_require__(/*! ../pager/pager.service */ "./src/app/pager/pager.service.ts");
var MovieService = /** @class */ (function () {
    function MovieService(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        this.api_key = "b90f2062e134afc5faff86358be3902e";
        this.discoverQuery = "https://api.themoviedb.org/3/discover/movie";
        this.singleMovieQuery = "https://api.themoviedb.org/3/movie";
    }
    MovieService.prototype.getLatest = function () {
        var _this = this;
        console.log('GETLATEST CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'popularity.desc',
            include_adult: 'false',
            include_video: 'false',
            'primary_release_date.lte': this.getToday(),
            'primary_release_date.gte': this.getOneMonthAgo(),
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.discoverQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (movies) { return Observable_1.Observable.from(movies); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    MovieService.prototype.getTopRated = function () {
        var _this = this;
        console.log('GET TOP RATED CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'vote_average.desc',
            include_adult: 'false',
            include_video: 'false',
            'vote_average.gte': '6',
            'vote_count.gte': '1500',
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.discoverQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (movies) { return Observable_1.Observable.from(movies); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    MovieService.prototype.getMostVoted = function () {
        var _this = this;
        console.log('GET MOST VOTED CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            sort_by: 'vote_count.desc',
            include_adult: 'false',
            include_video: 'false',
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.discoverQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (movies) { return Observable_1.Observable.from(movies); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    MovieService.prototype.getMovie = function (id) {
        var params = {
            api_key: this.api_key,
            language: 'en',
            append_to_response: 'videos,credits'
        };
        return this.http.get(this.singleMovieQuery + "/" + id, { params: params })
            .map(function (res) { return res; })
            .catch(function (err) { return Observable_1.Observable.throw("Movie not found"); });
    };
    MovieService.prototype.movieFactory = function (item) {
        return new movie_model_1.Movie(item.id, item.title, item.vote_count, item.vote_average, item.original_language, item.poster_path, item.backdrop_path, item.runtime, item.credits, item.genres, item.adult, item.overview, item.release_date, item.homepage ? item.homepage : "", item.videos);
    };
    MovieService.prototype.getToday = function () {
        var date = new Date();
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    MovieService.prototype.getOneMonthAgo = function () {
        var date = new Date();
        return (date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()) + "-" + (date.getMonth() === 0 ? date.getMonth() + 12 : date.getMonth()) + "-" + date.getDate();
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, pager_service_1.PagerService])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;


/***/ }),

/***/ "./src/app/movies/movies-latest/movies-latest.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movies-latest/movies-latest.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__(/*! ../movie.service */ "./src/app/movies/movie.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var MoviesLatestComponent = /** @class */ (function () {
    function MoviesLatestComponent(movieService, pagerService, route) {
        var _this = this;
        this.movieService = movieService;
        this.pagerService = pagerService;
        this.route = route;
        this.movies = [];
        this.route.params.subscribe(function (param) {
            if (param['page']) {
                _this.pagerService.page = param['page'];
                _this.onLatest();
            }
            else {
                _this.pagerService.page = 1;
                _this.onLatest();
            }
        });
    }
    MoviesLatestComponent.prototype.onLatest = function () {
        var _this = this;
        this.movies = [];
        this.movieService.getLatest()
            .catch(function (err) {
            return Observable_1.Observable.empty();
        })
            .subscribe(function (movie) { return _this.movies.push(_this.movieService.movieFactory(movie)); });
        console.log(this.movies);
    };
    MoviesLatestComponent = __decorate([
        core_1.Component({
            selector: 'app-movies-latest',
            template: __webpack_require__(/*! ../movies-list-layout.html */ "./src/app/movies/movies-list-layout.html")
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], MoviesLatestComponent);
    return MoviesLatestComponent;
}());
exports.MoviesLatestComponent = MoviesLatestComponent;


/***/ }),

/***/ "./src/app/movies/movies-list-layout.html":
/*!************************************************!*\
  !*** ./src/app/movies/movies-list-layout.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"row list\">\r\n        <div class=\"col-lg-3 col-md-6\" *ngFor=\"let movie of movies\">\r\n            <a [routerLink]=\"['/movies', 'movie', movie.id]\" class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top poster\"\r\n                     src=\"{{movie.poster_path? 'https://image.tmdb.org/t/p/w300' + movie.poster_path: 'http://via.placeholder.com/300x450/ffffff/00000?text=No+Poster'}}\"\r\n                     alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-text\">\r\n                        <div class=\"title\"><span>{{movie.title}}</span></div>\r\n                        <div class=\"rating\"><i class=\"fa fa-star\" style=\"color: yellow;\"></i> <span><b>{{movie.vote_average}}</b></span></div>\r\n                        <div class=\"release\">Release: <span><b>{{movie.release_date}}</b></span></div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <app-pager [currentPage]=\"pagerService.page\"\r\n               [totalPages]=\"pagerService.totalPages\"\r\n    ></app-pager>\r\n</div>";

/***/ }),

/***/ "./src/app/movies/movies-most-voted/movies-most-voted.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/movies/movies-most-voted/movies-most-voted.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var movie_service_1 = __webpack_require__(/*! ../movie.service */ "./src/app/movies/movie.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var MoviesMostVotedComponent = /** @class */ (function () {
    function MoviesMostVotedComponent(movieService, pagerService, route) {
        var _this = this;
        this.movieService = movieService;
        this.pagerService = pagerService;
        this.route = route;
        this.movies = [];
        this.route.params.subscribe(function (param) {
            if (param['page']) {
                _this.pagerService.page = param['page'];
                _this.onMostVoted();
            }
            else {
                _this.pagerService.page = 1;
                _this.onMostVoted();
            }
        });
    }
    MoviesMostVotedComponent.prototype.onMostVoted = function () {
        var _this = this;
        this.movies = [];
        this.movieService.getMostVoted()
            .catch(function (err) {
            return Observable_1.Observable.empty();
        })
            .subscribe(function (movie) { return _this.movies.push(_this.movieService.movieFactory(movie)); });
    };
    MoviesMostVotedComponent = __decorate([
        core_1.Component({
            selector: 'app-movies-most-voted',
            template: __webpack_require__(/*! ../movies-list-layout.html */ "./src/app/movies/movies-list-layout.html")
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], MoviesMostVotedComponent);
    return MoviesMostVotedComponent;
}());
exports.MoviesMostVotedComponent = MoviesMostVotedComponent;


/***/ }),

/***/ "./src/app/movies/movies-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var movies_component_1 = __webpack_require__(/*! ./movies.component */ "./src/app/movies/movies.component.ts");
var movies_latest_component_1 = __webpack_require__(/*! ./movies-latest/movies-latest.component */ "./src/app/movies/movies-latest/movies-latest.component.ts");
var movies_top_rated_component_1 = __webpack_require__(/*! ./movies-top-rated/movies-top-rated.component */ "./src/app/movies/movies-top-rated/movies-top-rated.component.ts");
var movies_most_voted_component_1 = __webpack_require__(/*! ./movies-most-voted/movies-most-voted.component */ "./src/app/movies/movies-most-voted/movies-most-voted.component.ts");
var movie_single_component_1 = __webpack_require__(/*! ./movie-single/movie-single.component */ "./src/app/movies/movie-single/movie-single.component.ts");
var moviesRoutes = [
    {
        path: '', component: movies_component_1.MoviesComponent, children: [
            { path: '', redirectTo: 'latest', pathMatch: 'full' },
            { path: 'movie/:id', component: movie_single_component_1.MovieSingleComponent },
            { path: 'latest', component: movies_latest_component_1.MoviesLatestComponent },
            { path: 'top-rated', component: movies_top_rated_component_1.MoviesTopRatedComponent },
            { path: 'most-voted', component: movies_most_voted_component_1.MoviesMostVotedComponent }
        ]
    }
];
var MoviesRoutingModule = /** @class */ (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(moviesRoutes)],
            exports: [router_1.RouterModule]
        })
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
exports.MoviesRoutingModule = MoviesRoutingModule;


/***/ }),

/***/ "./src/app/movies/movies-top-rated/movies-top-rated.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/movies/movies-top-rated/movies-top-rated.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__(/*! ../movie.service */ "./src/app/movies/movie.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var MoviesTopRatedComponent = /** @class */ (function () {
    function MoviesTopRatedComponent(movieService, pagerService, route) {
        var _this = this;
        this.movieService = movieService;
        this.pagerService = pagerService;
        this.route = route;
        this.movies = [];
        this.route.params.subscribe(function (param) {
            if (param['page']) {
                _this.pagerService.page = param['page'];
                _this.onTopRated();
            }
            else {
                _this.pagerService.page = 1;
                _this.onTopRated();
            }
        });
    }
    MoviesTopRatedComponent.prototype.onTopRated = function () {
        var _this = this;
        this.movies = [];
        this.movieService.getTopRated()
            .catch(function (err) {
            return Observable_1.Observable.empty();
        })
            .subscribe(function (movie) { return _this.movies.push(_this.movieService.movieFactory(movie)); });
    };
    MoviesTopRatedComponent = __decorate([
        core_1.Component({
            selector: 'app-movies-top-rated',
            template: __webpack_require__(/*! ../movies-list-layout.html */ "./src/app/movies/movies-list-layout.html")
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], MoviesTopRatedComponent);
    return MoviesTopRatedComponent;
}());
exports.MoviesTopRatedComponent = MoviesTopRatedComponent;


/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>";

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
    }
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html")
        })
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;


/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var movie_service_1 = __webpack_require__(/*! ./movie.service */ "./src/app/movies/movie.service.ts");
var movies_latest_component_1 = __webpack_require__(/*! ./movies-latest/movies-latest.component */ "./src/app/movies/movies-latest/movies-latest.component.ts");
var movies_most_voted_component_1 = __webpack_require__(/*! ./movies-most-voted/movies-most-voted.component */ "./src/app/movies/movies-most-voted/movies-most-voted.component.ts");
var movies_top_rated_component_1 = __webpack_require__(/*! ./movies-top-rated/movies-top-rated.component */ "./src/app/movies/movies-top-rated/movies-top-rated.component.ts");
var movies_routing_module_1 = __webpack_require__(/*! ./movies-routing.module */ "./src/app/movies/movies-routing.module.ts");
var movies_component_1 = __webpack_require__(/*! ./movies.component */ "./src/app/movies/movies.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var movie_single_component_1 = __webpack_require__(/*! ./movie-single/movie-single.component */ "./src/app/movies/movie-single/movie-single.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var pager_module_1 = __webpack_require__(/*! ../pager/pager.module */ "./src/app/pager/pager.module.ts");
var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [
                movies_routing_module_1.MoviesRoutingModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                common_1.CommonModule,
                pager_module_1.PagerModule
            ],
            declarations: [
                movies_component_1.MoviesComponent,
                movie_single_component_1.MovieSingleComponent,
                movies_latest_component_1.MoviesLatestComponent,
                movies_top_rated_component_1.MoviesTopRatedComponent,
                movies_most_voted_component_1.MoviesMostVotedComponent,
            ],
            providers: [
                movie_service_1.MovieService
            ]
        })
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;


/***/ }),

/***/ "./src/app/pager/pager.component.css":
/*!*******************************************!*\
  !*** ./src/app/pager/pager.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../node_modules/style-loader!../../../node_modules/css-loader!./pager.component.css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./src/app/pager/pager.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/pager/pager.component.html":
/*!********************************************!*\
  !*** ./src/app/pager/pager.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-pagination *ngIf=\"totalPages\" class=\"d-flex justify-content-center dark\"\r\n                [collectionSize]=\"totalPages > 1000 ? 1000 : totalPages\"\r\n                [(page)]=\"currentPage\"\r\n                [maxSize]=\"5\"\r\n                [rotate]=\"true\"\r\n                [ellipses]=\"false\"\r\n                [boundaryLinks]=\"true\"\r\n                (pageChange)=\"setPage($event)\"\r\n>\r\n</ngb-pagination>";

/***/ }),

/***/ "./src/app/pager/pager.component.ts":
/*!******************************************!*\
  !*** ./src/app/pager/pager.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var pager_service_1 = __webpack_require__(/*! ./pager.service */ "./src/app/pager/pager.service.ts");
var PagerComponent = /** @class */ (function () {
    function PagerComponent(pagerService, route, router) {
        this.pagerService = pagerService;
        this.route = route;
        this.router = router;
    }
    PagerComponent.prototype.setPage = function (page) {
        this.pagerService.page = page;
        this.router.navigate([{ page: page }], { relativeTo: this.route })
            .catch(function (err) { return console.error(err); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "currentPage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "totalPages", void 0);
    PagerComponent = __decorate([
        core_1.Component({
            selector: 'app-pager',
            template: __webpack_require__(/*! ./pager.component.html */ "./src/app/pager/pager.component.html"),
            styles: [__webpack_require__(/*! ./pager.component.css */ "./src/app/pager/pager.component.css")]
        }),
        __metadata("design:paramtypes", [pager_service_1.PagerService, router_1.ActivatedRoute, router_1.Router])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;


/***/ }),

/***/ "./src/app/pager/pager.module.ts":
/*!***************************************!*\
  !*** ./src/app/pager/pager.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var pager_component_1 = __webpack_require__(/*! ./pager.component */ "./src/app/pager/pager.component.ts");
var pager_service_1 = __webpack_require__(/*! ./pager.service */ "./src/app/pager/pager.service.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbPaginationModule
            ],
            exports: [
                pager_component_1.PagerComponent
            ],
            declarations: [
                pager_component_1.PagerComponent
            ],
            providers: [
                pager_service_1.PagerService
            ]
        })
    ], PagerModule);
    return PagerModule;
}());
exports.PagerModule = PagerModule;


/***/ }),

/***/ "./src/app/pager/pager.service.ts":
/*!****************************************!*\
  !*** ./src/app/pager/pager.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var PagerService = /** @class */ (function () {
    function PagerService() {
        this._page = 1;
        this._totalPages = 0;
    }
    Object.defineProperty(PagerService.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (page) {
            this._page = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerService.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (totalPages) {
            this._totalPages = totalPages;
        },
        enumerable: true,
        configurable: true
    });
    PagerService = __decorate([
        core_1.Injectable()
    ], PagerService);
    return PagerService;
}());
exports.PagerService = PagerService;


/***/ })

}]);
//# sourceMappingURL=0.chunk.js.map