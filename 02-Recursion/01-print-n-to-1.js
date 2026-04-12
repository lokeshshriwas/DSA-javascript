// Print from n to 1;

function printNto1(num) {
  if (num == 0) return;
  console.log(num);
  num--;
  printNto1(num);
}

// printNto1(10);

// Print from 1 to n ;

function print1toN(num, base) {
  if (base > num) return;
  console.log(base);
  base++;
  print1toN(num, base);
}

// print1toN(10, 0);

// sum of N numbers

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

// console.log(sum(5))

// Sum of all element in an array
let arr = [12, 12, 13, 14, 45];
function sumAllElm(n) {
  if (n == arr.length - 1) return arr[n];
  return arr[n] + sumAllElm(n + 1);
}

// Sum all odd elements
function sumOddElm(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == arr.length - 1) return isOdd ? arr[n] : 0;
  return isOdd ? (arr[n] + sumOddElm(n+1)) : (0 + sumOddElm(n+1));
}

// Factorial using recursion 
function fRecursion(n){
    if(n == 1 || n == 0) return 1;
    return n * fRecursion(n-1)
}

console.log(fRecursion(1));