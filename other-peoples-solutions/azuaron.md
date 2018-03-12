# [Azuaron](https://www.codewars.com/users/Azuaron)'s Solution

```js
function sqInRect(lng, wdth, inner) {
  if(lng == wdth && inner == null) return null;
  var longer = lng > wdth ? lng : wdth, shorter = lng > wdth ? wdth : lng,
      next = longer == shorter ? [] : sqInRect(longer - shorter, shorter, true);
  return [shorter].concat(next);
}
```

---

## Solution Explanation

This is a crazy solution. Crazy in the sense that it uses as little code a s possible for something that took me a couple lines of code to write but also that it is hard to wrap my head around what is happening in the return statement.

Azuaron's algorithm is a single function that takes three arguments as opposed to the propblems two argument design. The function is recursive and ends when the longer variable is equal to the shorter or when the initial condition isnt met. 

Initially there is an if statement that checks if variable `lng` is equal with `wdth` and if inner is equal to null. If both conditions are met then the function program stops.

The variables `shorter` and `longer` are assigned the shorter and longer dimensions of the square respectively by comparing the function argument variables through tenary operator. If `lng` is greater than wdth then `longer` is assigned lng and vice versa for `shorter` variable.

The variable `next` tests to see if `longer` is equal with `shorter`. If so, next is assigned an empty array, otherwise, `next` gets a return value of the enclosing function (recursrion of sqInRect). 

Finally the function returns an array with concatenation of the variable next which can be the recursion or just an empty array. If it is a recursion then it becomes something like this: ` [shorter].concat([shorter].concat([shorter].concat(n..))).. `

This is a really smart approach. Hard to see in the mind because of recursion but smart nontheless.
 

---

## Language Features

Major javascript features used by Azuaron:
* Array Concatenation
* Tenary Operators
* If Statement

And a for loop checked by the length of the string.


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
