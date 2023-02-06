import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IPokemon } from './api';

@Injectable()
export class FetchDataService {
    private _url: string = 'https://pokeapi.co/api/v2/pokemon/1/';
    private headers = new HttpHeaders();

    private _http;

    constructor(private http: HttpClient) 
    { 
        this._http = http;
    }

    getPokemon(): Observable<IPokemon> {
        return this.http.get<IPokemon>(this._url)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}