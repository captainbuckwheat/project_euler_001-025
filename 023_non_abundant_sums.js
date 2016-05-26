/* 
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis 
even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var factors = function(x) {
    var factors, i, a;
    factors = [];
    a = 0;
    for (i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            factors[a] = i;
            a = a + 1;
        }
    }
    return factors;
};

var sum_of_factors = function(z) {
    var i, sum;
    sum = 0;
    for (i = 0; i < z.length; i++) { sum += z[i]; }
    return sum;
}

var all_abundant = function(x) {
    var i, list, j;
    j = 0;
    list = [];
    for (i = 2; i <= x; i++) {
        if (sum_of_factors(factors(i)) > i) {
            list[j] = i;
            j++;
        }
    }
    return list;
} 

var all = all_abundant(28123);

var get_the_sum = function(x, num) {
	var i, j, list_a, sum, sum_a; 
	sum = 0; 
	list_a = [];
	for (i = 0; i < x.length; i++) {
		for (j = 0; j < x.length; j++) {
			sum_a = x[i]+x[j]; 
			if (sum_a < num) {
				list_a[sum_a] = true; 
			}
		}
	}
	for (i = 0; i < list_a.length; i++) if (list_a[i] !== true) sum+=i;
	return sum; 
}
