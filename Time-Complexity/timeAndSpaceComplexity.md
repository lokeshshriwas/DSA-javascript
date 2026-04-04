```markdown
# Understanding Time and Space Complexity in JavaScript

![Algorithm complexity banner](https://www.interviewbit.com/blog/wp-content/uploads/2021/08/Big-0-Complexity-Chart-1024x698.png)

## Table of Contents

- [Introduction](#introduction)
- [Big O Notation](#big-o-notation)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Analyzing JavaScript Code](#analyzing-javascript-code)
- [Common JavaScript Operations](#common-javascript-operations)
- [Optimization Techniques](#optimization-techniques)
- [Practice Problems](#practice-problems)

## Introduction

Ever wondered why some algorithms feel blazing fast while others crawl to a halt when given large inputs? Or why your JavaScript app crashes with an "out of memory" error? Welcome to the fascinating world of **time and space complexity** – the secret language of algorithm efficiency.

![Fast vs slow algorithms visualization](https://assets.digitalocean.com/articles/alligator/js/big-o-notation/o-complexity.png)

Think of complexity analysis as the speedometer and fuel gauge for your code. Time complexity tells you how execution time grows as input size increases, while space complexity reveals how memory usage scales.

```javascript
// Which is more efficient?
function findMax1(arr) {
  return Math.max(...arr); // One approach
}

function findMax2(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max; // Another approach
}
```

By the end of this guide, you'll know exactly which function above is more efficient and why!

## Big O Notation

Big O notation is our measuring stick for algorithm efficiency. It describes the worst-case scenario of how runtime or space requirements grow as input size increases.

![Big O complexity chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

The most common complexities, from most efficient to least:

| Notation | Name | Description |
|----------|------|-------------|
| O(1) | Constant | Runtime doesn't change with input size |
| O(log n) | Logarithmic | Runtime grows logarithmically |
| O(n) | Linear | Runtime grows linearly with input |
| O(n log n) | Log-linear | Slightly worse than linear |
| O(n²) | Quadratic | Runtime grows with square of input |
| O(2^n) | Exponential | Runtime doubles with each addition to input |


### JavaScript Example

```javascript
// O(1) - Constant time
function getFirst(arr) {
  return arr[0];
}

