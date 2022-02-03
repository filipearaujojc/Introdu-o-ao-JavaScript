let lines = gets().split('\n');

var N = parseInt(lines.shift());
for ( n = 2; n <= N; n++) {
	if ( n % 2 ===0) print(`${n}^2 = ${Math.pow(n, 2)}`);    //escreva sua lógica nos espaços em branco
}