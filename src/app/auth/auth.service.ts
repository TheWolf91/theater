import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user.model";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    }

    signup(user: User) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-type', 'application/json');

        return this.http.post('https://angular-theater.herokuapp.com/api/user/signup', user, {headers: headers});
    }

    signin(user: User) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-type', 'application/json');

        return this.http.post('https://angular-theater.herokuapp.com/api/user/signin', user, {headers: headers});
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isLoggedIn() {
        let token;
        if (this.getToken()) {
            token = this.getToken();
        }
        if (!this.jwtHelper.isTokenExpired(token)) {
            return true;
        } else {
            this.logout();
            return false;
        }
    }

    logout() {
        localStorage.clear();
    }
}