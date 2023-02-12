import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonbagComponent } from './pokemonbag/pokemonbag.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FetchDataComponent,
    PokemonbagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
