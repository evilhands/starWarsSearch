import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../swapi.service';
import { EMPTY, map, mergeMap, Observable, tap } from 'rxjs';
import { PeopleViewComponent } from '../people-view/people-view.component';
import { SwPipe } from '../sw.pipe';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, PeopleViewComponent, SwPipe],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people$: Observable<any> = EMPTY;
  movies$: Observable<any> = EMPTY;
  selected: number | undefined;
  tempResult!: any[];

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.people$ = this.swapi.getPeople().pipe(tap(r => this.tempResult = r.results));
    this.movies$ = this.swapi.getMovies().pipe(map(r => r.results));
  }

  getPeople(url: string) {
    this.people$ = this.swapi.getData(url);
  }

  clickView(id: number) {
    this.selected = ++id;
  }

  filterMovie(phrase: string) {
    this.people$ = this.people$.pipe(
      map(r => {
        const filteredArray = this.tempResult.filter((r: { films: any[] }) => r.films.indexOf(phrase) != -1)
        r.results = filteredArray;
        return r;
      }))
  };
}
