import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getHero() should return an observable containing a hero if there is a hero with ID equal to the provided parameter', () => {
    service.getHero(0).subscribe((hero) => {
      expect(hero).toBeTruthy();
    }); 
  });

  it('getHero() should return an observable containing false if there is no hero with ID equal to the provided parameter', () => {
    service.getHero(9999).subscribe((hero) => {
      expect(hero).toBeFalse();
    }); 
  });

  it('getHeroes() should return an observable containing an array of heroes ', () => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toBeInstanceOf(Array);
    });  
  });

  it('filterHeroes() should return an observable containing a filtered array of heroes', () => {
    service.filterHeroes('').subscribe((heroes) => {
      expect(heroes.length).toBeGreaterThan(0);
    });  
  });

  it('filterHeroes() should return an observable containing an empty array if no heroes matches the filters applied', () => {
    service.filterHeroes('after this filter is applied, the filter array should be empty').subscribe((heroes) => {
      expect(heroes.length).toBe(0);
    });  
  });
});
