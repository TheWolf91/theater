import {Component} from "@angular/core";
import {SearchService} from "./search/search.service";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [SearchService, AuthService]
})
export class HeaderComponent {
    public isCollapsed = true;

    constructor(private authService: AuthService) {
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout();
    }

}