let lines = gets().split("\n");


let line = lines.shift().split(' ');

//escreva aqui o seu código
var T1 = parseInt( line[ 0 ] );
var T2 = parseInt( line[ 1 ] );
var T3 = parseInt( line[ 2 ] );
var T4 = parseInt( line[ 3 ] );

var totalAparelhos = ( ( T1 + T2 + T3 + T4 ) - 3 );

console.log( totalAparelhos );