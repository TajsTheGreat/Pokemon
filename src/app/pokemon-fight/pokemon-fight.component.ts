import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-fight',
  templateUrl: './pokemon-fight.component.html',
  styleUrls: ['./pokemon-fight.component.css']
})
export class PokemonFightComponent {

    fight() {
        console.log("fight");
    }
}
