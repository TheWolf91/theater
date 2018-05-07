import {NgModule} from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./header/search/search.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
        BrowserModule,
        HttpClientModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}