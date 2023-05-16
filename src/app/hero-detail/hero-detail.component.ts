import { Component } from '@angular/core';
import { Hero } from '../hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  editedHeroName?: string;
  hero?: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) {}

  getHero(id: number): void {
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  editHero(id: number): void{
    if(this.editedHeroName) this.heroService.editHero(id, this.editedHeroName);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getHero(parseInt(params['id']));
    });
  }
}
