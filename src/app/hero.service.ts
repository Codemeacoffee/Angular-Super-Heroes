import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero.interface';
import { listOfHeroes } from './fake-heroe-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number):  Observable<Hero> {
    const hero = of(listOfHeroes[id]);
    this.messageService.add('Se ha cargado el héroe.');
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(listOfHeroes);
    this.messageService.add('Se ha cargado la lista de héroes.');
    return heroes;
  }
}
