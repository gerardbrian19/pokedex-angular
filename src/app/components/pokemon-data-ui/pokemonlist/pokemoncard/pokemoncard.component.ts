import { Component, OnInit, Input } from '@angular/core';

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
  @Input() types: string[];
  @Input() stats: string[];

  constructor() {}

  ngOnInit() {}
}
