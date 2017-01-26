// Łańcuchy znaków

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
		animal = 'Zielone słonie';

var upperAnimal = animal.toUpperCase();
var replaceText = text.replace('Papugi', upperAnimal);
var halfText = replaceText.length / 2;
var textSliced = replaceText.slice(0, halfText);

console.log(textSliced);


