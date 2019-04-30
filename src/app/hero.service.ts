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
  constructor(private messageService: MessageService) {}
}
