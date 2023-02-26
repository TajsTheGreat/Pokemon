import { Component } from '@angular/core';
import { FetchDataService } from '../fetchdata/fetchdata.service';
import { IPokemon } from '../fetchdata/api';

@Component({
  selector: 'pokemonbag',
  templateUrl: './pokemonbag.component.html',
  styleUrls: ['./pokemonbag.component.css']
})

export class PokemonbagComponent {
  public pokemon!: IPokemon;
  
  public pokemonsOwned: Array<IPokemon> = new Array<IPokemon>();
  
  private pokemonlist: string = "Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, Beedrill, Pidgey, Pidgeotto, Pidgeot, Rattata, Raticate, Spearow, Fearow, Ekans, Arbok, Pikachu, Raichu, Sandshrew, Sandslash, Nidorina, Nidoqueen, Nidorino, Nidoking, Clefairy, Clefable, Vulpix, Ninetales, Jigglypuff, Wigglytuff, Zubat, Golbat, Oddish, Gloom, Vileplume, Paras, Parasect, Venonat, Venomoth, Diglett, Dugtrio, Meowth, Persian, Psyduck, Golduck, Mankey, Primeape, Growlithe, Arcanine, Poliwag, Poliwhirl, Poliwrath, Abra, Kadabra, Alakazam, Machop, Machoke, Machamp, Bellsprout, Weepinbell, Victreebel, Tentacool, Tentacruel, Geodude, Graveler, Golem, Ponyta, Rapidash, Slowpoke, Slowbro, Magnemite, Magneton, Farfetch'd Doduo, Dodrio, Seel, Dewgong, Grimer, Muk, Shellder, Cloyster, Gastly, Haunter, Gengar, Onix, Drowzee, Hypno, Krabby, Kingler, Voltorb, Electrode, Exeggcute, Exeggutor, Cubone, Marowak, Hitmonlee, Hitmonchan, Lickitung, Koffing, Weezing, Rhyhorn, Rhydon, Chansey, Tangela, Kangaskhan, Horsea, Seadra, Goldeen, Seaking, Staryu, Starmie, Mr. Mime, Scyther, Jynx, Electabuzz, Magmar, Pinsir, Tauros, Magikarp, Gyarados, Lapras, Ditto, Eevee, Vaporeon, Jolteon, Flareon, Porygon, Omanyte, Omastar, Kabuto, Kabutops, Aerodactyl, Snorlax, Articuno, Zapdos, Moltres, Dratini, Dragonair, Dragonite, Mewtwo, Mew, Wailmer".toLowerCase();
  private pokemonlistArray: string[] = this.pokemonlist.split(', ');
  private chosenPokemon: string = "";
  public currentPokemon!: IPokemon;
  public fighting = false;

  constructor(private fetchDataService: FetchDataService) {}

  getRandomPokemon() {
    this.chosenPokemon = this.pokemonlistArray[Math.floor(Math.random() * this.pokemonlistArray.length)];
    this.fetchDataService.getPokemon(this.chosenPokemon).subscribe({
      next: pokemon => {
        this.pokemon = pokemon;
        console.log(this.pokemon.name);
      }
    });
  }


  getPokemon() {
    this.pokemonsOwned.push(this.pokemon);
  }

  getPokemonName() {
    console.log("hello");
    console.log(this.pokemon.name);
    return this.pokemon.name;
  }

  // makes a pokemon owned fight another pokemon
  fight() {
    this.fighting = true;
    // shows the pokemon that is fighting
    this.currentPokemon = this.pokemonsOwned[this.pokemonsOwned.length - 1];
    // show the pokemons stats
    this.pokemon.stats.forEach(stat => {
      console.log(stat.stat.name + ": " + stat.base_stat);
    }, this);
  






    
    
  }
}
