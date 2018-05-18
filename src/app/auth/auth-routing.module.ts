import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthGuardService} from "./auth-guard.service";
import {AccountComponent} from "./account/account.component";

const authRoutes: Routes = [
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}