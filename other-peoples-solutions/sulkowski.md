# [sulkowski](https://www.codewars.com/users/sulkowski)'s Solution

```js
function sqInRect(a, b, initial = true){
  if (a === b) { return initial ? null : [a] }  
  const min = Math.min(a, b)
  const max = Math.max(a, b)
    
  return [min, ...sqInRect(max - min, min, false)]
}
```
---

## Solution Explanation

Sulkowski's solution is also recursion like Azuaron's. The solution algorithms are also similar. Sulkowski takes a more mathematical approach in his version and also uses some es6 syntax. Sulkowski's solution is also much more readable. 

The function takes in three arguments. The third argument is a boolean `initial` that has an initial value of true ( an es6 feature).

On first run through the function tests if the dimensions of the area are the same. If they are and it is the initial run, it returns null and the function ends. If its not the initial run then an array containing a is returned.

Variables `min` and `max` are calculated using the Math prototype method of min and max.

The return of the fuction is an array with an initial value of  min and a recursion of sqInRect spread using es6's spread operator.

Check out this [page from General Resources](https://elewa-academy.github.io/General-Resources/cs-101/recursion.html) for another recursive solution to this problem.

---

## Language Features

Here are some features used by Sulkowski:
* Spread Operator (ES6)
* Defaut Parameters (ES6)
* Math.max()
* Math.min()
* Recursion

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
