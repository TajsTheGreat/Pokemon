import { Component } from '@angular/core';
import { IPokemon } from '../fetchdata/api';
import { PokemonbagComponent } from '../pokemonbag/pokemonbag.component';

@Component({
  selector: 'pokemon-fight',
  templateUrl: './pokemon-fight.component.html',
  styleUrls: ['./pokemon-fight.component.css']
})
export class PokemonFightComponent {

  pokemon!: IPokemon | undefined;

 constructor(private pokemonbag: PokemonbagComponent) {}
  
  fight() {
    console.log("fight");

    console.log(this.pokemonbag.getPokemonName());
  }
}
