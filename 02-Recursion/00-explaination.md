## 🔁 What is Recursion in JavaScript?

**Recursion** is a programming technique where a function **calls itself** to solve a problem.

Instead of using loops (`for`, `while`), recursion breaks a problem into **smaller sub-problems** until it reaches a condition where it can stop.

---

## 🧠 Core Idea

A recursive function has **2 essential parts**:

### 1. Base Case (Stopping Condition)

* Prevents infinite recursion
* When this condition is met → function stops calling itself

### 2. Recursive Case

* Function calls itself with a smaller/simpler input

---

## 📦 Basic Example (Factorial)

```javascript
function factorial(n) {
    // Base case
    if (n === 0) return 1;

    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### 🪜 Step-by-step execution:

```
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1 * factorial(0)
= 5 * 4 * 3 * 2 * 1 * 1
= 120
```

---

## 🔄 How Recursion Works Internally (Call Stack)

JavaScript uses a **call stack** to manage function calls.

Every recursive call is pushed onto the stack until the base case is reached.

### Example stack flow:

```
factorial(3)
 → factorial(2)
   → factorial(1)
     → factorial(0) ✅ base case
```

Then it **unwinds**:

```
factorial(1) → returns 1
factorial(2) → returns 2
factorial(3) → returns 6
```

---

## ⚠️ Important Concepts

### 1. Stack Overflow

If you forget the base case:

```javascript
function bad() {
    return bad(); // infinite recursion ❌
}
```

👉 This causes:

```
RangeError: Maximum call stack size exceeded
```

---

### 2. Tail Recursion (Advanced)

A recursive call that is the **last operation** in the function.

```javascript
function sum(n, result = 0) {
    if (n === 0) return result;
    return sum(n - 1, result + n);
}
```

👉 Note: JavaScript engines **do not reliably optimize** tail recursion.

---

### 3. Recursion vs Loop

| Feature     | Recursion                 | Loop            |
| ----------- | ------------------------- | --------------- |
| Readability | Cleaner for some problems | Straightforward |
| Performance | Slower (stack overhead)   | Faster          |
| Memory      | Uses call stack           | Minimal         |
| Use cases   | Trees, DFS, backtracking  | Iterations      |

---

## 🌳 Real Use Cases of Recursion

### 1. Tree Traversal

```javascript
function traverse(node) {
    if (!node) return;

    console.log(node.value);
    traverse(node.left);
    traverse(node.right);
}
```

---

### 2. Flatten Nested Array

```javascript
function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flatten([1, [2, [3, 4]], 5]));
```

---

### 3. Fibonacci

```javascript
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

⚠️ Inefficient → use memoization for optimization

---

## 🚀 Advanced Concept: Memoization

Caching results to avoid repeated calculations.

```javascript
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

---

## 🧩 When to Use Recursion

Use recursion when:

* Problem can be divided into smaller subproblems
* Data structure is hierarchical (trees, graphs)
* Backtracking is needed (permutations, combinations)

---

## ❌ When NOT to Use Recursion

Avoid when:

* Deep recursion → risk of stack overflow
* Simple loops can solve it faster
* Performance is critical

---

## 🧠 Mental Model (Very Important)

Think recursion as:

> "Solve a small part → trust recursion to solve the rest"

---

## 🔥 Interview-Level Questions You Should Practice

* Reverse a string using recursion
* Flatten nested arrays
* Deep clone an object
* Binary search using recursion
* Generate permutations
* Solve maze/backtracking problems


# ⚠️ Common Mistakes in Recursion (JavaScript)

---

## ❌ 1. Missing Base Case → Stack Overflow

If you don’t define a stopping condition, the function keeps calling itself forever.

```javascript
function countDown(n) {
    console.log(n);
    countDown(n - 1); // ❌ no base case
}
```

👉 Result:

```
RangeError: Maximum call stack size exceeded
```

✅ Fix:

```javascript
function countDown(n) {
    if (n === 0) return; // ✅ base case
    console.log(n);
    countDown(n - 1);
}
```

---

## ❌ 2. Not Simplifying the Input → Never Reaches Base Case

If your recursive step doesn’t move toward the base case, recursion becomes infinite.

```javascript
function sum(n) {
    if (n === 0) return 0;
    return n + sum(n + 1); // ❌ wrong direction
}
```

👉 This keeps increasing → never hits `0`

✅ Fix:

```javascript
return n + sum(n - 1); // ✅ moving toward base case
```

---

## ❌ 3. Too Deep Recursion → Large Inputs Crash

JavaScript has a **limited call stack size** (~10k–20k calls depending on engine).

```javascript
function deep(n) {
    if (n === 0) return;
    deep(n - 1);
}

deep(100000); // ❌ stack overflow
```

✅ Fix:

* Use loops instead
* Or optimize (tail recursion / iteration)

---

## ❌ 4. Ignoring Time Complexity (Very Common)

Some recursive solutions look simple but are **extremely slow**.

### Example: Fibonacci (Bad)

```javascript
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

👉 Time Complexity: **O(2ⁿ)** ❌

### Why?

* Same values are recomputed again and again

---

## ✅ Fix with Memoization

```javascript
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

👉 Time Complexity: **O(n)** ✅

---

## ❌ 5. Recomputing Same Work (Overlapping Subproblems)

This is related to time complexity but deserves separate focus.

👉 If your recursion:

* Calls same inputs repeatedly
* Doesn’t store results

→ You’re wasting time

---

## ❌ 6. Forgetting to Return Values

Very common bug:

```javascript
function factorial(n) {
    if (n === 0) return 1;
    factorial(n - 1); // ❌ missing return
}
```

👉 Result → `undefined`

✅ Fix:

```javascript
return n * factorial(n - 1);
```

---

## ❌ 7. Mutating Shared State Incorrectly

When using arrays/objects, recursion can accidentally modify shared data.

```javascript
function addItems(arr) {
    if (arr.length === 0) return [];

    let result = addItems(arr.slice(1));
    result.push(arr[0]); // ⚠️ mutation
    return result;
}
```

👉 Can lead to bugs in complex recursion

✅ Safer approach:

```javascript
return [arr[0], ...addItems(arr.slice(1))];
```

---

## ❌ 8. Wrong Base Case Placement

Order matters!

```javascript
function test(n) {
    console.log(n);
    if (n === 0) return;
    test(n - 1);
}
```

👉 Works, but prints extra values sometimes unintentionally

Better clarity:

```javascript
if (n === 0) return;
console.log(n);
test(n - 1);
```

---

## ❌ 9. Mixing Recursion with Side Effects (Confusing Logic)

```javascript
let total = 0;

function sum(n) {
    if (n === 0) return;
    total += n;
    sum(n - 1);
}
```

👉 Hard to debug & reuse

✅ Better:

```javascript
function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
}
```

---

## ❌ 10. Not Understanding Stack Behavior

People forget that:

* Each call waits for the next call
* Execution happens in **reverse order (unwinding phase)**

👉 Leads to confusion in:

* Tree traversal
* Backtracking

---

# 🧠 Golden Rules to Avoid These Mistakes

Always check:

✔ Do I have a base case?
✔ Is my input getting closer to base case?
✔ What is the time complexity?
✔ Am I recomputing things?
✔ Am I returning values properly?
✔ Can this cause stack overflow?

---

# 🔥 Pro Tip (Interview Level Insight)

Whenever you write recursion, mentally answer:

> “What happens for n → n-1 → n-2 → ... → base case?”

If you can’t trace it step-by-step, your recursion is probably wrong.



