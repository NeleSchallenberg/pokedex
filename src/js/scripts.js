// IIFE with pokemon repository and link to API
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=500';

  // Function to return all items in pokemon list array
  function getAll() {
    return pokemonList;
  }

  // Function to add item to pokemon list under certain conditions
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
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
    listItem.classList.add('row', 'justify-content-center');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add(
      'list-button',
      'btn',
      'btn-lg',
      'btn-outline-secondary',
      'shadow-sm',
      'text-uppercase',
      'col-10',
      'col-md-6',
    );
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-card');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // Added event listener to button element
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  // Function to fetch complete list of pokemon from the API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to load pokemon details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.frontImageUrl = details.sprites.front_default;
        item.backImageUrl = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        let types = [];
        details.types.forEach(function (item) {
          types.push(item.type.name);
        });
        item.types = types.join(' & ');
        let abilities = [];
        details.abilities.forEach (function (item) {
          abilities.push(item.ability.name);
        })
        item.abilities = abilities.join(' / ');

      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to show details ins the modal
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Function for displaying a modal with pokemon details on the screen
  function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');

    // Emptying the modal content when a new card is opened
    modalTitle.empty();
    modalBody.empty();

    modalTitle.append(pokemon.name);
    modalBody.append(`<img class='pokemon-image-front mb-3' width=50% src='${pokemon.frontImageUrl}'>`);
    modalBody.append(`<img class='pokemon-image-back mb-3' width=50% src='${pokemon.backImageUrl}'>`);
    modalBody.append(`<p class='pokemon-height'>HEIGHT - ${pokemon.height}</p>`);
    modalBody.append(`<p class='pokemon-weight'>WEIGHT - ${pokemon.weight}</p>`);
    modalBody.append(`<p class='pokemon-types text-uppercase'>TYPE - ${pokemon.types}</p>`);
    modalBody.append(`<p class='pokemon-abilities text-uppercase'>${pokemon.abilities}</p>`)
  }

  // Function to filter through pokemon with search bar
  let searchBar = $(".form-control");
  searchBar.on("keypress", function () {
    let pokemonList = $(".pokemon-list");
    pokemonList.empty();
    getByName($(".form-control").val()).forEach(function (pokemon) {
      addListItem(pokemon);
    });
  });
  
  function getByName(search) {
    return pokemonList.filter(function (pokemon) {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
  };
  
// End of IIFE
})();
  
// Called loadList function to render all pokemon from the server
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});