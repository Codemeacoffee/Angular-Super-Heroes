import { Component, ViewChild } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  //Pagination
  @ViewChild('paginator') paginator!: MatPaginator;
  paginatedHeroes: Hero[] = [];
  displayedHeroes = 5;

  constructor(private heroService: HeroService) { }

  filterHeroes(filterText: string): void{
    this.heroService.filterHeroes(filterText).subscribe(heroes => this.heroes = heroes);
    this.paginatedHeroes = this.heroes.slice(0, this.displayedHeroes); 
    this.paginator.firstPage();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.paginatedHeroes = this.heroes.slice(0, this.displayedHeroes); 
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id);
  }

  onPageChange(event: PageEvent) : void{
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.heroes.length) endIndex = this.heroes.length;
    this.paginatedHeroes = this.heroes.slice(startIndex, endIndex); 
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
