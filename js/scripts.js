
// IIFE with pokemon repository and link to API
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
        'name' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('Not a pokemon!');
        }
    }

    // Function to display list of pokemons with buttons
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        // Added Bootstrap utility class to list element
        listItem.classList.add('group-list-item', 'col', 'col-md-8', 'col-xl-6')
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('list-button', 'btn', 'btn-lg', 'btn-outline-secondary', 'btn-block', 'shadow-sm');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemon-card')
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        // Added event listener to button element
        button.addEventListener('click', function(event) {
            showDetails(pokemon);});
    }

    // Function to fetch complete list of pokemon from the API
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
            });
        }).catch(function(e) {
          console.error(e);
        })
    }

    // Function to load pokemon details
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

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon)
        });
    }

    // Function for displaying a modal with pokemon details on the screen
    function showModal(pokemon) {
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');

        // Emptying the modal content when a new card is opened
        modalTitle.empty();
        modalBody.empty();

        modalTitle.append(pokemon.name)

        let pokemonHeight = document.createElement('p');
        pokemonHeight.classList.add('pokemon-height');
        pokemonHeight.innerText = 'Height: ' + pokemon.height;

        modalBody.append(`<p class="pokemon-height>Height: ${pokemon.height}</p>`);
        modalBody.append(`<img class="pokemon-image" src="${pokemon.imageURL}">`)
    }    
    

    return {
        getAll,
        add,
        addListItem,
        loadList,
        loadDetails,
        showDetails,
    }
    
// End of IIFE
}) ();

// Called loadList function to render all pokemon from the server
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});





