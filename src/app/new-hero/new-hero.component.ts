import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent {
  newHeroName?: string;

  constructor(private heroService: HeroService, private router: Router) {}

  newHero(): void {
    if(this.newHeroName) this.heroService.newHero(this.newHeroName);
    this.router.navigate(['/']);
  }
}
