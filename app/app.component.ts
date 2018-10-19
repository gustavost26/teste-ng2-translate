import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate";
import * as Platform from "platform";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en'); //chage pt
        //this.translate.use(Platform.device.language.split('-')[0]);
    }
}
