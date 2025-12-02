function add(a, b, onSub, onMul) {
    console.log("Addition:", a + b);

    onSub(a, b);
    onMul(a, b);
}

function sub(a, b) {
    console.log("Subtraction:", a - b);
}

function mul(a, b) {
    console.log("Multiplication:", a * b);
}

add(10, 20, sub, mul);


/*

# Step-by-step explanation

## **1. You call the `add` function like this:**

add(10, 20, sub, mul);

This line sends **four arguments** into the `add` function:

| Parameter name | Value passed             |
| -------------- | ------------------------ |
| `a`            | 10                       |
| `b`            | 20                       |
| `onSub`        | sub (function reference) |
| `onMul`        | mul (function reference) |

So inside the `add` function:

* `a` → 10
* `b` → 20
* `onSub` → the **sub function**
* `onMul` → the **mul function**

---

# 2. Inside `add()`, when you call:

onSub(a, b);

This is the same as:

sub(10, 20);

Because `onSub` **is referring** to the `sub` function.

So the `sub` function receives:

* first parameter = `a` = 10
* second parameter = `b` = 20

That’s why inside `sub(a, b)`:

console.log("Subtraction:", a - b);

It prints:

Subtraction: -10
---

# 3. Same logic for `onMul(a, b)`

onMul(a, b);

This actually becomes:

mul(10, 20);

Because `onMul` refers to the `mul` function.

So inside `mul(a, b)`:

console.log("Multiplication:", a * b);

It prints:

Multiplication: 200
--

#  **In simple words**

> **You passed the functions `sub` and `mul` as arguments.
> Inside `add()`, when you call `onSub(a, b)`, you are calling the same function (`sub`) with the values 10 and 20.**

---

# Visual Explanation (super simple)

### Call:

```
add(10, 20, sub, mul)
```

Inside `add(a,b,onSub,onMul)`:

```
a = 10
b = 20
onSub = sub
onMul = mul
```

So:

```
onSub(a,b) → sub(10,20)
onMul(a,b) → mul(10,20)

*/

