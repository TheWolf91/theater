import {Component, OnInit} from "@angular/core";
import {AccountService} from "../account.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-resend-activation',
    templateUrl: './resend-activation.component.html'
})
export class ResendActivationComponent implements OnInit{
    message: string;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.resendActivation()
            .catch(err => {
                this.message = err['error']['title'];
                return Observable.empty();
            })
            .subscribe(res => {
                this.message = res['title'];
            });
    };
}