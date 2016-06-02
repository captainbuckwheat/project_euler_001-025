/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

    3
   7 4
  2 4 6
 8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                                            75
                                           95 64
                                          17 47 82
                                         18 35 87 10
                                        20 04 82 47 65
                                       19 01 23 75 03 34
                                      88 02 77 73 07 63 67
                                     99 65 04 28 06 16 70 92
                                    41 41 26 56 83 40 80 70 33
                                   41 48 72 33 47 32 37 16 94 29
                                  53 71 44 65 25 43 91 52 97 51 14
                                 70 11 33 28 77 73 17 78 39 68 17 57
                                91 71 52 38 17 14 91 43 58 50 27 29 48
                               63 66 04 68 89 53 67 30 73 16 69 87 40 31
                             04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
  */
var z = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"

var rows = function(x) {
	var sum, row, string_x, i; 
	sum = 0;
	row = 0;
	for (i = 1; i<=x; i++){
		sum = sum + i; 
		row = row + 1;
		if (sum >= x) break;
		
	}
	return row;
	
};	

var the_grid = function(x) {
	var grid, i, a, z, row, x; 
	//a is row; i is character; z starts for a new row
	x = x.replace(/ /g , ",");
	x = x.split(","); // now x is a list separated by commas. 
	grid = [];
	row = rows(x.length);
	z = 0; 
	for (a = 0; a < row; a++) {
		grid[a] = [];
		for (i = 0; i <= a; i++) {
			grid[a][i] = Number(x[z]);
			z = z+1; 
		}; 
	};
	return grid; 
}

var max_path = function(z) {
	var grid, i, j, sum, new_sum, max; 
	grid = the_grid(z);
	sum = [];
	x = grid[0][0];
	sum[0] = x + grid[1][0]; 
	sum[1] = x + grid[1][1];
	new_sum = [];
	for (i = 2; i < grid.length; i++) {
		for (j = 1; j < grid[i].length-1; j++) {
			new_sum[j] = Math.max(sum[j-1], sum[j]) + grid[i][j];
		}
		new_sum[0] = sum[0] + grid[i][0];	
		new_sum[j] = sum[sum.length-1] + grid[i][grid[i].length-1];
		sum = new_sum.slice(); 
	}
	max = 0; 
	for (i = 0; i < new_sum.length; i++) if (new_sum[i] > max) max = new_sum[i];
	return max; 
}

var zz = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65"	
var test_max_path = function() {
	if (max_path(zz) !== 390) console.log("The test has failed.");
	else console.log("It works like a fkn clock!");
}
