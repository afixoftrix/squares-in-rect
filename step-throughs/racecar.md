# Racecar

<a href="https://goo.gl/aVwAjh" target="_blank">Permalink to my step-through</a>

My solution isn't the most interesting one for step-through-ing.  Basically any valid input will be treated the same.  Solutions using fewer language features and more control flow will be more interesting to step through.

```js
function solution(string) {
    let reversed_string = "";
    let temp_array = [];
    
    temp_array = string.split("");
    temp_array = temp_array.reverse();
    reversed_string = temp_array.join("");
    
    return reversed_string;
}; 

var arg = "racecar";

console.log(solution(arg));

```

---
## Step 1

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __undefined__
  * Objects
    a. solution: __my function__

JavaScript defined the function and initialized my variable to undefined.

---
## Step 2

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__

JavaScript defined _string_ as "racecar".

---
## Step 3

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __undefined__
    c. temp_array: __undefined__

JavaScript created a new execution context (frame) when I called _solution_ on line 14.  It also initialized all the variables in that context.

---

## Step 4

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __""__
    c. temp_array: __undefined__

Assigned "" to the variable _reversed-string_.

---

## Step 5

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __""__
    c. temp_array: __points to temp-array object__
  * Objects
    a. temp_array: __empty__

Created a new empty array and assigned it to "temp_array".

---

## Step 6

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __""__
    c. temp_array: __points to temp-array object__
  * Objects
    a. temp_array: __["r", "a", "c", "e", "c", "a", "r"]__

Split "string" into separate letters and put them in the "temp_array".

---

## Step 7

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __""__
    c. temp_array: __points to temp-array object__
  * Objects
    a. temp_array: __["r", "a", "c", "e", "c", "a", "r"]__

Reassigned "temp_array" to a new array with the letters reversed.  (See how the example you choose makes a difference?  It's not obvious that "racecar" was reversed.)



---

## Step 8

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __"racecar"__
    c. temp_array: __points to temp-array object__
  * Objects
    a. temp_array: __["r", "a", "c", "e", "c", "a", "r"]__

Takes the letters in "temp_array", concatenates them into a string, and assigns that string to "reversed_string".

---

## Step 9

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__
2. solution
  * Variables
    a. string: __"racecar"__
    b. reversed_string: __"racecar"__
    c. temp_array: __points to temp-array object__
  * Objects
    a. temp_array: __["r", "a", "c", "e", "c", "a", "r"]__
  * Returns:  "racecar"

Returns the value of "reversed_string" to the global frame.

---

## Step 10

1. Global
  * Variables
    a. solution: _points to the object named solution_
    b. string: __"racecar"__
  * Objects
    a. solution: __my function__

Deletes the frame that was temporarily created while JavaScript was executing my function.  Then console.logs the return value: "racecar".


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>











