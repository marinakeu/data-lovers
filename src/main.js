window.onload = function () {
  showPokemons();
};

let filterMenu = document.getElementById('filter-menu');
let chooseType = document.getElementById('choose-type');
let chooseWeakness = document.getElementById('choose-weakness');

function showFilter(){
  let chooseFilter = filterMenu.value;  
  if(chooseFilter === 'none'){
    chooseType.style.visibility = 'hidden';
    chooseWeakness.style.visibility = 'hidden';    
  } else if(chooseFilter === 'type'){    
    chooseType.style.visibility = 'visible';
    chooseWeakness.style.visibility = 'hidden';
  } else if(chooseFilter === 'weakness'){    
    chooseWeakness.style.visibility = 'visible';
    chooseType.style.visibility = 'hidden';
  }
  showPokemons()
}

filterMenu.addEventListener('change', showFilter);

function getPokemons() {
  return POKEMON["pokemon"];
}

function filtrando() {
  console.log('entrou filtrando');
  let chooseFilter = filterMenu.value;
  let typeFilter = chooseType.value;
  let array =  POKEMON["pokemon"];
  if(chooseFilter === 'type' && typeFilter != 'none'){
    console.log('entrou filtrando por tipo');
    console.log(typeFilter);
    let filtered = getPokemons().filter(tipo => tipo['type'].indexOf(typeFilter) >= 0)  ;
    console.log(filtered);
    array = filtered;
  } else if(chooseFilter === 'type' && typeFilter === 'none'){
    console.log('entrou filtrando none');
    array = POKEMON["pokemon"];
  } 

  console.log(array);
  return array
}

chooseType.addEventListener('change', filtrando);

function showPokemons() {
  console.log('entrou SHOWPOKEMONS');
  let pokemonDiv = document.getElementById("pokemons-div")
  pokemonDiv.innerHTML = `
    ${filtrando().map((pokemon) => `
    <div>
        <img src="${pokemon["img"]}"
        <h3>${pokemon["name"]}</h3>
        <p>${pokemon["num"]}</p>
        <div>${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
        </div>
          <p>Evolve: ${pokemon["candy_count"]} candy</p>       
        <p>Spawn-Chance: ${pokemon["spawn_chance"]}%</p>
        <p>Spawn-Time: ${pokemon["spawn_time"]}</p>
      </div>
        
      `).join('')}
      `
}

chooseType.addEventListener('change', showPokemons);

