import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private herosUrl = 'api/heros';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // todo: send the srror to a remote logging ifrastructure
      console.log(error);
      // todo: better job of transforming the error fot the user
      this.log(`${operation} failed: ${error.message}`);
      // let the app keep running by returning an empty reault
      return of(result as T);
    };
  }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herosUrl).pipe(
      tap(_ => this.log('fetched heros')),
      catchError(this.handleError<Hero[]>('getHeros', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.herosUrl}/${id}`)
      .pipe(
        tap(
          _ => this.log(`fetched hero id:${id}`),
          catchError(this.handleError<Hero>(`getHero id:${id}`))
        )
      );
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.herosUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id:${hero.id}`)),
      catchError(this.handleError<Hero>(`updateHero`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.herosUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`new hero name: ${hero.name}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    return this.http.delete<Hero>(this.herosUrl + '/' + id, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id: ${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
