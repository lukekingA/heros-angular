import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }
  getHero(id): Observable<Hero> {
    this.messageService.add('HeroService: fetched one hero');
    const hero: Hero = HEROS.filter(h => h.id === id)[0];
    return of(hero);
  }
  constructor(private messageService: MessageService) {}
}
