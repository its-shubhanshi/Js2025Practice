"use strict";

let heros = [
  ["ironman", "spiderman", "thor"],
  ["superwomen", "wonder women", "flash"],
  [1, 2, 33, 44, 55, 66],
];

console.log(heros);

for (let i = 0; i < heros.length; i++) {
  console.log(i, heros[i], heros[i].length);

  for (let j = 0; j < heros.length; j++) {
    console.log(j, heros[i][j]);
  }
}
