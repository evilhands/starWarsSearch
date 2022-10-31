import { Pipe, PipeTransform } from '@angular/core';
import { map, tap } from 'rxjs';
import { SwapiService } from './swapi.service';

@Pipe({
  name: 'sw',
  standalone: true
})
export class SwPipe implements PipeTransform {

  constructor(private swapi: SwapiService) { }

  transform(value: unknown, ...args: unknown[]): any {
    return this.swapi.getData(value as string).pipe(map(r => { if (r.name) { return r.name + ", " } else { return r.title + ", " } }));
  }

}
