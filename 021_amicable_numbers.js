/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/
var factors = function(x){
	var factors, i, a; 
	factors = []; 
	a = 0;
	for (i=1; i<=x/2; i++) {
		if (x%i === 0){
			factors[a] = i;
			a = a + 1;
		}
	}
	return factors;
}; 

factor_sum = function(a){
	var sum, len, i;
	sum = 0; 
	len = factors(a).length; 
	for (i=0; i<len; i++) {
		sum = sum + factors(a)[i];
	}
	return sum; 
}

is_amicable = function(a){
	if (factor_sum(a) !== a && factor_sum(factor_sum(a)) === a) {
		return true;
	}
}
amicable_sum = function(x){
	var sum, i; 
	sum = 0; 
	for (i = 1; i<x; i++) {
		if (is_amicable(i) === true) {
			sum = sum + i; 
		} 
	}
	return sum; 
}

var test = function(){
	if (is_amicable(6)=== true){ console.log('test #1 has failed');
	} else if (is_amicable(220)!== true){ console.log('test #2 has failed');
	} else if (amicable_sum(1000)!== 504){ console.log('test #3 has failed');
	} else { console.log('it works like a fkn clock!'); 
	}
}
