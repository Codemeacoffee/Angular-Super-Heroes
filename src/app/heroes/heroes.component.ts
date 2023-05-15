import { Component } from '@angular/core';
import { Hero } from '../hero.interface';
import { listOfHeroes } from '../fake-heroe-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = listOfHeroes;

  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
