import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeroComponent } from './edit-hero/edit-hero.component'; 
import { HeroesComponent } from './heroes/heroes.component';
import { NewHeroComponent } from './new-hero/new-hero.component';

const routes: Routes = [
  { path : '', component: HeroesComponent},
  { path: 'newHero', component: NewHeroComponent },
  { path: 'hero/:id', component: EditHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}