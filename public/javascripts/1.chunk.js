(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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


/***/ }),

/***/ "./src/app/series/serie-single/serie-single.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/series/serie-single/serie-single.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"single-container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n                <div class=\"poster-image sticky\">\r\n                    <img src=\"{{serie?.poster_path? 'https://image.tmdb.org/t/p/w342/' + serie.poster_path : 'http://via.placeholder.com/342x513?text=No%20Poster%20Image'}}\"\r\n                         alt=\"Poster\">\r\n                </div>\r\n                <div class=\"poster-buttons\" *ngIf=\"serie?.videos['results'].length != 0\">\r\n                    <div class=\"btn-transform transform-vertical red\">\r\n                        <div (click)=\"openVerticallyCentered(content)\" class=\"youtube item item-1 redbtn\">Watch Trailer</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n                <div class=\"main-content\">\r\n                    <h1 class=\"title\">{{serie?.name}}</h1>\r\n\r\n                    <div class=\"social-btn\">\r\n                        <a href=\"#\" class=\"parent-btn\"><i class=\"fa fa-heart\"></i>&nbsp;Add to Favorite</a>\r\n                        <a href=\"#\" class=\"parent-btn\"><i class=\"fa fa-thumbs-up\"></i>&nbsp;Like</a>\r\n                    </div>\r\n\r\n                    <div class=\"rating-single\">\r\n                        <div class=\"rate\">\r\n                            <i class=\"fa fa-star\"></i>\r\n                            <p><span>{{serie?.vote_average}}</span> /10<br>\r\n                                <span class=\"avrg\">{{serie?.vote_count}} Votes</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"info\">\r\n                        <div class=\"content\">\r\n                            <div class=\"overview\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Overview</h4>\r\n                                        </div>\r\n                                        <p>{{serie?.overview}}</p>\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Cast</h4>\r\n                                        </div>\r\n                                        <div class=\"cast-item\" *ngFor=\"let cast of serie?.credits['cast'] | slice:0:7\">\r\n                                            <div class=\"cast-it\">\r\n                                                <div class=\"cast-left\">\r\n                                                    <img src=\"{{cast['profile_path']? 'https://image.tmdb.org/t/p/w45' + cast['profile_path'] : 'http://via.placeholder.com/45x45?text=No%20Profile%20Image'}}\" alt=\"Actor picture\">\r\n                                                    <p class=\"actor\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{cast['name']}}\">&nbsp;{{cast['name'].length > 20 ? (cast['name'] | slice:0:20) + '...' : cast['name']}}</p>\r\n                                                </div>\r\n                                                <p class=\"character\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{cast['character']}}\"> as {{cast['character'].length > 20 ? (cast['character'].indexOf('/') > 0 ? cast['character'].substring(0, cast['character'].indexOf('/')) : (cast['character'] | slice:0:20) + '...') : cast['character']}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 col-xs-12 col-sm-12\">\r\n                                        <div class=\"title-hd-sm\">\r\n                                            <h4>Info</h4>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <p *ngIf=\"serie?.homepage != null\">\r\n                                                <a href=\"{{serie.homepage}}\">Homepage</a>\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Director: </h6>\r\n                                            <p *ngFor=\"let director of serie?.created_by\">\r\n                                                {{director['name']}}\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Genres:</h6>\r\n                                            <p><span *ngFor=\"let genre of serie?.genres; let i = index\">\r\n                                                {{genre['name']}}<span *ngIf=\"i < serie.genres.length - 1\">, </span>\r\n                                            </span></p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Seasons:</h6>\r\n                                            <p>{{serie?.number_of_seasons}}</p>\r\n                                            <h6>Episodes:</h6>\r\n                                            <p>{{serie?.number_of_episodes}}</p>\r\n                                            <h6 *ngIf=\"serie?.in_production\">In production</h6>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>First On The Air</h6>\r\n                                            <p>{{serie?.first_air_date}}</p>\r\n                                        </div>\r\n                                        <div class=\"sb-it\">\r\n                                            <h6>Episodes run-time:</h6>\r\n                                            <p>{{serie?.episode_run_time}} min</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Trailer</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <iframe width=\"100%\" height=\"315\" [src]=\"trailer\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>";

