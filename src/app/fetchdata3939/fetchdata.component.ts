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

    constructor(private _fetchDataService: FetchDataService) { }

    ngOnInit(): void {
        this.sub = this._fetchDataService.getPokemon()
            .subscribe({
                next: pokemons => this.pokemons = pokemons,
                error: err => this.errorMessage = err
            });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}