import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { FetchDataService } from './fetchdata/fetchdata.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonbagComponent } from './pokemonbag/pokemonbag.component';
import { PokemonFightComponent } from './pokemon-fight/pokemon-fight.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FetchDataComponent,
    PokemonbagComponent,
    PokemonFightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FetchDataService,
    PokemonbagComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
