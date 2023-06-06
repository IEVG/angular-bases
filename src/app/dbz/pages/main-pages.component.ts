import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html'
})
export class MainPagesComponent {

    // public characters: Character[] = [];

    constructor(private dbzService: DbzService) {
        // this.characters = this.dbzService.characters;
    }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    getNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

    deleteCharacterById( id: number ): void {
        this.dbzService.deleteCharacterById(id);
        // this.characters = this.dbzService.characters;
    }

}