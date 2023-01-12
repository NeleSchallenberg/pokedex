
// List of objects that describe different pokemon and their details, wrapped in an IIFE.
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Farfetch\'d', height: 2.7, types: ['normal', 'flying']},
        {name: 'Ivysaur', height: 3.3, types: ['grass', 'poison']},
        {name: 'Sandile', height: 2.4, types: ['ground', 'dark']},
        {name: 'Metagross', height: 5.3, types: ['steel', 'psychic']},
        {name: 'Wyrdeer', height: 5.11, types: ['normal', 'psychic']},
        {name: 'Gyarados', height: 21, types: ['water', 'flying']}
    ]

    function add(pokemon) {
        if (pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('Not a pokemon!');
        }
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    }
    
}) ();

pokemonRepository.add(
    {name: 'Pidgeot', height: 4.11, types: ['normal', 'water']}
)

// Updated forEach loop to retireve pokemonList array
pokemonRepository.getAll().forEach(function(pokemon) {
    // document.write (`<p> ${pokemon.name} (height ${pokemon.height}) </p>`);

    let pokemonList = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
        button.innerText = 'pokemon.name';
        button.classList.add();
    li.appendChild(button);
    pokemonList.appendChild(li);
    }
);






/*

// Function with loop for displaying the pokemon list in browser.
function printArrayDetails() {
    for (let i=0; i <= pokemonList.length; i++){

        // Condition to highlight unsually big pokemons in the list
        if (pokemonList[i]?.height > 7.9){
            document.write (`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that\'s big!<br>`);
        } else {
            document.write (`${pokemonList[i]?.name} (height: ${pokemonList[i]?.height})<br>`);
        }
    }
}

printArrayDetails();

*/
