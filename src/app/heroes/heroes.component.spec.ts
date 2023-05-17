import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [MatDialogModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatCardModule, RouterTestingModule, FormsModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the paginatedHeroes array should be smaller than the heroes array', () => {
    expect(component.paginatedHeroes.length).toBeLessThan(component.heroes.length);
  });

  it('filterHeroes() should update the pagination', () => {
    let previouslyPaginatedHeroes = component.paginatedHeroes;
    component.filterText = 'after this filter is applied, the filtered array should be empty';
    component.filterHeroes();

    expect(component.paginatedHeroes.length).toBeLessThan(previouslyPaginatedHeroes.length);
  });
});
