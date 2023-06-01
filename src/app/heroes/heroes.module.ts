import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent //se tiene que declarar para poder usarlo en este módulo
    ],
    imports: [
        // BrowserModule,
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
})
export class HeroesModule {}