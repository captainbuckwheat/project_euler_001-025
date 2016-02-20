/*
The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

var add = function(a,b){
	var carry, add, sum; 
	carry = ""; 
	sum = "";
	x = 1; 
	if (a.length > b.length){
		zeroes = a.length - b.length; 
		for (z = 0; z < zeroes; z++){
			b = "0" + b;
		}
	} else {
		zeroes = b.length - a.length; 
		for (z = 0; z < zeroes; z++){
			a = "0"+ a;
		}
	}
	for (i = 0; i<a.length; i++){
		add = JSON.stringify(Number(a[a.length-x]) + Number(b[b.length-x]) + Number(carry));
		carry = "0"; 
		if (add.length > 1){
			carry = add[0];
		} else {
			carry = '0';
		}
		sum = add[add.length-1] + sum;
		x = x + 1;  
	}
	if (carry !== '0'){
			sum = carry + sum; 
	}
	return sum; 
}

var fib = function(x) {
	var fn1, fn2, fn, n, i;
	fn1 = "1"; 
	fn2 = "1"; 
	n = 3; 
	while (true){
		fn = add(fn1,fn2); 
		if (fn.length >=x) {
			return n; 
		} else {
			fn1 = fn2; 
			fn2 = fn; 
			n = n + 1;
		}
	}
}

var test_fib = function() {
	var i, input, got, want, cases;
	cases = [
	    [1, 3],
	    [2, 7],
	    [3, 12],
	];
	for (i = 0; i < cases.length; i++) {
		input = cases[i][0];
		got = fib(input);
		want = cases[i][1];
		if (got !== want) {
			console.log("fib(" + input + "): got " + got + "; want " + want);
		} else { console.log('it works like a fkn clock!'); }
	} 
}
