/*If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

/* 
if 1,2,6 ---> sum = 3; if 3,7,8 ---> sum = 5; if 4,5,9 ---> sum = 4; 9+15+12 = 36
if 10 ---> sum = 3; if 20,30,80,90 ---> sum = 6; if 40,50,60 ---> sum = 5; if 70 ---> sum = 7; 
if 11,12 ---> sum = 6; if 13,14,18,19 ---> sum = 8; if 15,16 ---> sum = 7; if 17 ---> sum = 9; 
22 = 130
*/

	
var ones = function(x){
	var sum; 
	sum = 0; 
	x = Number(x);
 	if (x === 1 || x === 2 || x === 6){
		sum = sum + 3;
	} else if ( x === 3 || x === 7 || x === 8){
		sum = sum + 5;
	} else if ( x === 4 || x === 5 || x === 9){
		sum = sum + 4;
	}
	return sum; 
}; 

var tens = function(x){
	var string, add; 
	add = 0; 
	string = JSON.stringify(x); 
	if (Number(x) === 10){
		add = add + 3;
	} else if (string[0] === "1"){
		if (string[1] === "1" || string[1] === "2"){
			add = add + 6; 
		} else if (string[1]==="3" || string[1]==="4" || string[1]==="8" || string[1]==="9"){
			add = add + 8; 
		} else if (string[1]==="5" || string[1]==="6"){
			add = add + 7; 
		} else {
			add = add + 9;
		}
	} else {
		if (string[0] === "2" || string[0] === "3" || string[0] === "8" || string[0] === "9"){
			add = add + 6; 
		} else if (string[0]==="4" || string[0]==="5" || string[0]==="6" || string[0]==="9"){
			add = add + 5; 
		} else {
			add = add + 7; 
		}
	} 
	return add; 
};

var tens_and_ones = function (x){
	var string; 
	string = JSON.stringify(x); 
	return Number(tens(x) + ones(string[1]));
	
}; 

var hundreds = function(x){
	var string, add, and, p; 
	string = JSON.stringify(x); 
	add = 7;
	and = 3; 
	p = x - Number(string[0])*100; 
	if (string[1]==="0" && string[2]==="0"){
		add = ones(string[0]) + add; // 100 = one + hundred 
	} else if (string[1] === "0"){
		add = ones(string[0])+ add + and + ones(string[2]); // 101 = one + hundred + and + one
	} else if (string[2] === "0" || string[1] === "1"){
		add = ones(string[0])+ add + and + tens(p);// 120 = one + hundred + and + twenty
	} else {
		add = ones(string[0])+ add + and + tens_and_ones(p);
	}
	return add;
}
	
var sum; 
var letter_count = function(x){ //only counts till 1000 inclusive 
	var string1;
	sum = 0; 
	for (i = 1; i<=x; i++){
		len = JSON.stringify(i).length;
		if (len < 2){
			sum = sum + ones(i); 
		} else if (len < 3){
			string1 = JSON.stringify(i);
			if (string1[0] === "1" || string1[1] === "0"){
				sum = sum + tens(i); 
			} else {
				sum = sum + tens_and_ones(i); 
			}
		} else if (len < 4){
			sum = sum + hundreds(i);
		} else if (len < 5){ // only for 1000
			sum = sum + 11; 
		}
	}
	return sum;
};


var test = function() {
	if (letter_count(5) !== 19) {
		console.log('test #1 has failed'); 
	} else if (letter_count(13) !== 59) {
		console.log('test #2 has failed'); 
	} else if (letter_count(22) !== 130) {
		console.log('test #3 has failed'); 
	} else if (ones(2)!==3){
		console.log('test #4 has failed'); 
	} else if (tens_and_ones(23)!==11){
		console.log('test #5 has failed'); 
	} else if (hundreds(717)!==24){
		console.log('test #6 has failed'); 
	} else if (letter_count(1000)!==21124){
		console.log('test #7 has failed'); 
	}else {
		console.log('it works like a fkn clock!');
	}
};

test(); 

