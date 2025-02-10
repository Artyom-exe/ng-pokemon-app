import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true // ✅ Standalone Pipe pour Angular 17+
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'bg-red-500 text-white'; // 🔥 Rouge pour Feu
        break;
      case 'Eau':
        color = 'bg-blue-500 text-white'; // 💧 Bleu pour Eau
        break;
      case 'Plante':
        color = 'bg-green-500 text-white'; // 🌿 Vert pour Plante
        break;
      case 'Insecte':
        color = 'bg-lime-600 text-white'; // 🐛 Vert clair pour Insecte
        break;
      case 'Normal':
        color = 'bg-gray-400 text-black'; // ⚪ Gris clair pour Normal
        break;
      case 'Vol':
        color = 'bg-sky-300 text-black'; // 🌬️ Bleu clair pour Vol
        break;
      case 'Poison':
        color = 'bg-purple-600 text-white'; // ☠️ Violet foncé pour Poison
        break;
      case 'Fée':
        color = 'bg-pink-300 text-black'; // ✨ Rose clair pour Fée
        break;
      case 'Psy':
        color = 'bg-indigo-700 text-white'; // 🔮 Indigo foncé pour Psy
        break;
      case 'Electrik':
        color = 'bg-yellow-300 text-black'; // ⚡ Jaune clair pour Electrik
        break;
      case 'Combat':
        color = 'bg-orange-700 text-white'; // 🥊 Orange foncé pour Combat
        break;
      default:
        color = 'bg-gray-500 text-white'; // 🔲 Gris pour inconnu
        break;
    }

    return `px-3 py-2 rounded-full font-semibold ${color}`;
  }
}
