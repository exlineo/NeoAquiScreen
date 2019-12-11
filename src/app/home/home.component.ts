import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    webViewSrc:string;

    constructor(private page:Page) {
        this.webViewSrc = 'http://www.exlineo.com';
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    onWebViewLoaded(){
        console.log("Webview chargée. Adresse : ", this.webViewSrc);
    }
}
