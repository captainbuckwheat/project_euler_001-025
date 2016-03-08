/*
Using 022_data.txt (/Project-Euler/022_data.js), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
<script src="names.js"></script>
<script>
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letter_number = {}; 
for (i = 0; i<alphabet.length; i++) {
	letter_number[alphabet[i]] = i+1; 
}
names.sort();
var name_sum = function(x){
	var sum, i; 
	sum = 0; 
	for (i = 0; i<x.length; i++) {
		sum += letter_number[x[i]]; 
	}
	return sum; 
}
var sum_name_scores = function(z){
	var i, sum; 
	sum = 0; 
	for (i = 0; i < z.length; i++) {
		sum += name_sum(z[i])*(i+1);
	}
	return sum;
}
var test = function(){
	var our_names = ["AKSANA", "DUSTY", "JOSH", "NACHO"];
	if (letter_number["Z"] !== 26){
		console.log('test #1 has failed');
	} else if (sum_name_scores(our_names) !== 545){
		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
}
console.log(sum_name_scores(names)); 
</script>
