import { Component } from '@angular/core';
import { Hero } from '../hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html'
})
export class EditHeroComponent {
  editedHeroName = new FormControl('', [Validators.required, Validators.minLength(2)]);
  hero?: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) {}

  getHero(id: number): void {
    this.heroService.getHero(id)
        .subscribe(
          (hero) => {
            if(hero) this.hero = hero;
            else this.router.navigate(['/']);
          }
        );
  }

  editHero(id: number): void{
    if(this.editedHeroName.valid && this.editedHeroName.value){
      this.heroService.editHero(id, this.editedHeroName.value);
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getHero(parseInt(params['id']));
    });
  }

  getValidatorErrorMessage(): string {
    if (this.editedHeroName.hasError('required')) return 'El nombre no puede estar vacío.';
    return 'El nombre debe tener al menos 2 caracteres.';
  }
}
