// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var sum_of_multiples_3and5 =function(x){
	var sum,i;
	sum=0;
	for (i=0; i<x; i++){
		if (i%3===0){
			sum = sum+i;
		}else if (i%5===0){
			sum = sum+i;
		}else{
			sum = sum;
		}
	}
	return sum; 
};

var test = function(){
	if (sum_of_multiples_3and5(10)!==23){
		console.log("failed test");
	}else{
		console.log("works like a fkn clock!");
	}
};
