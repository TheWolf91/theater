import {Injectable} from "@angular/core";

@Injectable()
export class PagerService {
    private _page: number = 1;
    private _totalPages: number = 0;

    get page() {
        return this._page;
    }

    set page(page: number) {
        this._page = page;
    }

    get totalPages() {
        return this._totalPages;
    }

    set totalPages(totalPages: number) {
        this._totalPages = totalPages;
    }
}