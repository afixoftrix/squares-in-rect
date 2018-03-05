# [Janpot](https://www.codewars.com/users/janpot)'s Solution

```js
function solution(str){
  if (str.length === 0) {
    return '';
  } else {
    return solution(str.substr(1)) + str[0];
  }
}
```
---

## Solution Explanation

Janpot wrote a recursive solution.  It removes the first letter from it's argument and and passes the remainder to itself. It then concatenates the first letter of it's argument onto the return value of it's recursive call. 

Here in an illustration of how this solution would reverse "tree":
* solution("tree") -> solution("ree") + "t" 
  * solution("ree") -> solution("ee") + "r"
    * solution("ee") -> solution("e") + "e"
      * solution("e") -> solution("") + "e"
        * solution("") -> return ""
      * return "" + "e"
    * return "e" + "e"
  * return "ee" + "r"
* return "eer" + "t"
* "eert"

Check out this [page from General Resources](https://elewa-academy.github.io/General-Resources/cs-101/recursion.html) for another recursive solution to this problem.

---

## Language Features

Janpot used a couple String features:
* Concatenation
* String.length
* String indexing

An if/else statement.

And a boolean check.


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
