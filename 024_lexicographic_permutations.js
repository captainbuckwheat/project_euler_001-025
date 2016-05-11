/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

var perm = [];
var lexicographic_permutation = function(z) {
	var x, y, j, a;
	x = 3628800;
	for (i = 0; i < x; i++) perm[i]=[];
	for (j = 0; j < x; j++) {
		a = [0,1,2,3,4,5,6,7,8,9];
		perm[j][0] = a.splice(Math.floor(j/362880), 1)[0];
		y = j%362880;
		perm[j][1] = a.splice(Math.floor(y/40320), 1)[0];
		y = j%40320;
		perm[j][2] = a.splice(Math.floor(y/5040), 1)[0];
		y = j%5040; 
		perm[j][3] = a.splice(Math.floor(y/720), 1)[0];
		y = j%720;
		perm[j][4] = a.splice(y/120, 1)[0];
		y = j%120; 
		perm[j][5] = a.splice(y/24, 1)[0];
		y = j%24;
		perm[j][6] = a.splice(Math.floor(y/6), 1)[0];
		y = j%6; 
		perm[j][7] = a.splice(Math.floor(y/2), 1)[0];
		y = j%2;
		perm[j][8] = a.splice(y, 1)[0];
		y = j; 
		perm[j][9] = a.splice(0, 1)[0];
	}
	return perm[z];
};
