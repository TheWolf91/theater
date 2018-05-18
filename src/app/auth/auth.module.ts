import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {CommonModule} from "@angular/common";
import {AccountComponent} from "./account/account.component";
import {AccountService} from "./account/account.service";

@NgModule({
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SignupComponent,
        SigninComponent,
        AccountComponent
    ],
    providers: [
        AuthService,
        AccountService,
        AuthGuardService,
    ]
})
export class AuthModule {

}