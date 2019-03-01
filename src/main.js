window.onload = function () {
  showPokemons();
  calcTable();
};

let filterMenu = document.getElementById('filter-menu');
let chooseType = document.getElementById('choose-type');
let sort = document.getElementById('sort');

filterMenu.addEventListener('change', showFilter);
chooseType.addEventListener('change', changeTypeShow);
sort.addEventListener('change', changeOrderingShow);

function changeTypeShow() {
  filtrando();
  calcTable();
  showPokemons();
}

function changeOrderingShow() {
  showPokemons();
  ordering();
}

function getPokemons() {
  return POKEMON["pokemon"];
}

function showFilter() {
  let chooseFilter = filterMenu.value;
  if (chooseFilter === 'none') {
    chooseType.style.visibility = 'hidden';
  } else if (chooseFilter === 'type' || chooseFilter === 'weakness') {
    chooseType.style.visibility = 'visible';
  }
  showPokemons()
}

function filtrando() {
  let chooseFilter = filterMenu.value;
  let typeFilter = chooseType.value;
  let array = POKEMON["pokemon"];
  if (chooseFilter === 'type' && typeFilter != 'none') {
    let filtered = getPokemons().filter(tipo => tipo['type'].indexOf(typeFilter) >= 0);
    array = filtered;
  } else if (chooseFilter === 'weakness' && typeFilter != 'none') {
    let filtered = getPokemons().filter(tipo => tipo['weaknesses'].indexOf(typeFilter) >= 0);
    array = filtered;
  } else if (chooseFilter != 'none' && typeFilter === 'none') {
    array = POKEMON["pokemon"];
  }

  return array
}

function calcTable() {
  let calcTable = document.getElementById("calc-table");
  let candy = (filtrando().map((pokemon) => pokemon['candy_count'])).filter(value => value);
  let sortCandy = candy.sort(function (a, b) {
    return a - b;
  });
  let spawnChance = (filtrando().map((pokemon) => pokemon['spawn_chance']));
  let sortSpawnChance = spawnChance.sort(function (a,b){
    return a - b;
  })
  let spawnTime = (filtrando().map((pokemon) => pokemon['spawn_time']));
  let sortSpawnTime = spawnTime.sort(function (a,b){
    return a - b;
  })

    calcTable.innerHTML = `
  <tr>
      <th></th>
      <th>Candy</th>
      <th>Spawn Chance</th>
      <th>Spawn Time</th>
    </tr>
    <tr>
      <th>Mín</th>
      <th>${sortCandy[0]}</th>
      <th>${sortSpawnChance[0]} %</th>
      <th>${sortSpawnTime[0]}</th>
    </tr>
    <tr>
      <th>Média</th>
      <th id="med-candy"></th>
      <th id="med-spawn-chance"></th>
      <th id="med-spawn-time"></th>
    </tr>
    <tr>
      <th>Máx</th>
      <th>${sortCandy[sortCandy.length - 1]}</th>
      <th>${sortSpawnChance[sortSpawnChance.length - 1]} %</th>
      <th>${sortSpawnTime[sortSpawnTime.length - 1]}</th>
    </tr>`
}

function ordering() {
  let sortOption = sort.value;
  let ordered = filtrando().sort(function (a, b) {

    if (a[sortOption] < b[sortOption]) {
      return -1;
    }
    if (a[sortOption] > b[sortOption]) {
      return 1;
    }
    if (!a[sortOption]) {
      return 1;
    }
    if (!b[sortOption]) {
      return -1;
    }
    return 0;
  })

  return ordered
}

function showPokemons() {
  let pokemonDiv = document.getElementById("pokemons-div")
  pokemonDiv.innerHTML = `
    ${ordering().map((pokemon) => `
    <div>
        <img src="${pokemon["img"]}"
        <h3>${pokemon["name"]}</h3>
        <p>${pokemon["num"]}</p>
      <div>${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
      </div>
      ${pokemon["candy_count"] ? `<p>Evolve: ${pokemon["candy_count"]} candy</p>` : ''}
      <p>Spawn-Chance: ${pokemon["spawn_chance"]}%</p>
      <p>Spawn-Time: ${pokemon["spawn_time"]}</p>
      </div >
      
      `).join('')}
      `
}



