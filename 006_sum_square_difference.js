// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sum_sq_first_n = function(n){
	var i, sum; 
	sum = 0;
	for (i = 1; i <= n; i++){
		sum = sum + (i*i); 
	}
	return sum; 
}
var sq_sum_first_n = function(n){
	var i, sum; 
	sum = 0; 
	for (i = 1; i <= n; i++){
		sum = sum + i; 
	}
	return sum*sum; 
}
var difference = function(n){
	return sq_sum_first_n(n) - sum_sq_first_n(n);
}

var test = function(){
	if (difference(10)!==2640){
		console.log('test has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
}
