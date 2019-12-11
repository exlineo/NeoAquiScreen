import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import * as dialogs from "tns-core-modules/ui/dialogs";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { ConfigService } from "../services/config.services";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    webViewSrc:string;

    constructor(private page:Page, public configServ:ConfigService) {
        this.webViewSrc = 'http://www.exlineo.com';
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
/**
     * Modifier les settings pour paramétrer une nouvelle adresse d'accès aux données
     */
    onTapSettings(){
        dialogs.prompt({
            title: "Paramètre réseau",
            message: "Saisissez l'adresse réseau pour accéder aux données",
            okButtonText: "Valider",
            cancelButtonText: "Annuler",
            inputType: dialogs.inputType.text
        }).then(r => {
            this.configServ.setConfig(r.text);
            console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
    }
}
