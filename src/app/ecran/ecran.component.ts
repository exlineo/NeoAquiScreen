import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { ConfigService } from "../services/config.services";

@Component({
    selector: "ecran",
    templateUrl: "./ecran.component.html"
})
export class EcranComponent implements OnInit {

    constructor(private page:Page, public configServ:ConfigService) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    onWebViewLoaded(){
        console.log("Webview chargée. Adresse : ", this.configServ.url);
    }
}
