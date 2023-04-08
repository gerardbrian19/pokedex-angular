import { Component, OnInit, Input } from '@angular/core';
import { IStats } from 'src/app/model/IPokemon';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss'],
})
export class PokemoncardComponent implements OnInit {
  @Input() id: number;
  @Input() image: string;
  @Input() name: string;
  @Input() weight: number;
  @Input() height: number;
  @Input() type: string;
  @Input() stats: IStats[];

  constructor() {}

  ngOnInit() {}
}
