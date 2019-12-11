import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EcranRoutingModule } from "./ecran-routing.module";
import { EcranComponent } from "./ecran.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EcranRoutingModule
    ],
    declarations: [
        EcranComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EcranModule { }