/***/ }),

/***/ "./src/app/series/serie-single/serie-single.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/series/serie-single/serie-single.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var serie_service_1 = __webpack_require__(/*! ../serie.service */ "./src/app/series/serie.service.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var SerieSingleComponent = /** @class */ (function () {
    function SerieSingleComponent(serieService, route, router, modalService, sanitizer) {
        var _this = this;
        this.serieService = serieService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.route.params.subscribe(function (param) {
            if (param['id']) {
                _this.serieService.getSerie(param['id'])
                    .catch(function (err) { return router.navigate(['/on-the-air']); })
                    .subscribe(function (item) { return _this.serie = _this.serieService.serieFactory(item); });
            }
        });
    }
    SerieSingleComponent.prototype.openVerticallyCentered = function (content) {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.serie.videos['results'][0]['key']);
        this.modalService.open(content, { centered: true, size: "lg" });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SerieSingleComponent.prototype, "trailer", void 0);
    SerieSingleComponent = __decorate([
        core_1.Component({
            selector: 'app-serie-single',
            template: __webpack_require__(/*! ./serie-single.component.html */ "./src/app/series/serie-single/serie-single.component.html")
        }),
        __metadata("design:paramtypes", [serie_service_1.SerieService,
            router_1.ActivatedRoute,
            router_1.Router,
            ng_bootstrap_1.NgbModal,
            platform_browser_1.DomSanitizer])
    ], SerieSingleComponent);
    return SerieSingleComponent;
}());
exports.SerieSingleComponent = SerieSingleComponent;


/***/ }),

/***/ "./src/app/series/serie.model.ts":
/*!***************************************!*\
  !*** ./src/app/series/serie.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Serie = /** @class */ (function () {
    function Serie(id, name, vote_count, vote_average, original_language, poster_path, backdrop_path, created_by, episode_run_time, number_of_episodes, number_of_seasons, seasons, in_production, credits, genres, adult, overview, first_air_date, last_air_date, homepage, videos) {
        this.id = id;
        this.name = name;
        this.vote_count = vote_count;
        this.vote_average = vote_average;
        this.original_language = original_language;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.created_by = created_by;
        this.episode_run_time = episode_run_time;
        this.number_of_episodes = number_of_episodes;
        this.number_of_seasons = number_of_seasons;
        this.seasons = seasons;
        this.in_production = in_production;
        this.credits = credits;
        this.genres = genres;
        this.adult = adult;
        this.overview = overview;
        this.first_air_date = first_air_date;
        this.last_air_date = last_air_date;
        this.homepage = homepage;
        this.videos = videos;
    }
    return Serie;
}());
exports.Serie = Serie;


/***/ }),

