import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero?: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  getHero(id: number): void {
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getHero(parseInt(params['id']));
    });
  }
}
