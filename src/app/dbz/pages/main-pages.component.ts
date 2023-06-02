import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html'
})
export class MainPagesComponent {

    public characters: Character[] = [];

    constructor(public dbzService: DbzService) {
        this.characters = this.dbzService.characters;
     }

    getNewCharacter(character: Character): void {

        this.dbzService.onNewCharacter(character);
        
    }

    deleteCharacterById(index: number): void {
        this.dbzService.onDeleteCharacterById(index);
    }

}