# [Rectangle into Squares](https://www.codewars.com/kata/rectangle-into-squares/javascript)

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

![picture of a rectangle containing square](http://i.imgur.com/lk5vJ7sm.jpg)

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array with the size of each of the squares.

Shell bash returns a string.
```js
  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
```
#Note: lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. See kata, Square into Squares. Protect trees!.

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. Return the string "nil" with Bash.

In that case the returned structure of C will have its sz component equal to 0. (See the "Solution" and "Examples" tabs)
```js
  sqInRect(5, 5) should return null
```


### Index
* [Solution Process](#solution-process)
* [Solution Explanation](#solution-explanation)
* [Language Features](#language-features)
* [Uses](#uses)
* [Notes](#notes)

---

## Solution Process
0. Codewars challenge
    ```
    Complete the solution so that it reverses the string value passed into it.
    ```
1. Phrased as a function  
    ```
    Write a function that reverses the string value passed into it.
    ```
2. Define arguments and return value   
    ```
    Write a function that takes in a string and returns the string in reverse. 
    ```
3. Convert that sentence into high-high level pseudocode.
    ```
    solution(string)
        reverse the string
        return reversed string
    End solution
    ```
4. Declare return value, isolate the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        reverse the string
        return reversed_string
    End solution   
    ```
5. Begin exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        available options:
            - for or while loops
            - if statements
            + string methods
        return reversed_string
    End solution   
    ```
6. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        available options: String methods
            - String.length
            - String.indexOf
            - String.search
            + String.split
            - String.substring
            + String.slice
            + String.replace
        return reversed_string
    End solution   
    ```
7. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        two possible strategies:
            + convert to array and back to string
                String.split
                + arrays have a reverse method
            - slice the end replace at the beginning    
                String.slice, String.replace
                - this could get tricky with for loops
        return reversed_string
    End solution   
    ```
8. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            convert array back to string
                - read out and concatinate each element in a loop
                + Array.join
        return reversed_string
    End solution   
    ```
9. Decided on a strategy.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            Array.join
        return reversed_string
    End solution   
    ```
10. Refactoring pseudocode closer to real code
    ```
    solution(string)
        reversed_string <- ""
        temp_array = [];
        temp_array <- string.split("")
        temp_array <- temp_array.reverse()
        reversed_string <- temp_array.join("")
        return reversed_string
    End solution   
    ```
11. Convert pseudocode to real code.
    ```js
    function solution(string) {
        let reversed_string = "";
        let temp_array = [];
        
        temp_array = string.split("");
        temp_array = temp_array.reverse();
        reversed_string = temp_array.join("");
        
        return reversed_string;
    };  
    ```    
    
[TOP](#index)

---

## Solution Explanation

This solution works in 4 steps:
0. Take in a string as an argument.
1. Individually map the letters of the argument into an array using String.split("").
2. Reverse the elements in the array with Array.reverse().
3. Concatenate the letters in the array using Array.join("").
4. Return the freshly reversed string.

This problem is pretty simple so I didn't have to use any particular problem solving techniques.  A step-by-step solution was good enough since I was able to find native JS methods to do the work for me.


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

