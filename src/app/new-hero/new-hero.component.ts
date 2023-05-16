import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent {
  newHeroName?: string;

  constructor(private heroService: HeroService) {}

  newHero(): void {
    if(this.newHeroName) this.heroService.newHero(this.newHeroName);
  }
}
