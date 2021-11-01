import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent{
  constructor(public pokemonService: PokemonService){}

  p: number = 0;
  onPageChange(page: number) {

    var a = { page: 0 };
    a.page = page;
    localStorage.setItem('page', JSON.stringify(a));
    this.p = page;
    window.scrollTo(0, 0);

  }
}