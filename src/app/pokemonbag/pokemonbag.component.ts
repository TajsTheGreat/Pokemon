import { Component } from '@angular/core';
import { FetchDataService } from '../fetchdata/fetchdata.service';
import { IPokemon } from '../fetchdata/api';

@Component({
  selector: 'app-pokemonbag',
  template: `
    <div *ngIf="pokemon">
      <h2>{{pokemon.name}}</h2>
      <img [src]="pokemon.sprites" alt="Pokemon Image">
    </div>
  `
})
export class PokemonbagComponent {
  pokemon!: IPokemon;

  constructor(private fetchDataService: FetchDataService) {}

  searchPokemon(chosenPokemon: string) {
    this.fetchDataService.getPokemon(chosenPokemon)
      .subscribe(
        pokemon => this.pokemon = pokemon,
        error => console.error(error)
      );
  }
}
