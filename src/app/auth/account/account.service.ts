import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../user.model";

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) {}

    updateUser(user: User) {
        return this.http.put('http://localhost:3000/api/user/account', user);
    }

    changePassword(oldPassword: string, password: string, confirmPassword:string) {
        return this.http.put('http://localhost:3000/api/user/account/password', {oldPassword, password, confirmPassword});
    }
}