/***/ "./src/app/series/serie.service.ts":
/*!*****************************************!*\
  !*** ./src/app/series/serie.service.ts ***!
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
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var serie_model_1 = __webpack_require__(/*! ./serie.model */ "./src/app/series/serie.model.ts");
var pager_service_1 = __webpack_require__(/*! ../pager/pager.service */ "./src/app/pager/pager.service.ts");
__webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
var SerieService = /** @class */ (function () {
    function SerieService(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        this.api_key = "b90f2062e134afc5faff86358be3902e";
        this.onTheAirQuery = "https://api.themoviedb.org/3/tv/on_the_air";
        this.topRatedQuery = "https://api.themoviedb.org/3/tv/top_rated";
        this.mostPopularQuery = "https://api.themoviedb.org/3/tv/popular";
        this.singleSerieQuery = "https://api.themoviedb.org/3/tv";
    }
    SerieService.prototype.getOnTheAir = function () {
        var _this = this;
        console.log('GET ON THE AIR CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.onTheAirQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (series) { return Observable_1.Observable.from(series); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    SerieService.prototype.getTopRated = function () {
        var _this = this;
        console.log('GET TOP RATED CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.topRatedQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (movies) { return Observable_1.Observable.from(movies); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    SerieService.prototype.getMostPopular = function () {
        var _this = this;
        console.log('GET MOST POPULAR CHIAMATO');
        var params = {
            api_key: this.api_key,
            language: 'en',
            page: this.pagerService.page.toString()
        };
        return this.http.get(this.mostPopularQuery, { params: params })
            .map(function (res) {
            _this.pagerService.totalPages = res['total_pages'];
            return res['results'];
        })
            .switchMap(function (movies) { return Observable_1.Observable.from(movies); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    SerieService.prototype.getSerie = function (id) {
        var params = {
            api_key: this.api_key,
            language: 'en',
            append_to_response: 'videos,credits'
        };
        return this.http.get(this.singleSerieQuery + "/" + id, { params: params })
            .map(function (res) { return res; })
            .catch(function (err) { return Observable_1.Observable.throw("Movie not found"); });
    };
    SerieService.prototype.serieFactory = function (item) {
        return new serie_model_1.Serie(item.id, item.name, item.vote_count, item.vote_average, item.original_language, item.poster_path, item.backdrop_path, item.created_by, item.episode_run_time, item.number_of_episodes, item.number_of_seasons, item.seasons, item.in_production, item.credits, item.genres, item.adult, item.overview, item.first_air_date, item.last_air_date, item.homepage ? item.homepage : "", item.videos);
    };
    SerieService.prototype.getToday = function () {
        var date = new Date();
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };
    SerieService.prototype.getOneMonthAgo = function () {
        var date = new Date();
        return (date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()) + "-" + (date.getMonth() === 0 ? date.getMonth() + 12 : date.getMonth()) + "-" + date.getDate();
    };
    SerieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, pager_service_1.PagerService])
    ], SerieService);
    return SerieService;
}());
exports.SerieService = SerieService;


/***/ }),

/***/ "./src/app/series/series-list-layout.html":
/*!************************************************!*\
  !*** ./src/app/series/series-list-layout.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6\" *ngFor=\"let serie of series\">\r\n            <a [routerLink]=\"['/series', 'serie', serie.id]\" class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top poster\"\r\n                     src=\"{{serie.poster_path? 'https://image.tmdb.org/t/p/w300' + serie.poster_path: 'http://via.placeholder.com/300x450/ffffff/00000?text=No+Poster'}}\"\r\n                     alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-text\">\r\n                        <div class=\"title\"><span>{{serie.name}}</span></div>\r\n                        <div class=\"rating\"><i class=\"fa fa-star\" style=\"color: yellow;\"></i> <span>{{serie.vote_average}}</span></div>\r\n                        <div class=\"release\">First Air Date: <span>{{serie.first_air_date}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <app-pager [currentPage]=\"pagerService.page\"\r\n               [totalPages]=\"pagerService.totalPages\"\r\n    ></app-pager>\r\n</div>";

/***/ }),

/***/ "./src/app/series/series-most-popular/series-most-popular.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/series/series-most-popular/series-most-popular.component.ts ***!
  \*****************************************************************************/
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
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var serie_service_1 = __webpack_require__(/*! ../serie.service */ "./src/app/series/serie.service.ts");
var SeriesMostPopularComponent = /** @class */ (function () {
    function SeriesMostPopularComponent(serieService, pagerService, route) {
        var _this = this;
        this.serieService = serieService;
        this.pagerService = pagerService;
        this.route = route;
        this.series = [];
        this.route.params.subscribe(function (param) {
            if (param['page']) {
                _this.pagerService.page = param['page'];
                _this.onMostPopular();
            }
            else {
                _this.pagerService.page = 1;
                _this.onMostPopular();
            }
        });
    }
    SeriesMostPopularComponent.prototype.onMostPopular = function () {
        var _this = this;
        this.series = [];
        this.serieService.getMostPopular()
            .subscribe(function (serie) { return _this.series.push(_this.serieService.serieFactory(serie)); });
        console.log(this.series);
    };
    SeriesMostPopularComponent = __decorate([
        core_1.Component({
            selector: 'app-series-most-popular',
            template: __webpack_require__(/*! ../series-list-layout.html */ "./src/app/series/series-list-layout.html")
        }),
        __metadata("design:paramtypes", [serie_service_1.SerieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], SeriesMostPopularComponent);
    return SeriesMostPopularComponent;
}());
exports.SeriesMostPopularComponent = SeriesMostPopularComponent;


/***/ }),

