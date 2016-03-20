# Control Flow Cheat Sheet
Here are some notes on what's been covered in this chapter; feel free to copy this and extend it to make your own cheatsheet.
---

## Conditionals
---
### Ternary Operator

- The ternary operator takes in a condition; depending on whether that condition is truthy or falsey, the operator will evaluate to one of two specified values.

`(x > 10) ? 'Greater than 10.' : 'Less than 10.';`

- It can also be used inside larger expressions.

`'Today is ' + ((temp > 70) ? '' : 'not') + ' hot.';`

### if...else statement syntax


`if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // Code to be executed if condition1 and condition2 are false, and condition3 is true
} else {
  // Code to be executed if condition1, condition2, and condition3 are false
}
`

- With _else if_, each additional condition will only be checked if all of the prior conditions have failed.
### _switch_ statement syntax

switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  default:
    // Code to be executed if expression is different from both value1 and value2
  }
## Loops

- Loops are used to tell our programs to take repeated action.

### _while_ Loops

- _while_ loops can run indefinitely, so long as the condition remains true.
- The loop's condition is re-evaluated each time the block finishes running.

### _for_ Loops

- A _for_ loop will generally run a fixed number of times, not indefinitely.
- The three parameters for a for loop, in order, are (1) an initialization, (2) a condition, and (3) a final expression.


# Functions Cheat Sheet
---
Here are some notes on what's been covered in this chapter; feel free to copy this and extend it to make your own cheatsheet.

## Functions
---
### Defining and Using JavaScript Functions

- A __function__ is a custom operation that can be run on command. It can be use both as an operator (accepting input values and calculating output values) and as a subroutine (do this thing... then do this thing...).
- Functions must be __defined__ before they can be used. To define a function, use the following recipe:

`var myFunctionName = function() {
  // Body of the function
}`
- To use, or __call__ a function, simply type the name of your function, followed by () (plus any inputs that you might be passing in).
`myFunctionName()`

## _return_ Statements

In addition to specifying a final value for the function to give back as a result, a return statement will cause the function that contains it to immediately end when that line is run. For example, if the function below is operating on a number greater than ten, it will stop executing at its second line, and return 15, not `x.`

`var someFunc = function(x) {
  if (x > 10) {
    return 15;
  }
  return x;
}`

## Using Functions in the Field
---
### Best Practices for Writing Functions

- In addition to functionality, making your code readable is one of the most critical things to consider.
- Here are some guidelines that you can keep in mind:
  - Keep you functions small - don't try to do too much in one step.
  - Use good naming for functions and variables. Call things what they are!
  - Avoid repetitive code, where possible.
  - Generally, don't hard-code specific values into your program if you can help it.
### Problem Solving with Functions

- Sometimes, when you're trying to figure out how to break apart a problem, it can be helpful to imagine functions that could accomplish specific pieces of it.
- Learning how to break down a complicated problem into smaller pieces is one of the most important parts of programming, and the best way to get better at it is to practice! In programming, we call this decomposition.
