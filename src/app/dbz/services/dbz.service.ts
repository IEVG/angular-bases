import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    contructor() {}

    public characters: Character[] = [
        {
            id: 1,
            name: 'Krillin',
            power: 1000
        },
        {
            id: 2,
            name: 'Goku',
            power: 9500
        },
        {
            id: 3,
            name: 'Vegeta',
            power: 7500
        }
    ];

    contador: number = this.characters.length;

    addCharacter(character: Character): void {

        //usando spread ...
        const newCharacter: Character = { id: ++this.contador, ...character };
        this.characters.push(newCharacter);
        console.log(newCharacter);

        // Mi solución
        // this.contador++;
        // character.id =  this.contador;
        // this.characters.push(character);

        // console.log('Main Page');
        // console.log(character);
        
    }

    deleteCharacterById(id: number) {
        // console.log(id);
        // this.characters.splice(id-1, 1);
        this.characters = this.characters.filter( character => character.id !== id );
        //Para poder ver que se esta eliminando en pantalla
        // this.characters.splice(index, 1).forEach( value => console.log(value));
        console.log(this.characters);
    }
    
}
