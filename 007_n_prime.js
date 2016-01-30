// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var n_prime = function(n){
	var a, b, k, prime_count, divisor;
	prime_count = 1;
	b = 1; 
	while(prime_count < n+1){
		b = b+1;
		divisor = 0; 
		for (a = 1; a <= b; a++){
			q = q+1;
			if ( b%a === 0 ){
				divisor = divisor + 1;  
				if (divisor >=3){
					break;
				}
			}
		}
		if (divisor === 2){
			prime_count = prime_count + 1; 
		}
	} 
	return b; 
};

var test = function(){
	if (n_prime(6)!==13){
		console.log('test #1 has failed');
	} else if (n_prime(1)!==2){
		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!'); 
	}
};
