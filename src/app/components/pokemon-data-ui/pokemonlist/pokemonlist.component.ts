import { Component, OnInit } from '@angular/core';
import { IPokemonDetails } from 'src/app/model/IPokemon';
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
    this.pokemonRepo.getAllPokemonDetails().subscribe((pokemonDetails) => {
      console.log(pokemonDetails);
      this.pokemonDetails = pokemonDetails;
    });
  }
}
