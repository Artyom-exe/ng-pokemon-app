import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

export const pokemonRoutes: Routes = [
  { path: '', component: ListPokemonComponent },
  { path: ':id', component: DetailPokemonComponent }
];
