import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const pokemonRoutes: Routes = [
  { 
    path: '', 
    component: PokemonComponent,
    children: [
      { path: '', component: ListPokemonComponent, title: 'Tous les Pokémon' },
      { path: ':id', component: DetailPokemonComponent, title: 'Détail du Pokémon' }
    ]
  }
];

export default pokemonRoutes; 
