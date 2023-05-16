import { Component } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  paginatedHeroes: Hero[] = [];
  filterText: string = '';
  pageSize = 5;
  pageIndex = 0;

  constructor(private heroService: HeroService, public dialog: MatDialog) { 
    this.heroService.getHeroes()
    .subscribe(
      (heroes) => {
        this.heroes = heroes;
        this.updatePaginator()
      }
    );
  }

  filterHeroes(): void{
    this.heroService.filterHeroes(this.filterText)
    .subscribe(
      (heroes) => {
        this.heroes = heroes;
        this.updatePaginator()
      }
    );
  }

  deleteHero(id: number): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      data: {
        title: 'Borrar héroe',
        content: '¿Estas seguro de que quieres borrar este héroe?'
      },
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroService.deleteHero(id);
        this.filterHeroes();
      }
    });
  }

  onPageChange(event: PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginator();
  }

  updatePaginator(): void{
    const startIndex = this.pageIndex * this.pageSize;
    let endIndex = startIndex + this.pageSize;

    if(endIndex > this.heroes.length) endIndex = this.heroes.length;
    if(this.heroes.length && startIndex >= this.heroes.length){
      this.pageIndex = this.pageIndex -1;
      this.updatePaginator();
    }else this.paginatedHeroes = this.heroes.slice(startIndex, endIndex); 
  }
}
