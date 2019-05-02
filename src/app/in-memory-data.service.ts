import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heros = [
      { id: 11, name: 'Lilly' },
      { id: 12, name: 'Pepper' },
      { id: 13, name: 'Katie' },
      { id: 14, name: 'Sadie' },
      { id: 15, name: 'Molly' },
      { id: 11, name: 'Ben' },
      { id: 16, name: 'Daisy' },
      { id: 17, name: 'Max' },
      { id: 21, name: 'Trapper' },
      { id: 25, name: 'George' }
    ];
    return { heros };
  }

  genId(heros: Hero[]): number {
    return heros.length > 0 ? Math.max(...heros.map(hero => hero.id)) + 1 : 11;
  }

  constructor() {}
}
