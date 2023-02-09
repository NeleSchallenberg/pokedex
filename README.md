## JavaScript App ##

A simple small **Pokédex** App to display a list of Pokémon and data points in detail.

- Built with ***HTML***, ***CSS***, and ***JavaScript***.
- Loads data from an external API.

-------------------------------------------------

Font: Outfit, sans-serif, regular & extra-bold
https://fonts.google.com/share?selection.family=Outfit:wght@400;800

----------------------

Features that I want to implement:

Search function:

//---------------------
    // TBC - Function to implement search button functionality - NOT WORKING!
    let inputField = document.querySelector('#search-bar')

    function searchPokemon(query) {
      return pokemonList.filter(function(pokemon) {
        let pokemonName = pokemon.name.toLowerCase();
        let lowerCaseQuery = query.toLowerCase();
        return pokemonName.startsWith(lowerCaseQuery);
      });
    }
    inputField.addEventListener('input', function() {
      let query = inputField.value;
      let filteredList = searchPokemon(query);
      if (filteredList.length === 0) {
        console.log('No pokemon found!')
      } else {
        filteredList.forEach(addListItem);
      }
    });
//-----------------------


https://github.com/NeleSchallenberg/simple-js-app