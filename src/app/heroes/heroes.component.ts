import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  filterHeroes(filterText: string): void{
    this.heroService.filterHeroes(filterText)
        .subscribe(heroes => this.heroes = heroes);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
