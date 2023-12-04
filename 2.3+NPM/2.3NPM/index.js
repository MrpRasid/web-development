var generateName = require('sillyname');
var sillyName = generateName();



const superheroes = require('superheroes');
// superheroes.all;
// superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`I'm a ${superheroes.random()}.`);