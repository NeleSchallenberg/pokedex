
// List of objects that describe different pokemon and their details.
let pokemonList = [
    {name: 'Farfetch\'d', height: 2.7, types: ['normal', 'flying']},
    {name: 'Ivysaur', height: 3.3, types: ['grass', 'poison']},
    {name: 'Sandile', height: 2.4, types: ['ground', 'dark']},
    {name: 'Metagross', height: 5.3, types: ['steel', 'psychic']},
    {name: 'Wyrdeer', height: 5.11, types: ['normal', 'psychic']},
    {name: 'Toxtricity', height: 5.3, types: ['electric', 'poison']}
]

// Loop for displaying the pokemon list in browser.
for (let i=0; i <= pokemonList.length; i++){
    document.write
        (`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`)
}
