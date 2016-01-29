var smallest_multiple = function(z){
	var count, i, k; 
	k = z;                            
	while (true) {
		count = 0; //number of devisors of z from 1 to i
		for (i = 1; i <= k; i++){                    
			if (z%i === 0){							
				count = count + 1; 					
				if (count === k){
					return z;
				}
			} else {
				break;
			}
		}
		z = z + k;
	}
};

var test = function(){
	if (smallest_multiple(2)!==2){
		console.log('test #1 has failed');
	} else if (smallest_multiple(10)!==2520){
		console.log('test #2 has failed');
	} else {
		console.log('it works like a fkn clock!');
	}
};