// O(log n) - Logarithmic time
function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(sortedArr[mid] === target) return mid;
    if(sortedArr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

## Time Complexity

Time complexity measures how the runtime of an algorithm grows as the input size increases.

### O(1) - Constant Time

Operations that take the same amount of time regardless of input size.


```javascript
function isEven(num) {
  return num % 2 === 0;
}

// JavaScript object property access is O(1)
const user = { name: 'John', age: 30 };
const age = user.age; // O(1) operation
```

### O(log n) - Logarithmic Time

Algorithms that reduce the problem size by a fraction (usually half) in each step.

![Binary search visualization](https://substackcdn.com/image/fetch/$s_!a13N!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F085f8506-6328-4002-9b58-abf868145335_906x721.png)

```javascript
// Binary search on a sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) return true;
    if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
```

### O(n) - Linear Time

Runtime grows linearly with input size.

![Linear time visualization](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

```javascript
function sumArray(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// forEach, map, filter, reduce - all O(n)
arr.forEach(item => console.log(item));
```

### O(n log n) - Linearithmic Time

Common in efficient sorting algorithms.

![Merge sort visualization](https://wat-images.s3.ap-south-1.amazonaws.com/images/course/xvs8oq6ma9fn/Divide_And_Conquer_8.jpg)

```javascript
// JavaScript's built-in sort is O(n log n)
arr.sort((a, b) => a - b);

// Merge sort implementation
function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

### O(n²) - Quadratic Time

Nested iterations over the input.

![Bubble sort visualization](https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bubblesort-edited-color.svg/1200px-Bubblesort-edited-color.svg.png)

```javascript
// Bubble sort
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}

// Finding all pairs in an array
function findAllPairs(arr) {
  const pairs = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}
```


### O(2^n) - Exponential Time

Runtime doubles with each addition to the input size. Often seen in recursive algorithms without memoization.

![Fibonacci recursion tree](https://namastedev.com/blog/wp-content/uploads/2025/09/Screenshot-2025-09-25-at-4.25.19%E2%80%AFPM.png)

```javascript
// Classic fibonacci without memoization
function fibonacci(n) {
  if(n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
```

## Space Complexity

Space complexity measures how memory usage grows with input size.


### JavaScript Memory Model

JavaScript manages memory through:
1. **Stack** - Stores primitive values and references
2. **Heap** - Stores objects, arrays, and functions

![JavaScript memory model](https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/5a190/stack-heap-pointers.png)

```javascript
// Stack memory usage
let a = 5; // One number on stack
let b = "hello"; // One string reference on stack, string in heap
let c = true; // One boolean on stack

// Heap memory usage
let arr = new Array(10000); // Large array in heap
let obj = { data: new Array(10000) }; // Object with large array in heap
```

### O(1) - Constant Space

Memory usage doesn't increase with input size.


```javascript
function findMax(arr) {
  let max = arr[0]; // Single variable regardless of input size
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max;
}
```

### O(n) - Linear Space

Memory usage grows linearly with input size.


```javascript
function doubleArray(arr) {
  const result = []; // New array will grow with input size
  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

// Array methods that create new arrays
const doubled = arr.map(x => x * 2); // O(n) space
const filtered = arr.filter(x => x > 5); // O(n) space in worst case
```

### O(n²) - Quadratic Space

Memory usage grows with the square of input size.


```javascript
function createMatrix(n) {
  const matrix = [];
  for(let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0); // Creates n arrays of size n
  }
  return matrix;
}
```

## Analyzing JavaScript Code

Let's practice analyzing time and space complexity:


```javascript
function mystery(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      result += arr[i] * arr[j];
    }
  }
  return result;
}
```

**Time Complexity**: O(n²) - Two nested loops iterate through the array
**Space Complexity**: O(1) - Only one variable regardless of input size

### Recursive Function Analysis

![Recursion tree visualization](https://zvzzt.wordpress.com/wp-content/uploads/2014/05/fibonacci1.png)

```javascript
function recursiveMystery(n) {
  if(n <= 1) return 1;
  return recursiveMystery(n-1) + recursiveMystery(n-1);
}
```

**Time Complexity**: O(2^n) - Each call branches into two more calls
**Space Complexity**: O(n) - Maximum call stack depth

## Common JavaScript Operations


| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Array access | O(1) | `arr[i]` |
| Array push/pop | O(1) | Adding/removing at end |
| Array shift/unshift | O(n) | Adding/removing at beginning requires reindexing |
| Array splice | O(n) | Requires reindexing elements |
| Array.indexOf | O(n) | Linear search |
| Array.sort | O(n log n) | Browser-dependent implementation |
| Object property access | O(1) | Hash-based lookup |
| Map/Set operations | O(1) | get, set, has, delete |

```javascript
const arr = [1, 2, 3];
arr.push(4); // O(1)
arr.unshift(0); // O(n)
arr.splice(2, 0, 2.5); // O(n)

const obj = { name: "John", age: 30 };
const name = obj.name; // O(1)

const map = new Map();
map.set("key", "value"); // O(1)
map.get("key"); // O(1)
```

## Optimization Techniques


### 1. Memoization

Cache results of expensive function calls.


```javascript
// Without memoization: O(2^n) time
function fibonacci(n) {
  if(n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

// With memoization: O(n) time, O(n) space
function fibonacciMemoized(n, memo = {}) {
  if(n in memo) return memo[n];
  if(n <= 1) return n;
  
  memo[n] = fibonacciMemoized(n-1, memo) + fibonacciMemoized(n-2, memo);
  return memo[n];
}
```

### 2. Use Appropriate Data Structures


```javascript
// Finding if a value exists
// Array (inefficient for large datasets): O(n) time
const array = [1, 2, 3, 4, 5];
const hasValue = array.includes(3);

// Set (efficient): O(1) time
const set = new Set([1, 2, 3, 4, 5]);
const hasValueInSet = set.has(3);

// Looking up values by key
// Array of objects (inefficient): O(n) time
const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const user = users.find(user => user.id === 2);

// Object (efficient): O(1) time
const userMap = {
  1: {id: 1, name: 'Alice'},
  2: {id: 2, name: 'Bob'}
};
const mappedUser = userMap[2];
```

### 3. Avoid Nested Loops When Possible


```javascript
// Find pairs that sum to target (inefficient): O(n²) time
function findPairsNested(arr, target) {
  const pairs = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

// Using a hash map (efficient): O(n) time, O(n) space
function findPairsOptimized(arr, target) {
  const pairs = [];
  const seen = new Set();
  
  for(const num of arr) {
    const complement = target - num;
    if(seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  
  return pairs;
}
```

## Practice Problems


1. **Analyze the time and space complexity of this function:**

```javascript
function mystery(arr) {
  return arr.filter(x => x % 2 === 0)
           .map(x => x * 2)
           .reduce((sum, x) => sum + x, 0);
}
```

2. **Improve this inefficient code:**

```javascript
function findDuplicates(arr) {
  const duplicates = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}
```

3. **What is the space complexity of recursively generating all permutations?**

```javascript
function permutations(str) {
  if(str.length <= 1) return [str];
  
  const result = [];
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    
    for(const perm of permutations(remainingChars)) {
      result.push(char + perm);
    }
  }
  
  return result;
}
```
