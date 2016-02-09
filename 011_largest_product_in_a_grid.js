/*
In the 20×20 grid below, 
What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally)?

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
*/


var make_string = function(x){
	var z, string, i, a; 
	z = JSON.stringify(x);
	string = '';
	for (i = 0; i<x.length+1; i++) {
		if (z[i] === " "){
			string = string + z[i+1];
			i = i+1;  
		}
		else {
			string = string + z[i]; 
		}
	}
	return string; 
}

var grid = function (x, size) {
	var grid, i, a, z; 
	//a is row; i is character; z starts for a new row
	grid = [];
	z = 0;
	for (a = 0; a < size; a++) {
		grid[a] = [];
		for (i = 0; i < size; i++) {
			grid[a][i] = +x[2*i+z] * 10 + +x[2*i+z+1];
			//that works only for 2-digit numbers, should be changed accordingly. same with z = z+size*2
		} 
		z = z + size*2;	
		
	}
	return grid; 
}
var horizontal_product = function(x, size, num) {
	var g, i, a, largest_product, product; 
	g = grid(x, size);
	largest_product = 1; 
	for (a = 0; a < g[0].length; a++){
		//a is row; p marks the last character usable; i uses the characters for num
		for (p = 0; p <= g[0].length-num; p++) {
			product = 1;
			for (i = 0; i<num; i++){
				product = product * g[a][i+p]; 
				if (product > largest_product) {
					largest_product = product;
				}
			}
		}
	}
	return largest_product; 
}


var vertical_product = function(x, size, num){
	var g, i, a, largest_product, product; 
	g = grid(x, size);
	largest_product = 1; 
	for (i = 0; i<g[0].length; i++){
		// i is character; p marks the last character usable to start from, a is going through raws for num;
		for (p = 0; p <= g[0].length-num; p++){
			product = 1;
			for (a = 0; a < num; a++){
				product = product * g[a+p][i]; 
				if (product > largest_product) {
					largest_product = product;
				}
			}
		}
	}
	return largest_product; 
}

	
var diag1_product = function(x, size, num){
	var n, g, i, a, largest_product, product; 
	g = grid(x, size);
	largest_product = 1;
	//a is row; i is character; n keeps tarck of num; 
	for (a = 0; a <= g[0].length-num; a++){
		for (i = 0; i <= g[0].length-num; i++){
			product = 1;
			for (n = 0; n<num; n++){
				product = product * g[a+n][i+n]; 
				if (product > largest_product) {
					largest_product = product;
				}
			}
		}
	}
	return largest_product;
}

var diag2_product = function(x, size, num){
	var n, g, i, a, largest_product, product; 
	g = grid(x, size);
	largest_product = 1;
	for (a = 0; a <= g[0].length-num; a++){
		for (i = num-1; i <= g[0].length; i++){
			product = 1;
			for (n = 0; n<num; n++){
				product = product * g[a+n][i-n]; 
				if (product > largest_product) {
					largest_product = product;
				}
			}
		}
	}
	return largest_product;
}

var the_largest_product = function(x, size, num){
	var horizontal, vertical, diag1, diag2, the_largest;
	horizontal = horizontal_product(x, size, num); 
	vertical = vertical_product(x, size, num);
	diag1 = diag1_product(x, size, num); 
	diag2 = diag2_product(x, size, num); 
	the_largest = 0; 
	if (horizontal > the_largest) {
		the_largest = horizontal; 
	} 
	if (vertical > the_largest) {
		the_largest = vertical;
	}
	if (diag1 > the_largest) {
		the_largest = diag1;
	} 
	if (diag2 > the_largest) {		
		the_largest = diag2;
	}
	return the_largest; 
}

var test = function(){
	if (the_largest_product('01020304111213142122232431323334',4,2)!==1122) {
		console.log('test#1 has failed');
	} else if (the_largest_product('010101020202000000',3,3)!==8) {
		console.log('test#2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
