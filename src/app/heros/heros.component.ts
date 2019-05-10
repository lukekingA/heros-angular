import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => (this.heros = heros));
  }

  add(name: string): void {
    name = name.trim();
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heros.push(hero);
    });
  }

  deleteHero(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeros();
  }
}
