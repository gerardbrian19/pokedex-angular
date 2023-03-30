import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { IPokemon, IPokemonDetails } from 'src/app/model/IPokemon';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss'],
})
export class PokemonlistComponent implements OnInit {
  public pokemonDetails: IPokemonDetails[] = [];
  constructor(private pokemonRepo: PokemonRepositoryService) {}

  ngOnInit() {
    this.fetchAllPokemon();
  }

  private fetchAllPokemon() {
    this.pokemonRepo.getPokemon().subscribe((pokemonList) => {
      pokemonList.forEach((p) => {
        this.pokemonRepo
          .getPokemonDetails(p.name)
          .subscribe((pokemonDetail) => {
            this.pokemonDetails.push(pokemonDetail);
          });
      });
    });
  }
}
