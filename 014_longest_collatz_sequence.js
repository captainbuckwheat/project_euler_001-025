/*The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var len = [];
var collatz_length = function(x){
	if (len[x]) {
        // do nothing
	} else if (x === 1) {
		 len[x] = 1; 
	} else {
		 len[x] = 1+collatz_length(collatz(x)); 
	}
	return len[x]; 
};

var collatz = function(x) {
	if (x%2 === 0){
		return x/2;
	} else {
		return 3 * x + 1;
	}
};

var largest_collatz = function(x){
	var len, max_len, i, starting; 
	max_len = 0; 
	for (i = 1; i < x; i++) {
		len = collatz_length(i); 
		if (len > max_len){
			max_len = len; 
			starting = i; 
		}
	}
	return starting; 
};

var testlc = function(){
	var f; 
	f = largest_collatz; 
	if (f(6)!==3) {
		console.log('test#1 has failed');
	} else if (f(7)!==6) {
		console.log('test#2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};

var testcl = function(){
	if (collatz_length(3)!==8) {
		console.log('test#1 has failed');
	} else if (collatz_length(1)!==1) {
		console.log('test#2 has failed');
	} else if (collatz_length(2)!==2) {
		console.log('test#3 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};

var testc = function(){
	if (collatz(3)!==10) {
		console.log('test#1 has failed');
	} else if (collatz(4)!==2) {
		console.log('test#2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
