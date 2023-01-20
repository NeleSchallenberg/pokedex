
// IIFE with pokemon repository and link to API
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // getAll function to return all items in pokemon list array
    function getAll() {
        return pokemonList;
    }

    // add function to add item to pokemon list under certain conditions
    function add(pokemon) {
        if (typeof pokemon === 'object' &&
        'name' in pokemon
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
        button.classList.add('list-button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        // Added event listener to button element
        button.addEventListener('click', function(event) {
            showDetails(pokemon);});
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

    // Function displaying a modal with pokemon details on the screen
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function showModal(name, height, imageUrl) {
            let modalContainer = document.querySelector('#modal-container');
                modalContainer.innerHTML = '';
                
                // Creating and appending modal
                let modal = document.createElement ('div');
                modal.classList.add('modal');
                modalContainer.appendChild(modal);

                // Creating and appending modal content
                let closeButton = document.createElement ('button')
                closeButton.classList.add('close-button');
                closeButton.innerText = 'X'
                modal.appendChild(closeButton);
                // Closing modal with click on close button
                closeButton.addEventListener('click', hideModal);

                let pokemonName = document.createElement ('h2');
                pokemonName.classList.add('pokemon-name');
                pokemonName.innerText = item.name;
                modal.appendChild(pokemonName);

                let pokemonHeight = document.createElement ('p');
                pokemonHeight.classList.add('pokemon-height');
                pokemonHeight.innerText = 'Height: ' + item.height;
                modal.appendChild(pokemonHeight);

                let pokemonImage = document.createElement ('img');
                pokemonImage.classList.add('pokemon-image');
                pokemonImage.innerText = item.imageUrl;
                modal.appendChild(pokemonImage);

                modalContainer.classList.add('is-visible');

                //Function to hide modal
                function hideModal() {
                modalContainer.classList.remove('is-visible');
                }; 
        });

        // Function logging pokemon details in the console
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
        showDetails,
    }

}) ();

// Called loadList function to render all pokemon from the server
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});





