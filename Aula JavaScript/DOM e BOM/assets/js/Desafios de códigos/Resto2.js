let lines = gets().split('\n');

let N = parseInt(lines.shift());
for (let i = 0; i < 10000; i++) {
	if (i % N === 2) print(i);
}