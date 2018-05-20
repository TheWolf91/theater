import {Component} from "@angular/core";
import {AccountService} from "../account.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-account-activation',
    templateUrl: './account-activation.component.html'
})
export class AccountActivationComponent {
    accountActivated: boolean = false;
    message: string;
    error: boolean = false;

    constructor(private accountService: AccountService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            if (param['token']) {
                this.accountService.activateUser(param['token'])
                    .catch(err => {
                        console.log(err);
                        this.error = true;
                        this.message = err['error']['error'];
                        if (err['status'] == '400') {
                            this.accountActivated = true;
                        }
                        return Observable.empty();
                    })
                    .subscribe(res => {
                        this.message = res['title'];
                        this.accountActivated = true;
                    });
            }
        });
    }
}