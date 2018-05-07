import {Component} from "@angular/core";
import {SearchService} from "./search/search.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [SearchService]
})
export class HeaderComponent {
    public isCollapsed = true;
}