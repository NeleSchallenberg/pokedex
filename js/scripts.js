
// List of objects that describe different pokemon and their details.
let pokemonList = [
    {name: 'Farfetch\'d', height: 2.7, types: ['normal', 'flying']},
    {name: 'Ivysaur', height: 3.3, types: ['grass', 'poison']},
    {name: 'Sandile', height: 2.4, types: ['ground', 'dark']},
    {name: 'Metagross', height: 5.3, types: ['steel', 'psychic']},
    {name: 'Wyrdeer', height: 5.11, types: ['normal', 'psychic']},
    {name: 'Gyarados', height: 21, types: ['water', 'flying']}
]

// Loop for displaying the pokemon list in browser.
for (let i=0; i <= pokemonList.length; i++){

    // Condition to highlight unsually big pokemons in the list
    if (pokemonList[i].height >7){
        document.write (`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that\'s big!<br>`);
    } else {
        document.write (`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`);
    }
}
