//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

// I took the algorithm from https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var sum_primes = function(n){
	var A, sum, i, j; 
	A = [];
	sum = 0;
	for (i = 2; i <= n; i++){
		A[i] = true;
	}
	for (i = 2; i <= Math.sqrt(n); i++){
		if (A[i]){
			for (j = i*i; j <= n; j = j + i){
				A[j] = false; 
			}
		}
	}
	for (i=2; i<n; i++){
		if (A[i]) {
			sum = sum + i;
		}
	}
	return sum; 
}

var test = function(n){
	if (sum_primes(10)!==17){
 		console.log('test #1 has failed');
	} else if (sum_primes(3)!==2){
 		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
