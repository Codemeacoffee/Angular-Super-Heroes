import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { Hero } from './hero.interface';
import { listOfHeroes } from './fake-heroe-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number):  Observable<Hero | undefined> {
    const hero = of(listOfHeroes.find(hero => hero.id === id));
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(listOfHeroes);
    return heroes;
  }

  newHero(name: string): void {
    let id = 0;
    const lastHero = listOfHeroes[listOfHeroes.length - 1];
 
    if(lastHero) id = lastHero.id + 1;

    listOfHeroes.push({id: id, name: name});
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

    return of(filteredHeroes);
  }
}
