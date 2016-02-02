// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2. 
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

var pythagorean_special_triplet = function(x){
	var a, b, c_sqr, sum;
	sum = 0; 
	for (a = 1; a < x; a++){
		for (b = a + 1; b < x; b++){
			c_sqr = Math.pow(a,2) + Math.pow(b,2);
			sum = Math.sqrt(c_sqr) + a + b; 
			if (sum === x){
				return a*b*Math.sqrt(c_sqr);
			}
		}
	}
};


var test = function(){
	if (pythagorean_special_triplet(12)!==60){
		console.log('test #1 has failed');
	} else if (pythagorean_special_triplet(1000)!==31875000){
		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
