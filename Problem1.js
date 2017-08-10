// Find the sum of all multiples of 3 and 5 below 1000.

var sum = 0;

for(i = 1; i < 1000; i++) {
    if(i%5===0 || i%3===0) {
		sum = sum + i;
    }
};
