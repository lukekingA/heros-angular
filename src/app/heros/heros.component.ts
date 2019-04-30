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
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => (this.heros = heros));
  }
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeros();
  }
}
