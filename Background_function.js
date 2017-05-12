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
StarWars.sort(function (a, b) {
  return a.height - b.height;
});

/*Karakterek magasság szerinti sorba rendezése, csökkenő értékekkel*/
StarWars.sort(function (a, b) {
  return b.height - a.height;
});

/*Karakterek súly szerinti sorba rendezése, növekvő értékekkel*/
StarWars.sort(function (a, b) {
  return a.mass - b.mass;
});

/*Karakterek súly szerinti sorba rendezése, csökkenő értékekkel*/
StarWars.sort(function (a, b) {
  return b.mass - a.mass;
});

/*Karakterek csoportosítása nem szerint*/
var genderMale = [];
var genderFemale = [];
var genderDroid = [];

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

/*General függvény, nem csoportosításra*/
function generalFilterFunction(array, gender) {
for (var i = 0; i < array.length; i++) {
  if (array[i].gender == gender) {
    switch (gender) {
      case "male":
        genderMale.push(array[i]);
        break;
      case "female":
        genderFemale.push(array[i]);
        break;
      default:
        genderDroid.push(array[i]);
    }
  }
}
}
