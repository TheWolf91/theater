import {NgModule} from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./header/search/search.component";
import {FormsModule} from "@angular/forms";
import {JwtModule} from "@auth0/angular-jwt";
import {NgProgressModule} from "@ngx-progressbar/core";
import {NgProgressHttpModule} from "@ngx-progressbar/http";
import {NgProgressRouterModule} from "@ngx-progressbar/router";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        NgProgressModule.forRoot(),
        NgProgressRouterModule,
        NgProgressHttpModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['localhost:3000']
            }
        })
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}