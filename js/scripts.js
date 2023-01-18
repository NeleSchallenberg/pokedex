
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

    // addListItem function to display list of pokemons with buttons
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

    // loadList function to fetch complete list of pokemon from the API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
          console.error(e);
        })
    }

    // loadDetails function to get pokemon details
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // showDetails function to log pokemon details in the console
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function(){
            console.log(item);
        });
    }

    return {
        getAll,
        add,
        addListItem,
        loadList,
        loadDetails,
    }
}) ();

// Called loadList function to render all pokemon from the server
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
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
