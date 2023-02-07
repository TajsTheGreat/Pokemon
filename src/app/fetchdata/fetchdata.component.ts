import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchDataService } from './fetchdata.service';
import { IPokemon } from './api';
import { Subscription } from 'rxjs';
import { readFileSync } from 'fs';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [FetchDataService]
})

export class FetchDataComponent implements OnInit, OnDestroy {
    pokemons!: IPokemon;
    errorMessage: string = '';
    sub: Subscription | undefined;

    private pokemonlist: string = readFileSync('pokemonNames.txt', 'utf8');
    private pokemonlistArray: string[] = this.pokemonlist.split(', ');
    public chosenPokemon: string = "";

    constructor(private _fetchDataService: FetchDataService) { }

    ngOnInit(): void {
        this.chosenPokemon = this.pokemonlistArray[Math.floor(Math.random() * this.pokemonlistArray.length)];
        this.sub = this._fetchDataService.getPokemon(this.chosenPokemon)
            .subscribe({
                next: x => this.pokemons = x,
                error: err => this.errorMessage = err
            });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}