/***/ "./src/app/series/series-on-the-air/series-on-the-air.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/series/series-on-the-air/series-on-the-air.component.ts ***!
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
var serie_service_1 = __webpack_require__(/*! ../serie.service */ "./src/app/series/serie.service.ts");
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var SeriesOnTheAirComponent = /** @class */ (function () {
    function SeriesOnTheAirComponent(serieService, pagerService, route) {
        var _this = this;
        this.serieService = serieService;
        this.pagerService = pagerService;
        this.route = route;
        this.series = [];
        this.route.params.subscribe(function (param) {
            if (param['page']) {
                _this.pagerService.page = param['page'];
                _this.onTheAir();
            }
            else {
                _this.pagerService.page = 1;
                _this.onTheAir();
            }
        });
    }
    SeriesOnTheAirComponent.prototype.onTheAir = function () {
        var _this = this;
        this.series = [];
        this.serieService.getOnTheAir()
            .subscribe(function (serie) { return _this.series.push(_this.serieService.serieFactory(serie)); });
        console.log(this.series);
    };
    SeriesOnTheAirComponent = __decorate([
        core_1.Component({
            selector: 'app-series-on-the-air',
            template: __webpack_require__(/*! ../series-list-layout.html */ "./src/app/series/series-list-layout.html")
        }),
        __metadata("design:paramtypes", [serie_service_1.SerieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], SeriesOnTheAirComponent);
    return SeriesOnTheAirComponent;
}());
exports.SeriesOnTheAirComponent = SeriesOnTheAirComponent;


/***/ }),

/***/ "./src/app/series/series-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/series/series-routing.module.ts ***!
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
var series_component_1 = __webpack_require__(/*! ./series.component */ "./src/app/series/series.component.ts");
var series_on_the_air_component_1 = __webpack_require__(/*! ./series-on-the-air/series-on-the-air.component */ "./src/app/series/series-on-the-air/series-on-the-air.component.ts");
var series_top_rated_component_1 = __webpack_require__(/*! ./series-top-rated/series-top-rated.component */ "./src/app/series/series-top-rated/series-top-rated.component.ts");
var series_most_popular_component_1 = __webpack_require__(/*! ./series-most-popular/series-most-popular.component */ "./src/app/series/series-most-popular/series-most-popular.component.ts");
var serie_single_component_1 = __webpack_require__(/*! ./serie-single/serie-single.component */ "./src/app/series/serie-single/serie-single.component.ts");
var seriesRoutes = [
    {
        path: '', component: series_component_1.SeriesComponent, children: [
            { path: '', redirectTo: 'latest', pathMatch: 'full' },
            { path: 'serie/:id', component: serie_single_component_1.SerieSingleComponent },
            { path: 'on-the-air', component: series_on_the_air_component_1.SeriesOnTheAirComponent },
            { path: 'top-rated', component: series_top_rated_component_1.SeriesTopRatedComponent },
            { path: 'most-popular', component: series_most_popular_component_1.SeriesMostPopularComponent }
        ]
    }
];
var SeriesRoutingModule = /** @class */ (function () {
    function SeriesRoutingModule() {
    }
    SeriesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(seriesRoutes)],
            exports: [router_1.RouterModule]
        })
    ], SeriesRoutingModule);
    return SeriesRoutingModule;
}());
exports.SeriesRoutingModule = SeriesRoutingModule;


/***/ }),

