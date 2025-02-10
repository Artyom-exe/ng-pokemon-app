import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { 
    path: 'pokemons', 
    loadChildren: () => import('./pokemon/pokemon.routes').then(m => m.pokemonRoutes) 
  },
  { path: '**', component: PageNotFoundComponent }
];
