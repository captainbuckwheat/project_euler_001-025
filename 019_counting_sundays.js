/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

var the_calendar = function() {
	var calendar, i, j, d, l, day, num_days, num_days_in_month, month, num_sundays, leap_days, non_leap_days; 
	calendar = []; 
	num_sundays = 0;
	num_days = 0;
	leap_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
	non_leap_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
	for (i = 0; i < 101; i++) calendar[i] = [];
	for (i = 1900; i < 2001; i++) {
		calendar[i-1900] = [];
		if (leap_year(i) === true) {
			for (j = 0; j < 366; j++) calendar[i-1900][j] = 0;
		} else { 
			for (j = 0; j < 365; j++) calendar[i-1900][j] = 0;
		}
	}
	for (i = 0; i < 101; i++) { //calendar[y][d] = z where y is a year-1900 (0-100), d is the day from 0-366 and z is day of the month (1-31)
		month = 0;  // month
		day = 0; // day of year (0-366) and start day
		if (leap_year(i+1900) ) num_days_in_month = leap_days; 
		else { num_days_in_month = non_leap_days; }	
		for (l = 0; l < num_days_in_month.length; l++) { //12months
			for (j = 0; j < num_days_in_month[month]; j++) calendar[i][j+day] = j+1; 
			day+=num_days_in_month[month]; 
			month++;
		}
	}
	for (i = 0; i < 101; i++) {
		for (j = 0; j < calendar[i].length; j++) {
			num_days++; 
			if (calendar[i][j] === 1 && i > 0 && num_days % 7 === 0) num_sundays++;  
		}
	}
	return num_sundays; 
}

var leap_year = function(x){
	if (x % 4 === 0) {
		if (x % 400 === 0){
			return true; 
		} else if (x % 100 === 0){
			return false; 
		}
		return true; 
	} 
	return false;
};
