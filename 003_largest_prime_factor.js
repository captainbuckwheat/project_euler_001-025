//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var factors = function(x){
	var factors, i, a; 
	factors = []; 
	a = 0;
	for (i=1; i<=x/2; i++){
		if (x%i === 0){
			factors[a] = i;
			a = a + 1;
			if (x/i<=i){
				return factors;
			}
			factors[a] = x/i; 
			a = a + 1; 
		}
		
	}
	return factors;
}; 

var is_prime = function(x){
	var a;
	for (a=2; a<x; a++){
		if (x%a===0 && x>a){
			return false; 
		}
	} 
	if (factors(x).length === 2){
		return true;
	}
};

var largest_prime = function(x){
	var i, largest, a; 
	a = 0;
	f = factors(x);
	largest = -1;
	for (i=0; i < f.length; i++){
		if (is_prime(f[i]) === true){
			if (f[i]>largest){
				largest = f[i];
			};
			a = a + 1; 
		}
	}
	if (largest === -1){
		return undefined;
	}
	return largest;
};
var test = function(){
	if (largest_prime(2)!==2){
		console.log('test #1 has failed');
	} else if (largest_prime(13195)!==29){
		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
