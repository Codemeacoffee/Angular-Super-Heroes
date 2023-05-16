import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero.interface';
import { listOfHeroes } from './fake-heroe-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number):  Observable<Hero | undefined> {
    const hero = of(listOfHeroes.find(hero => hero.id === id));
    this.messageService.add('Se ha cargado el héroe.');
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(listOfHeroes);
    this.messageService.add('Se ha cargado la lista de héroes.');
    return heroes;
  }

  editHero(id: number, name: string): void{
    const hero = listOfHeroes.find(hero => hero.id === id);

    if(hero) hero.name = name;
  }

  deleteHero(id: number): void {
    const hero = listOfHeroes.find(hero => hero.id === id);

    if(hero) listOfHeroes.splice(listOfHeroes.indexOf(hero), 1);
  }

  filterHeroes(filterText: string): Observable<Hero[]> {
    let heroes = listOfHeroes;
    let filteredHeroes: Hero[] = [];

    heroes.forEach(element => {
      if(element.name.toLowerCase().includes(filterText.toLowerCase())) filteredHeroes.push(element);
    });

    this.messageService.add('Se ha cargado la lista de héroes.');
    return of(filteredHeroes);
  }
}
