/*Karakterek név szerinti sorba rendezése*/
function nevSorbaRendez(a, b) {
  var nameA = a.name.toLocaleUpperCase();
  var nameB = b.name.toLocaleUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}
StarWars.sort(nevSorbaRendez);

/*Karakterek magasság szerinti sorba rendezése, növekvő értékekkel*/
StarWars.sort(function(a, b) {
  return a.height - b.height;
});

/*Karakterek magasság szerinti sorba rendezése, csökkenő értékekkel*/
StarWars.sort(function(a, b) {
  return b.height - a.height;
});

/*Karakterek súly szerinti sorba rendezése, növekvő értékekkel*/
StarWars.sort(function(a, b) {
  return a.mass - b.mass;
});

/*Karakterek súly szerinti sorba rendezése, csökkenő értékekkel*/
StarWars.sort(function(a, b) {
  return b.mass - a.mass;
});

/*Karakterek csoportosítása nem szerint*/


/* Nem szerinti tömbbe rendezés
function filterMale(char) {
  if (char.gender === "male") {
    return true;
  }
}

function filterMaleGender() {
  genderMale = StarWars.filter(filterMale);
}

filterMaleGender();
console.log(genderMale);
*/

/*
Droid gender megcserélés, ki kellett venni.
for (var i = 0; i < StarWars.length; i++) {
  StarWars[i].gender = StarWars[i].gender.replace('n/a', 'droid');
}*/


/*General függvény, nem csoportosításra*/
function generalFilterFunction(array, gender) {
  var sortedByGender = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].gender == gender) {
      sortedByGender.push(array[i]);
    }
  }
  return sortedByGender;
}

/*generalFilterFunction(StarWars, 'male');*/



var checkboxDiv = document.querySelector('#checkboxDiv');
checkboxDiv.addEventListener('click', checkboxSelect);

function checkboxSelect() {
  var filteredArray = [];
  var male = document.querySelector('#Male');
  var female = document.querySelector('#Female');
  var droid = document.querySelector('#Droid');
  if (male.checked === true) {
    var males = generalFilterFunction(StarWars, 'male');
    filteredArray = filteredArray.concat(males);
  }
  if (female.checked === true) {
    var females = generalFilterFunction(StarWars, 'female');
    filteredArray = filteredArray.concat(females);
  }
  if (droid.checked === true) {
    var droids = generalFilterFunction(StarWars, 'droid');
    /*console.log(droids);*/
    filteredArray = filteredArray.concat(droids);
  }
  DisplayMaster(filteredArray);
}
