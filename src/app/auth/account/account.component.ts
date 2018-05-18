import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../user.model";
import {AccountService} from "./account.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    accountSettingsForm: FormGroup;
    accountPasswordForm: FormGroup;
    settingsUpdated: boolean = false;
    passwordChanged: boolean = false;
    oldPasswordError: string;
    user: User;

    constructor(private http: HttpClient, private accountService: AccountService) {
    }

    initAccountSettingsForm() {
        this.accountSettingsForm = new FormGroup({
            username: new FormControl(this.user.username ? this.user.username : null,
                [
                    Validators.required,
                    Validators.pattern("^(\\d|\\w)+$"),
                    Validators.minLength(4),
                    Validators.maxLength(10)
                ]),
            email: new FormControl(this.user.email ? this.user.email : null,
                [
                    Validators.required,
                    Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
                ])
        });
    }

    initAccountPasswordForm() {
        this.accountPasswordForm = new FormGroup({
            oldPassword: new FormControl(null, Validators.required),
            password: new FormControl(null, [
                Validators.minLength(8),
                Validators.maxLength(16),
                Validators.required
            ]),
            confirmPassword: new FormControl(null, [
                Validators.minLength(8),
                Validators.maxLength(16),
                Validators.required
            ])
        }, this.passwordsShouldMatch);
    }

    onUpdate() {
        const user = new User(this.accountSettingsForm.controls.username.value, this.accountSettingsForm.controls.email.value);
        this.accountService.updateUser(user)
            .catch(err => {
                return Observable.empty();
            })
            .subscribe(res => {
                this.user.username = res['obj']['username'];
                this.user.email = res['obj']['email'];
                this.settingsUpdated = true;
                setTimeout(() => this.settingsUpdated = false, 3000);
                console.log(res);
            });
    }

    onChangePassword() {
        this.accountService.changePassword(
            this.accountPasswordForm.controls.oldPassword.value,
            this.accountPasswordForm.controls.password.value,
            this.accountPasswordForm.controls.confirmPassword.value
        )
            .catch(err => {
                this.oldPasswordError = err['error']['title'];
                return Observable.empty();
            })
            .subscribe(res => {
                this.oldPasswordError = null;
                this.passwordChanged = true;
                this.accountPasswordForm.reset();
                setTimeout(() => this.passwordChanged = false, 3000);
            });
    }

    private passwordsShouldMatch(fGroup: FormGroup) {
        return fGroup.get('password').value === fGroup.get('confirmPassword').value
            ? null : {'mismatch': true};
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/api/user/account')
            .catch(err => {
                return Observable.empty();
            })
            .subscribe(user => {
                this.user = new User(user['username'], user['email']);
                this.initAccountSettingsForm();
                this.initAccountPasswordForm();
            });
    };
}