import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../user.model";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    usernameExists: boolean = false;
    emailExists: boolean = false;
    newUserRegistered: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmit() {
        this.usernameExists = false;
        this.emailExists = false;

        const user = new User(
            this.signupForm.value.username,
            this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.confirmPassword
        );

        this.authService.signup(user)
            .catch(err => {
                if (err['error']['error']['errors']['username'] && err['error']['error']['errors']['username']['kind'] == 'unique') {
                    this.usernameExists = true;
                }
                if (err['error']['error']['errors']['email'] && err['error']['error']['errors']['email']['kind'] == 'unique') {
                    this.emailExists = true;
                }
                return Observable.empty();
            })
            .subscribe(res => this.newUserRegistered = true);
        this.signupForm.reset();
    }

    private passwordsShouldMatch(fGroup: FormGroup) {
        return fGroup.get('password').value === fGroup.get('confirmPassword').value
            ? null : {'mismatch': true};
    }

    ngOnInit() {
        this.newUserRegistered = false;
        this.signupForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(10),
                Validators.pattern("^(\\d|\\w)+$")
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ]),
            confirmPassword: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(16)
            ])
        }, this.passwordsShouldMatch)
    }
}