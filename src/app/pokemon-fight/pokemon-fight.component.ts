import { Component } from '@angular/core';
import { PokemonbagComponent } from '../pokemonbag/pokemonbag.component';

@Component({
  selector: 'pokemon-fight',
  templateUrl: './pokemon-fight.component.html',
  styleUrls: ['./pokemon-fight.component.css']
})
export class PokemonFightComponent {

 constructor(private pokemonbag: PokemonbagComponent) {}
  
  fight() {
    console.log("fight");
    
  }
}
