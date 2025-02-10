import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { NgFor, DatePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-list-pokemon',
  imports: [NgFor, BorderCardDirective, DatePipe, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
    pokemonList: Pokemon[] = POKEMONS;
}
