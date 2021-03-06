import './polyfills';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/stylesheets/style.css';
import '../assets/images/favicon.ico';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));