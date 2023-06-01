import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name: string = 'ironman';
  public age: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get capitalizedName(): string  {
    return this.name.toUpperCase();
  }

  getHeroDesciption(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
