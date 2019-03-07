window.onload = function () {
  showPokemons();
  calcTable();
};

let filterMenu = document.getElementById('filter-menu');
let chooseType = document.getElementById('choose-type');
let sort = document.getElementById('sort');

filterMenu.addEventListener('change', changeFilterShow);
chooseType.addEventListener('change', changeTypeShow);
sort.addEventListener('change', changeOrderingShow);

function changeTypeShow() {
  filtrando();
  calcTable();
  showPokemons();
}

function changeOrderingShow() {
  ordering();
  showPokemons();
}

function changeFilterShow() { 
  showFilter();
  calcTable();
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
  let sumCandy = candy.reduce((acc, cur) => acc + cur);
  let medCandy = parseInt(sumCandy / candy.length);
  
  let spawnChance = (filtrando().map((pokemon) => pokemon['spawn_chance'])).filter(value => value > 0);
  let sortSpawnChance = spawnChance.sort(function (a,b){
    return a - b;
  })
  let spawnSum = spawnChance.reduce((acc, cur) => acc + cur);
  let spawnChanceMed = parseFloat(spawnSum / spawnChance.length).toFixed(3) ;
  
  let spawnTime = (filtrando().map((pokemon) => pokemon['spawn_time'])).filter(value => value !== "N/A");
  let sortSpawnTime = spawnTime.sort(function (a,b){
    return a - b;
  })

   for (times of spawnTime){
    let a = times.split(':');
    var seconds = (+a[0]) * 60 + (+a[1]);
    var totalSeconds = 0;
    totalSeconds += seconds;
    console.log("total de segundos" + totalSeconds);
  }
  let spawnTimeMed = parseInt(totalSeconds / spawnTime.length) ;
  let spawnTimeMedMin = Math.floor(spawnTimeMed / 60);
  let spawnTimeMedSec = spawnTimeMed - spawnTimeMedMin * 60; 
  console.log('spawn time media' + spawnTimeMed);
  console.log("total de segundos fora do for " + totalSeconds);
  
  // let spawnTimeSum = spawnTime.reduce((acc, cur) => acc + cur);
  // let spawnTimeMed = spawnTimeSum / spawnTime.length ;
  // console.log("aqui eh o array do spawn " + typeof(spawnTime[0]));
  // console.log("aqui eh a SOMA do spawn " + spawnTimeSum);
  // console.log("aqui eh a MEDIA do spawn " + spawnTimeMed);



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
      <th id="med-candy">${medCandy}</th>
      <th id="med-spawn-chance">${spawnChanceMed} %</th>
      <th id="med-spawn-time">${spawnTimeMedMin}:${spawnTimeMedSec}</th>
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
  let pokemonDiv = document.getElementById("pokemons-container")
  pokemonDiv.innerHTML = `
    ${ordering().map((pokemon) => `
    <div class="pokemons-card">
        <p class="card-img"><img src="${pokemon["img"]}"</p>
        <h2 class="card-name">${pokemon["name"]}</h3>
        <p class="card-num">${pokemon["num"]}</p>
      <div class="card-type">${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
      </div>
      ${pokemon["candy_count"] ? `<p class="card-candy">Evolve: ${pokemon["candy_count"]} candy</p>` : ''}
      <p class="card-spawn-chance">Spawn-Chance: ${pokemon["spawn_chance"]}%</p>
      <p class="card-spawn-time">Spawn-Time: ${pokemon["spawn_time"]}</p>
      </div >
      
      `).join('')}
      `
}



