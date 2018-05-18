import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user.model";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    signup(user: User) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-type', 'application/json');

        return this.http.post('http://localhost:3000/api/user/signup', user, {headers: headers}
        ).map(res => res);
    }

    signin(user: User) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-type', 'application/json');

        return this.http.post('http://localhost:3000/api/user/signin', user, {headers: headers})
    }

    public isLoggedIn() {
        if (this.jwtHelper.isTokenExpired(this.getToken())) {
            this.logout();
            return false
        }
        return true;
    }

    public isTokenExpired(): boolean {
        if (this.jwtHelper.isTokenExpired(this.getToken())) {
            this.logout();
            return true;
        }
        return false;
    }

    logout() {
        localStorage.clear();
    }
}