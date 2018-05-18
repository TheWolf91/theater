import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    loginError: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmit() {
        const user = new User('user', this.signinForm.value.email, this.signinForm.value.password);
        this.authService.signin(user)
            .catch(err => {
                this.loginError = err['error']['error']['message'];
                return Observable.throw(err);
            })
            .subscribe(data => {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userId', data['userId']);
                    this.router.navigateByUrl('/user/account');
                }
            );
    }

    ngOnInit() {
        if (!this.authService.isTokenExpired()) {
            this.router.navigateByUrl('/user/account')
        }
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}