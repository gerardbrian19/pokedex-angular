import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './components/pokemon-ui/topbar/topbar.component';
import { BottombarComponent } from './components/pokemon-ui/bottombar/bottombar.component';
import { PokemoncardComponent } from './components/pokemon-data-ui/pokemonlist/pokemoncard/pokemoncard.component';
import { PokemonlistComponent } from './components/pokemon-data-ui/pokemonlist/pokemonlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottombarComponent,
    PokemonlistComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
