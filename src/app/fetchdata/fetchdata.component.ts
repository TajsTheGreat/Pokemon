import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchDataService } from './fetchdata.service';
import { IPokemon } from './api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [FetchDataService]
})

export class FetchDataComponent implements OnInit, OnDestroy {
    pokemons!: IPokemon;
    errorMessage: string = '';
    sub: Subscription | undefined;

    private pokemonlist: string = "Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, Beedrill, Pidgey, Pidgeotto, Pidgeot, Rattata, Raticate, Spearow, Fearow, Ekans, Arbok, Pikachu, Raichu, Sandshrew, Sandslash, Nidoran♀, Nidorina, Nidoqueen, Nidoran♂, Nidorino, Nidoking, Clefairy, Clefable, Vulpix, Ninetales, Jigglypuff, Wigglytuff, Zubat, Golbat, Oddish, Gloom, Vileplume, Paras, Parasect, Venonat, Venomoth, Diglett, Dugtrio, Meowth, Persian, Psyduck, Golduck, Mankey, Primeape, Growlithe, Arcanine, Poliwag, Poliwhirl, Poliwrath, Abra, Kadabra, Alakazam, Machop, Machoke, Machamp, Bellsprout, Weepinbell, Victreebel, Tentacool, Tentacruel, Geodude, Graveler, Golem, Ponyta, Rapidash, Slowpoke, Slowbro, Magnemite, Magneton, Farfetch'd Doduo, Dodrio, Seel, Dewgong, Grimer, Muk, Shellder, Cloyster, Gastly, Haunter, Gengar, Onix, Drowzee, Hypno, Krabby, Kingler, Voltorb, Electrode, Exeggcute, Exeggutor, Cubone, Marowak, Hitmonlee, Hitmonchan, Lickitung, Koffing, Weezing, Rhyhorn, Rhydon, Chansey, Tangela, Kangaskhan, Horsea, Seadra, Goldeen, Seaking, Staryu, Starmie, Mr. Mime, Scyther, Jynx, Electabuzz, Magmar, Pinsir, Tauros, Magikarp, Gyarados, Lapras, Ditto, Eevee, Vaporeon, Jolteon, Flareon, Porygon, Omanyte, Omastar, Kabuto, Kabutops, Aerodactyl, Snorlax, Articuno, Zapdos, Moltres, Dratini, Dragonair, Dragonite, Mewtwo, Mew, MissingNo".toLowerCase();
    private pokemonlistArray: string[] = this.pokemonlist.split(', ');
    public chosenPokemon: string = "";

    constructor(private _fetchDataService: FetchDataService) { }

    ngOnInit(): void {
        this.chosenPokemon = this.pokemonlistArray[0];
        this.sub = this._fetchDataService.getPokemon(this.chosenPokemon)
            .subscribe({
                next: x => this.pokemons = x,
                error: err => this.errorMessage = err
            });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    fightPokemon(): void {
        this.chosenPokemon = this.pokemonlistArray[Math.floor(Math.random() * this.pokemonlistArray.length)];
        this.sub = this._fetchDataService.getPokemon(this.chosenPokemon)
            .subscribe({
                next: x => this.pokemons = x,
                error: err => this.errorMessage = err
            });
    }
}