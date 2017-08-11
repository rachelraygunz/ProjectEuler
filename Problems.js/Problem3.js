// What is the largest prime factor of 600,851,457,143?

var Q = 600851457143;
var n = 600851475143;
var largestPF = 0;

while (n % 2 === 0) {
  largestPF = 2;
  n /= 2;
}

for (var i = 3; i <= Math.sqrt(n); i += 2) {
  while (n % i === 0) {
    largestPF = i;
    n /= i;
  }
}

if (n > 2) {
  largestPF = n;
}

console.log('The largest prime factor of ' + Q + ' is ' + largestPF + '.');
