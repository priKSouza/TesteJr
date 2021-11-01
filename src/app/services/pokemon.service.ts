import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.types';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = [];
  pokemonsFiltrados: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    this.pokemons = requisicao.results;
    this.pokemons.map((i, ix)=>{
          i.id = ix + 1;
        })
  }

  async carregarPokemonsFiltrados(nome: string) {
    const listaPokemonsFiltrados = await this.httpClient
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${nome}/`)
      .toPromise();

    this.pokemonsFiltrados = listaPokemonsFiltrados.results;
}
}