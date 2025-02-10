import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-404',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" 
           alt="Cléfable perdu"
           class="w-40 h-40 mb-6 animate-bounce" />
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Hey, cette page n'existe pas !</h1>
      <a [routerLink]="'/pokemons'" 
         class="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        Retourner à l'accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