/***/ "./src/app/series/series-top-rated/series-top-rated.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/series/series-top-rated/series-top-rated.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var pager_service_1 = __webpack_require__(/*! ../../pager/pager.service */ "./src/app/pager/pager.service.ts");
var serie_service_1 = __webpack_require__(/*! ../serie.service */ "./src/app/series/serie.service.ts");
var SeriesTopRatedComponent = /** @class */ (function () {
    function SeriesTopRatedComponent(serieService, pagerService, route) {
        var _this = this;
        this.serieService = serieService;
        this.pagerService = pagerService;
        this.route = route;
        this.series = [];
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
    SeriesTopRatedComponent.prototype.onTopRated = function () {
        var _this = this;
        this.series = [];
        this.serieService.getTopRated()
            .subscribe(function (serie) { return _this.series.push(_this.serieService.serieFactory(serie)); });
        console.log(this.series);
    };
    SeriesTopRatedComponent = __decorate([
        core_1.Component({
            selector: 'app-series-top-rated',
            template: __webpack_require__(/*! ../series-list-layout.html */ "./src/app/series/series-list-layout.html")
        }),
        __metadata("design:paramtypes", [serie_service_1.SerieService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], SeriesTopRatedComponent);
    return SeriesTopRatedComponent;
}());
exports.SeriesTopRatedComponent = SeriesTopRatedComponent;


/***/ }),

/***/ "./src/app/series/series.component.html":
/*!**********************************************!*\
  !*** ./src/app/series/series.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>";

/***/ }),

/***/ "./src/app/series/series.component.ts":
/*!********************************************!*\
  !*** ./src/app/series/series.component.ts ***!
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
var SeriesComponent = /** @class */ (function () {
    function SeriesComponent() {
    }
    SeriesComponent = __decorate([
        core_1.Component({
            selector: 'app-series',
            template: __webpack_require__(/*! ./series.component.html */ "./src/app/series/series.component.html")
        })
    ], SeriesComponent);
    return SeriesComponent;
}());
exports.SeriesComponent = SeriesComponent;


/***/ }),

/***/ "./src/app/series/series.module.ts":
/*!*****************************************!*\
  !*** ./src/app/series/series.module.ts ***!
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
var serie_service_1 = __webpack_require__(/*! ./serie.service */ "./src/app/series/serie.service.ts");
var series_component_1 = __webpack_require__(/*! ./series.component */ "./src/app/series/series.component.ts");
var series_on_the_air_component_1 = __webpack_require__(/*! ./series-on-the-air/series-on-the-air.component */ "./src/app/series/series-on-the-air/series-on-the-air.component.ts");
var series_top_rated_component_1 = __webpack_require__(/*! ./series-top-rated/series-top-rated.component */ "./src/app/series/series-top-rated/series-top-rated.component.ts");
var series_most_popular_component_1 = __webpack_require__(/*! ./series-most-popular/series-most-popular.component */ "./src/app/series/series-most-popular/series-most-popular.component.ts");
var series_routing_module_1 = __webpack_require__(/*! ./series-routing.module */ "./src/app/series/series-routing.module.ts");
var serie_single_component_1 = __webpack_require__(/*! ./serie-single/serie-single.component */ "./src/app/series/serie-single/serie-single.component.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var pager_module_1 = __webpack_require__(/*! ../pager/pager.module */ "./src/app/pager/pager.module.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var SeriesModule = /** @class */ (function () {
    function SeriesModule() {
    }
    SeriesModule = __decorate([
        core_1.NgModule({
            imports: [
                series_routing_module_1.SeriesRoutingModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                common_1.CommonModule,
                pager_module_1.PagerModule
            ],
            declarations: [
                series_component_1.SeriesComponent,
                serie_single_component_1.SerieSingleComponent,
                series_on_the_air_component_1.SeriesOnTheAirComponent,
                series_top_rated_component_1.SeriesTopRatedComponent,
                series_most_popular_component_1.SeriesMostPopularComponent
            ],
            providers: [
                serie_service_1.SerieService
            ]
        })
    ], SeriesModule);
    return SeriesModule;
}());
exports.SeriesModule = SeriesModule;


/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map