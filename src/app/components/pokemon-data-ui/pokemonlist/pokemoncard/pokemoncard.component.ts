import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss'],
})
export class PokemoncardComponent implements OnInit {
  @Input() key: number;
  @Input() id: number;
  @Input() image: string;
  @Input() name: string;
  @Input() type: string;
  @Input() weight: number;
  @Input() height: number;

  constructor() {}

  ngOnInit() {}
}
