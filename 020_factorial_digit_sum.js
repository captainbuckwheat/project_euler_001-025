/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/



var factorial_digit_sum = function(x) {
	var i, j, factor_1, factor_2, sum; 
	factor_1 = JSON.stringify(1); 
	factor_2 = JSON.stringify(1);
	sum = 0;  
	for (i = 1; i < x; i++) { 					
		for (j = 0; j < i; j++) factor_2 = add(factor_2,factor_1); 
		factor_1 = factor_2;						
	}
	for (i = 0; i < factor_1.length; i++) sum = sum+Number(factor_1[i]);
	return sum; 
}

var add = function(a,b){
	var carry, add, sum, zeroes, z, x, i; 
	carry = ""; 
	sum = "";
	x = 1; 
	if (a.length > b.length) {
		zeroes = a.length - b.length; 
		for (z = 0; z < zeroes; z++) b = "0" + b;
	} else {
		zeroes = b.length - a.length; 
		for (z = 0; z < zeroes; z++) a = "0"+ a;
	}
	for (i = 0; i < a.length; i++) {
		add = JSON.stringify(Number(a[a.length-x]) + Number(b[b.length-x]) + Number(carry));
		carry = "0"; 
		if (add.length > 1) carry = add[0];
		else carry = '0';
		sum = add[add.length-1] + sum;
		x = x + 1;  
	}
	if (carry !== '0') sum = carry + sum; 
	return sum; 
}

var test = function() {
	if (add("8","13")!=="21") console.log('test #1 has failed');
	else if (add("999", "999")!=="1998") console.log('test #2 has failed');
	else if (add("123412341234123412341234", "123412341234123412341234") !== "246824682468246824682468") console.log('test #3 has failed'); 
	else 	console.log ('it works like a fkn clock!');
}
