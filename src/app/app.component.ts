import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Fontawesome } from 'nativescript-fontawesome';

import { android as androidApp } from 'tns-core-modules/application';
import { device } from 'tns-core-modules/platform';
declare var android: any;

Fontawesome.init();

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(public page:Page){
    }

    ngOnInit(){
        // this.page.actionBar.navigationButton.visibility = 'collapse'
    }

    private goFullscreen() {
        if (androidApp && device.sdkVersion >= '21') {
          const View = android.view.View;
          const window = androidApp.startActivity.getWindow();
          const decorView = window.getDecorView();
          decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
              View.SYSTEM_UI_FLAG_FULLSCREEN |
              View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
          );
        }
    }
    private hideFullscreen() {
        if (androidApp && device.sdkVersion >= '21') {
          const View = android.view.View;
          const window = androidApp.startActivity.getWindow();
          const decorView = window.getDecorView();
          decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }
    }

    ngAfterViewInit(): void {
        // Get rid of stats bar on android
        if (androidApp && device.sdkVersion >= '21') {
            console.log('Passage en plein écran');
            const View = android.view.View;
            const window = androidApp.startActivity.getWindow();
            const decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_FULLSCREEN |
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            );
        }
    }
}
