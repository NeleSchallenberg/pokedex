
// List of objects that describe different pokemon and their details, wrapped in an IIFE
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Function to return all items in pokemon list array
    function getAll() {
        return pokemonList;
    }

    // Function to add item to pokemon list under certain conditions
    function add(pokemon) {
        if (typeof pokemon === 'object' &&
        'name' in pokemon &&
        'height' in pokemon &&
        'types' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('Not a pokemon!');
        }
    }

    // Function to log pokemon details in the console
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    // Function to display list of pokemons with buttons
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('.button-styling');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        // Added event listener to button element
        button.addEventListener('click', function(event) {
            showDetails(pokemon)});
    }

    return {
        getAll,
        add,
        addListItem,
    }
}) ();

// Function to return all pokemon from the array
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});






// OLD CODE


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
