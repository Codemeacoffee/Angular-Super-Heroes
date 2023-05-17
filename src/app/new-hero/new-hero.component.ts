import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html'
})
export class NewHeroComponent {
  newHeroName = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(private heroService: HeroService, private router: Router) {}

  newHero(): void {
    if(this.newHeroName.valid && this.newHeroName.value){
      this.heroService.newHero(this.newHeroName.value);
      this.router.navigate(['/']);
    } 
  }

  getValidatorErrorMessage(): string {
    if (this.newHeroName.hasError('required')) return 'El nombre no puede estar vacío.';
    return 'El nombre debe tener al menos 2 caracteres.';
  }
}
