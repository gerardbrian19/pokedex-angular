import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPokemonDetails } from 'src/app/model/IPokemon';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss'],
})
export class PokemonlistComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  public pokemonDetails: IPokemonDetails[] = [];
  public selectedId: number;
  public selectedPokemon: IPokemonDetails | undefined;
  constructor(private pokemonRepo: PokemonRepositoryService) {}

  public ngOnInit(): void {
    this.fetchAllPokemon();
  }

  private fetchAllPokemon(): void {
    this.pokemonRepo.getAllPokemonDetails().subscribe((pokemonDetails) => {
      this.pokemonDetails = pokemonDetails;
      console.log('this.pokemonDetails', this.pokemonDetails);
    });
  }

  public onAudioPlay(): void {
    this.audioPlayerRef.nativeElement.play();
  }

  public onMouseEnter(pokemonId: number): void {
    this.selectedId = pokemonId;
    this.selectedPokemon = this.pokemonDetails.find(
      (pd) => pd.id === pokemonId
    );
    this.onAudioPlay();
    console.log('workds', pokemonId);
  }

  public onMouseLeave(): void {
    this.selectedId = 0;
    this.selectedPokemon = undefined;
  }
}
