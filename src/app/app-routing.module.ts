import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; 
import { HeroesComponent } from './heroes/heroes.component';
import { NewHeroComponent } from './new-hero/new-hero.component';

const routes: Routes = [
  { path : '', component: HeroesComponent},
  { path: 'newHero', component: NewHeroComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}