/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data => console.log(data)) -- or we can be specfic about the needed data like using this function instead (.then(data => console.log(data.id,data.name, data.weight)))
.catch(error => console.error(error));
 */

/* ----------------------------------------------------------------------------------- */

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Couldn't fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error)); */

/* ------------------------------------------------------------------------------------------ */

fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
                throw new Error("Couldn't fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")
        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error){
        console.error(error);
    }
}