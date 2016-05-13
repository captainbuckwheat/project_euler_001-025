/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/
var factorial = function(x) { // for positive numbers only. 
	var i, fact; 
	fact = 1;
	for (i = 2; i <= x; i++) fact*=i; 
	return fact; 
}
var perm = [];
var lexicographic_permutation = function(start, finish, index) { //consecutive numbers  
	var x, y, j, a, len, prev_factorial;
	len = finish - start + 1; 
	x = index + 1;
	a = [];
	for (i = 0; i < x; i++) perm[i]=[];
	for (j = 0; j < x; j++) {
		prev_factorial = 1; 
		for (k = start; k <= finish; k++) a[k] = k; 
		perm[j][start] = a.splice(Math.floor(j/factorial(len-prev_factorial)), 1)[0];
		y = j%factorial(len-prev_factorial);
		prev_factorial++;
		for (k = start+1; k <= finish; k++){
			perm[j][k] = a.splice(Math.floor(y/factorial(len-prev_factorial)), 1)[0];
			y = j%factorial(len-prev_factorial);
			prev_factorial++;
		}
	}
	return perm[index-1];
};


