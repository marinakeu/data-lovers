window.onload = function () {
  showPokemons();
  calcTable();
  totalTable();
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
  totalTable();
  showPokemons();
}

function changeOrderingShow() {
  // ordering();
  showPokemons();
}

function changeFilterShow() {
  showFilter();
  calcTable();
  totalTable();
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

function totalTable() {
  let totalTable = document.getElementById('total-number');
  let total = filtrando().length;
  totalTable.innerHTML = `${total}`
}

function calcTable() {
  let calcTable = document.getElementById("calc-table");

  let printMinCandy = 0;
  let printMedCandy = 0;
  let printMaxCandy = 0;
  let candy = (filtrando().map((pokemon) => pokemon['candy_count'])).filter(value => value);
  if (candy.length > 0) {
    let sortCandy = candy.sort(function (a, b) {
      return a - b;
    });
    printMinCandy = sortCandy[0]
    let sumCandy = 0;
    sumCandy = candy.reduce((acc, cur) => acc + cur);
    printMedCandy = parseInt(sumCandy / candy.length);
    printMaxCandy = sortCandy[sortCandy.length - 1];
  }

  let printMinSpawnChance = 0;
  let printMedSpawnChance = 0;
  let printMaxSpawnChance = 0;
  let spawnChance = (filtrando().map((pokemon) => pokemon['spawn_chance'])).filter(value => value > 0);
  if (spawnChance.length > 0) {
    let sortSpawnChance = spawnChance.sort(function (a, b) {
      return a - b;
    })
    let spawnSum = 0;
    if (spawnChance.length > 0) { spawnSum = spawnChance.reduce((acc, cur) => acc + cur) };
    printMinSpawnChance = sortSpawnChance[0];
    printMedSpawnChance = parseFloat(spawnSum / spawnChance.length).toFixed(3);
    printMaxSpawnChance = sortSpawnChance[sortSpawnChance.length - 1];
  }


  let printMinSpawnTimeMin = '00';
  let printMinSpawnTimeSec = '00';
  let printMedSpawnTimeMin = '00';
  let printMedSpawnTimeSec = '00';
  let printMaxSpawnTimeMin = '00';
  let printMaxSpawnTimeSec = '00';
  let spawnTime = (filtrando().map((pokemon) => pokemon['spawn_time'])).filter(value => value !== "N/A");
  if (spawnTime.length > 0) {
    let secondsArray = [];
    for (times of spawnTime) {
      let a = times.split(':');
      let seconds = (+a[0]) * 60 + (+a[1]);
      secondsArray.push(seconds);
    }

    let sortSpawnTime = secondsArray.sort(function (a, b) {
      return a - b;
    })

    let minSpawnTime = parseInt(sortSpawnTime[0]);
    minSpawnTimeMin = Math.floor(minSpawnTime / 60);
    if (minSpawnTimeMin < 10) {
      printMinSpawnTimeMin = '0' + minSpawnTimeMin;
    } else {
      printMinSpawnTimeMin = minSpawnTimeMin;
    }

    minSpawnTimeSec = minSpawnTime - minSpawnTimeMin * 60;
    if (minSpawnTimeSec < 10) {
      printMinSpawnTimeSec = '0' + minSpawnTimeSec;
    } else {
      printMinSpawnTimeSec = minSpawnTimeSec;;
    }

    let sumSpawnTime = secondsArray.reduce((acc, cur) => acc + cur);
    let spawnTimeMed = parseInt(sumSpawnTime / spawnTime.length);
    let medSpawnTimeMin = Math.floor(spawnTimeMed / 60);
    if (medSpawnTimeMin < 10) {
      printMedSpawnTimeMin = '0' + medSpawnTimeMin;
    } else {
      printMedSpawnTimeMin = medSpawnTimeMin;
    }

    let medSpawnTimeSec = spawnTimeMed - medSpawnTimeMin * 60;
    if (medSpawnTimeSec < 10) {
      printMedSpawnTimeSec = '0' + medSpawnTimeSec;
    } else {
      printMedSpawnTimeSec = medSpawnTimeSec;
    }

    let maxSpawnTime = sortSpawnTime[sortSpawnTime.length - 1];
    let maxSpawnTimeMin = Math.floor(maxSpawnTime / 60);
    if (maxSpawnTimeMin < 10) {
      printMaxSpawnTimeMin = '0' + maxSpawnTimeMin;
    } else {
      printMaxSpawnTimeMin = maxSpawnTimeMin;
    }

    maxSpawnTimeSec = maxSpawnTime - maxSpawnTimeMin * 60;
    if (maxSpawnTimeSec < 10) {
      printMaxSpawnTimeSec = '0' + maxSpawnTimeSec;
    } else {
      printMaxSpawnTimeSec = maxSpawnTimeSec;
    }
  }

  calcTable.innerHTML = `
  <tr>
      <th></th>
      <th>Candy</th>
      <th>Spawn Chance</th>
      <th>Spawn Time</th>
    </tr>
    <tr>
      <th>Mín</th>
      <th>${printMinCandy}</th>
      <th>${printMinSpawnChance} %</th>
      <th>${printMinSpawnTimeMin}:${printMinSpawnTimeSec}</th>
    </tr>
    <tr>
      <th>Média</th>
      <th id="med-candy">${printMedCandy}</th>
      <th id="med-spawn-chance">${printMedSpawnChance} %</th>
      <th id="med-spawn-time">${printMedSpawnTimeMin}:${printMedSpawnTimeSec}</th>
    </tr>
    <tr>
      <th>Máx</th>
      <th>${printMaxCandy}</th>
      <th>${printMaxSpawnChance} %</th>
      <th>${printMaxSpawnTimeMin}:${printMaxSpawnTimeSec}</th>
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
      ${pokemon["candy_count"] ? `<p class="card-candy">Candy to evolve: <span class="candy-value">${pokemon["candy_count"]}</span></p>` : ''}
      <div class="card-spawn">
        <div class="card-spawn-chance">
          <p class="spawn-chance-title">Spawn Chance</p>
          <p class="spawn-chance-value">${pokemon["spawn_chance"]}%</p>
        </div>
        <div class="card-spawn-time">
          <p class="spawn-time-title">Spawn Time</p>
          <p class="spawn-time-value">${pokemon["spawn_time"]}</p>
        </div>
      </div>
    </div >
      
      `).join('')}
      `
}



