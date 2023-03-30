import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPokemonRaw, IPokemon, IPokemonDetails } from '../model/IPokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryService {
  constructor(private http: HttpClient) {}

  public baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  public limit: number = 10;

  public getPokemon(): Observable<IPokemon[]> {
    const url: string = `${this.baseUrl}?limit=${this.limit}&offset=0`;
    const request: Observable<IPokemon[]> = this.http
      .get<IPokemonRaw>(url)
      .pipe(map((data: IPokemonRaw) => data.results));
    return request;
  }

  public getPokemonDetails(pokemonName: string): Observable<IPokemonDetails> {
    const url: string = `${this.baseUrl}/${pokemonName}`;
    const request: Observable<IPokemonDetails> =
      this.http.get<IPokemonDetails>(url);
    return request;
  }
}
