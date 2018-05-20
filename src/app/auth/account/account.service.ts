import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../user.model";
import * as http from "http";

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) {}

    activateUser(token: string) {
        return this.http.post('http://localhost:3000/api/user/confirmation', {token});
    }

    resendActivation() {
        return this.http.get('http://localhost:3000/api/user/resend');
    }

    updateUser(user: User) {
        return this.http.put('http://localhost:3000/api/user/account', user);
    }

    changePassword(oldPassword: string, password: string, confirmPassword:string) {
        return this.http.put('http://localhost:3000/api/user/account/password', {oldPassword, password, confirmPassword});
    }
}