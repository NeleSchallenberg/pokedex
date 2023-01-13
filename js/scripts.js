
// List of objects that describe different pokemon and their details, wrapped in an IIFE
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Farfetch\'d', height: 2.7, types: ['normal', 'flying']},
        {name: 'Ivysaur', height: 3.3, types: ['grass', 'poison']},
        {name: 'Sandile', height: 2.4, types: ['ground', 'dark']},
        {name: 'Metagross', height: 5.3, types: ['steel', 'psychic']},
        {name: 'Wyrdeer', height: 5.11, types: ['normal', 'psychic']},
        {name: 'Gyarados', height: 21, types: ['water', 'flying']}
    ]

// Function to return all items in pokemon list array
    function getAll() {
        return pokemonList;
    }

// Function to add item to pokemon list under certain conditions
    function add(pokemon) {
        if (pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('Not a pokemon!');
        }
    }
    
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = (pokemon.name);
        button.classList.add('.button-styling');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
        getAll,
        add,
        addListItem,
    }
}) ();

console.log(pokemonRepository.getAll());

pokemonRepository.add( {name: 'Pidgeot', height: 4.11, types: ['normal', 'water']} );
console.log(pokemonRepository.getAll());








// OLD CODE


// pokemonRepository.getAll().forEach (function(pokemon) 

// pokemonRepository.getAll().forEach(function(pokemon) {
//     addListItem(pokemon {
//         name: 'Pidgeot', height: 4.11, types: ['normal', 'water']})

// });





// // Updated forEach loop to retrieve pokemonList array
// pokemonRepository.getAll().forEach(function(pokemon) {

//     let pokemonList = document.querySelector('.pokemon-list');
//     let listItem = document.createElement('li');

//     let button = document.createElement('button');
//         button.innerText = (pokemon.name);
//         button.classList.add('.button');

//     listItem.appendChild(button);
//     pokemonList.appendChild(listItem);
//     }
// );



// Old code from Exercise 1.5
    // document.write (`<p> ${pokemon.name} (height ${pokemon.height}) </p>`);


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
