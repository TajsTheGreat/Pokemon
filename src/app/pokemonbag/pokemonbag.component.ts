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
  public started = false;

  public HP!: number;
  public attack!: number;
  public defense!: number;
  public speed!: number;
  public specialAttack!: number;
  public specialDefense!: number;

  public enemyHP!: number;
  public enemyAttack!: number;
  public enemyDefense!: number;
  public enemySpeed!: number;
  public enemySpecialAttack!: number;
  public enemySpecialDefense!: number;

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

  // Makes start pokemon
  startPokemon() {
    this.chosenPokemon = this.pokemonlistArray[Math.floor(Math.random() * this.pokemonlistArray.length)];
    this.fetchDataService.getPokemon(this.chosenPokemon).subscribe({
      next: pokemon => {
        this.pokemon = pokemon;
        console.log(this.pokemon.name);
        this.pokemonsOwned.push(this.pokemon);
        this.started = true;
      }
    });
  }

  // makes a pokemon owned fight another pokemon
  fight() {
    this.currentPokemon = this.pokemonsOwned[this.pokemonsOwned.length - 1];

    this.HP = parseInt(this.currentPokemon.stats[0]);
    this.attack = Number(this.currentPokemon.stats[1]);
    this.defense = Number(this.currentPokemon.stats[2]);
    this.specialAttack = Number(this.currentPokemon.stats[3]);
    this.specialDefense = Number(this.currentPokemon.stats[4]);
    this.speed = Number(this.currentPokemon.stats[5]);

    this.enemyHP = Number(this.pokemon.stats[0]);
    this.enemyAttack = Number(this.pokemon.stats[1]);
    this.enemyDefense = Number(this.pokemon.stats[2]);
    this.enemySpecialAttack = Number(this.pokemon.stats[3]);
    this.enemySpecialDefense = Number(this.pokemon.stats[4]);
    this.enemySpeed = Number(this.pokemon.stats[5]);

    this.HP = Math.floor(this.HP * 1.2);
    this.attack = Math.floor(this.attack * 1.2);
    this.defense = Math.floor(this.defense * 1.2);
    this.fighting = true;
    
   
      while (this.currentPokemon.stats[0] > 0) {
        this.enemyHP -= this.attack/this.enemyDefense * 10;
        this.HP -= this.enemyAttack/this.defense * 10;
        if (this.enemyHP <= 0) {
          this.getPokemon();
          this.fighting = false;
          break;
        }
        if (this.HP <= 0) {
          this.HP = this.currentPokemon.stats[0];
          this.fighting = false; 
          break;
        }
      } 
      

    }



   

    
    

    
    
  






    
    
  }

