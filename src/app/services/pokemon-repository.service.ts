import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, forkJoin } from 'rxjs';
import { IPokemonRaw, IPokemon, IPokemonDetails } from '../model/IPokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryService {
  constructor(private http: HttpClient) {}

  public baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  public limit: number = 100;
  public offset: number = 0;
  public getPokemonUrl: string = `${this.baseUrl}?limit=${this.limit}&offset=${this.offset}`;
  public getPokemonDetailUrl = (pokemonName: string): string =>
    `${this.baseUrl}/${pokemonName}`;

  public getPokemon(): Observable<IPokemonRaw> {
    const request: Observable<IPokemonRaw> = this.http.get<IPokemonRaw>(
      this.getPokemonUrl
    );
    return request;
  }

  public getPokemonDetails(pokemonName: string): Observable<IPokemonDetails> {
    const url: string = this.getPokemonDetailUrl(pokemonName);
    const request: Observable<IPokemonDetails> =
      this.http.get<IPokemonDetails>(url);
    return request;
  }

  public getAllPokemonDetails(): Observable<IPokemonDetails[]> {
    const pokemonDetails$ = this.getPokemon().pipe(
      map((response: IPokemonRaw) => response.results),
      map((results: IPokemon[]) => results.map((result) => result.name)),
      mergeMap((names: string[]) => {
        const requests: Observable<IPokemonDetails>[] = names.map((name) =>
          this.getPokemonDetails(name)
        );
        return forkJoin(requests);
      }),
      map((pokemonDetails: IPokemonDetails[]) =>
        pokemonDetails.sort((a, b) => a.id - b.id)
      )
    );
    return pokemonDetails$;
  }
}
