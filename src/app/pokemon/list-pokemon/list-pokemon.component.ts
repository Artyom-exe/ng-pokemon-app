import { Component, inject } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { NgFor, DatePipe, CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [NgFor, BorderCardDirective, DatePipe, PokemonTypeColorPipe, CommonModule],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  pokemonList: Pokemon[];

  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  constructor() {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
