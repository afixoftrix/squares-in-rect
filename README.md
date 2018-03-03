# [Reversed Strings](https://www.codewars.com/kata/reversed-strings)

Complete the solution so that it reverses the string value passed into it.

Reverser: function
* Args: 1
  * str: String
    * A string to be reversed.
* Return: String
  * A backwards version of the string passed in.
* Behavior: Takes in a string, reverses the letters, and returns it.


### Index
* [Solution Explanation](#solution-explanation)
* [Language Features](#language-features)
* [Uses](#uses)
* [Notes](#notes)

---
## Solution Explanation

This solution works in 4 steps:
0. Take in a string as an argument.
1. Individually map the letters of the argument into an array using String.split("").
2. Reverse the elements in the array with Array.revers().
3. Concatenate the letters in the array using Array.join("").
4. Return the freshly reversed string.

This problem is pretty simple so I didn't have to use any particular problem solving techniques.  A step-by-step solution was good enough since I was able to find native JS methods to do the work for me.

(The solution used in this demo was written by [MzLovelyj](https://www.codewars.com/users/MzLovelyj))

[TOP](#index)

---

## Language Features

This solution relied on a few native methods:
* Array.join
* Array.revers
* String.split

I did not use any control flow in this problem.

[TOP](#index)

---
## Uses

Here are a few applications that could use this function:
* A scrabble AI
* A coding/decoding application
* Online boggle board


[TOP](#index)

---

## Notes

Things I learned studying this problem:
* Reading MDN documentation
* What "native language features" means
* How to write specs
* For loops can go down to 0

New vocabulary:
* Method: A function property in an object
* Test case: A sample input/output pair for a function 

Things I still struggle with:
* Choosing good test cases
* Errors from misspelling
* Finding helpful stack-overflow questions
* Understanding other people's solutions

Next study goals:
* Practice reading documentation
* Finding 2 more test cases for each problem
* Writing more readable solutions


[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

