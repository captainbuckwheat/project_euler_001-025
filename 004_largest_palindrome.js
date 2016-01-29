var largest_palindrome = function(){
	var a, i, h, palindrome, largest; 
	palindrome = [];
	h = 0;
	largest = -1;
	for (i = 10; i<100; i++){
		for (a = i; a<100; a++){
			p = i * a; 
			if (is_palindrome(p)===true){
				palindrome[h] = p; 
				if (p > largest){
					largest = p; 
				}
				h = h+1;
			} 
		}	
	}
	return largest;
}

var is_palindrome = function(x){
	var p, l, i;
	p = "" + x; 
	l = p.length;
	for (i = 0; i<=Math.floor(l/2); i++){
		if (p[i]===p[l-1]){
			l = l - 1; 
		}else{
			return false; 
		}
	}
	return true; 
}

var test = function(){
	if (largest_palindrome()!==9009){
		console.log('test has failed');
	} else {
		console.log('it works like a fkn clock!')
	}
};
