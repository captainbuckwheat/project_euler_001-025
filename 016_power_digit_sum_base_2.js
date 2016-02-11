//2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 2^1000?

var double = function(a){
	var carry, add, sum; 
	carry = ""; 
	sum = "";
	x = 1; 
	for (i = 0; i<a.length; i++){
		add = JSON.stringify(Number(a[a.length-x]) + Number(a[a.length-x]) + Number(carry));
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
};

var power_base_two = function(n){ 
	var i, d, power;	
	d = '2';
	if (n === 0){
		return "1";
	}
	for (i = 0; i < n-1; i++){ 
		d = double(d); 
	}
	return d; 
};

var power_digit_sum = function(n){
	var x, sum, i; 
	sum = 0;
	x = power_base_two(n); 
	for (i = 0; i<x.length; i++){
		sum = sum + Number(x[i]);
	}
	return sum; 
};

var test = function(){
	if (double("0")!=="0"){
		console.log('test #1 has failed'); 
	} else if (double("1")!=="2"){
		console.log('test #2 has failed'); 
	} else if (double("99")!=="198"){
		console.log('test #3 has failed');	
	} else if (power_base_two(1)!=="2"){
		console.log('test #4 has failed');
	} else if (power_base_two(0)!=="1"){
		console.log('test #5 has failed');
	} else if (power_base_two(10)!=="1024"){
		console.log('test #6 has failed');
	} else if (power_digit_sum(1)!==2){
		console.log('test #7 has failed');
	} else if (power_digit_sum(15)!==26){
		console.log('test #8 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
